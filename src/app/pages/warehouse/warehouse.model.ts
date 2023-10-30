export interface Requester {
  id: number;
  name: string;
  item: Item;
}
export interface Item {
  description: string;
  price: string;
  status?: boolean;
  observation?: string;
}
