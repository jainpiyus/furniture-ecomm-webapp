export interface CartModel {
    id: number,
    cartDetailsModel: CartDetailsModel[]
}

export interface CartDetailsModel {
    id: number,
    img: string,
    productId: number,
    quantity: number,
    title: string,
    price: number,
    active: boolean
}