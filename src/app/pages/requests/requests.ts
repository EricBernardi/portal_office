export interface Requester {
  id: number;
  nameUser: string;
  item: Item;
}

export interface Item {
  descriptionItem: string;
  priceItem: string;
}
