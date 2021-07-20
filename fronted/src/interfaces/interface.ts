export interface InterfaceCard {
  id: number;
  category: number;
  title: string;
  price: string;
  images: Array<string>;
}

export interface InterfaceCategory {
  id: number;
  title: string;
}

export interface InterfaceOrder {
  id: number;
  price: string;
  count: number;
}

export interface SizeInterface {
  size: string;
  available: boolean;
}

export interface CardDetailInterface {
  id: number;
  category: number;
  title: string;
  images: Array<string>;
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  price: number;
  sizes: Array<SizeInterface>;
}

export interface SelectCardInterface extends CardDetailInterface {
  count: number;
  selectedSize: string;
}
