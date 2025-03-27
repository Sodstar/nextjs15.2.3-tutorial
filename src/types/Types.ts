export default interface IProduct {
    id: number;
    title: string;
    price: number;
    image?: string;
}

export interface ICartItem {
    id: number;
    title: string;
    price: number;
    image?: string;
    qty:number;
}

export interface ICategory {
    id: number;
    number: string;
}


export interface ProductParams
{
    id:string
}