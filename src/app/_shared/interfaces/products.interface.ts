interface Images {
  id: number
  image: string
}

export interface IProduct {
  id: number
  name: string
  description: string
  alcoholic: number
  price: number
  position: number
  visible: number
  availabilityType: string
  sku: string
  images: Images[]
  available: boolean
  category: string
  modifiers?: IModifiers[]
}

export interface IProductCategory {
  id: number
  name: string
  description: string
  position: number
  visible: number
  images: Images[]
  items?: IProduct[]
}

export interface IProductMenu {
  id: number
  name: string
  type: string
  collapse: number
  sections: IProductCategory[]
}

export interface IProductsResponse {
  categoryList: IProductCategory[]
  allProducts: IProduct[]
}

export interface IModifiers {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: IModifierItem[]
}

export interface IModifierItem {
  id: number
  name: string
  price: number
  maxChoices: number
  position: number
  visible: number
  availabilityType: string
  available: boolean
}

export interface IOrderItem {
  id: string
  itemId?: string
  name?: string
  description?: string
  quantity: number
  itemPrice: number
}

export interface IOrder {
  items: IOrderItem[]
  total: number
  status?: string
}
