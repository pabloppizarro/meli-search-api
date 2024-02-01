export interface IItemRepository {
  getItems(searchKey: string): Promise<any>;
}
