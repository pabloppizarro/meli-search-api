export interface IItemDetail {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  pictures: [string];
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}
