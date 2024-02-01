import { IGetItems } from "./interfaces/IGetItems";
import { IItem } from "./interfaces/IItem";
import { IItemRepository } from "./repositories/IItemsRepository";

export class GetItemsService {
  protected constructor(private readonly _itemsRepo: IItemRepository) {}

  public async getItems(searchKey: string): Promise<IGetItems | []> {
    const itemsResult = await this._itemsRepo.getItems(searchKey);
    const { results } = itemsResult;

    if (!results.listen) {
      return [];
    }
    try {
      const categories = results.map((item: any) => item.category_id);

      const items: IItem[] = results.map((item: any) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 2, //??
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      }));
      return {
        author: { name: "Pachu", lastName: "Pizarro" },
        categories,
        items,
      };
    } catch (error) {
      throw error;
    }
  }
}
