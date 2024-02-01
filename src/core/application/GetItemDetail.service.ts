import { IGetItemDetail } from "./interfaces/IGetItemDetail";
import { IItemDetail } from "./interfaces/IItemDetail";
import { IItemRepository } from "./repositories/IItemsRepository";

export class GetItemDetailService {
  public constructor(private readonly _itemsRepo: IItemRepository) {}

  public async getItemDetail(id: string): Promise<IGetItemDetail> {
    const itemDetail = await this._itemsRepo.getItemDetail(id);
    //MELI API RESPONDS AN OBJECT WITH A ERROR Property
    if (itemDetail.error) {
      throw JSON.stringify(itemDetail);
    }

    const { plain_text } = await this._itemsRepo.getItemDescription(
      itemDetail.id
    );
    const pictures = itemDetail.pictures.map((p: any) => p.secure_url);
    const item: IItemDetail = {
      id: itemDetail.id,
      title: itemDetail.title,
      price: {
        currency: itemDetail.currency_id,
        amount: itemDetail.price,
        decimals: 2, //???
      },
      pictures,
      condition: itemDetail.condition,
      free_shipping: itemDetail.shipping.free_shipping,
      sold_quantity: 932, //???
      description: plain_text,
    };
    return {
      author: {
        name: "Pachu",
        lastName: "Pizarro",
      },
      item,
    };
  }
}
