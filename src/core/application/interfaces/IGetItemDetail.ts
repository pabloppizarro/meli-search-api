import { IItemDetail } from "./IItemDetail";

export interface IGetItemDetail {
  author: {
    name: string;
    lastName: string;
  };
  item: IItemDetail;
}
