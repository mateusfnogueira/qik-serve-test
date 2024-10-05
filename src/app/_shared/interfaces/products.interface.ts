interface Images {
  id: number;
  image: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  images: Images[];
  available: boolean;
}

export interface IProductCategory {
  id: number;
  name: string;
  description: string;
  position: number;
  visible: number;
  images: Images[];
  items: IProduct[];
}

export interface IProductMenu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: IProductCategory[];
}
