export interface IItemRepository<T> {
  getItems(searchKey: string): Promise<T>;
}
