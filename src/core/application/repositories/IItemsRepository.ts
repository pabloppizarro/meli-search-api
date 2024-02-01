export interface IItemRepository {
  getItems(searchKey: string): Promise<any>;

  getItemDetail(id: string): Promise<any>;
  getItemDescription(id: string): Promise<any>;
}
