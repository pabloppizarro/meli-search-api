import { IItem } from "./IItem";

export interface IGetItems {
  author: {
    name: string;
    lastName: string;
  };
  categories: [string];
  items: IItem[];
}
