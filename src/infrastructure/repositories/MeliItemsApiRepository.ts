import { IItemRepository } from "../../core/application/repositories/IItemsRepository";

export class MeliItemsApiRepository implements IItemRepository {
  public constructor() {}

  public async getItemDetail(id: string): Promise<any> {
    return fetch(`${process.env.MELI_ITEMS_API}/items/${id}`).then((res) =>
      res.json()
    );
  }
  public async getItemDescription(id: string): Promise<any> {
    return fetch(`${process.env.MELI_ITEMS_API}/items/${id}/description`).then(
      (res) => res.json()
    );
  }

  public async getItems(searchKey: string): Promise<any> {
    return fetch(
      `${process.env.MELI_ITEMS_API}/sites/MLA/search?q=${searchKey}`
    ).then((res) => res.json());
  }
}
