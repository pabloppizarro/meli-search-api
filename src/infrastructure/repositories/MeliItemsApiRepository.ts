import { IItemRepository } from "../../core/application/repositories/IItemsRepository";

export class MeliItemsApiRepository implements IItemRepository {
  public constructor() {}

  public async getItems(searchKey: string): Promise<any> {
    return fetch(
      `${process.env.MELI_ITEMS_API}/sites/MLA/search?q=${searchKey}`
    )
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  }
}
