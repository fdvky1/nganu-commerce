export interface Product {
    id?: number,
    name?: string,
    categories?: {
        id: number,
        name: string
    },
    price?: number,
    image?: string,
    color?: string,
    isCart?: boolean,
    description?: string,
    quantity?: number,
}