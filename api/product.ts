import type { Product } from "~/types/product"

const runtimeConfig = useRuntimeConfig()

const getProducts = (categoryId: number|null = null) => {
    return new Promise((resolve, reject) => {
        fetch(runtimeConfig.public.service+`/rest/v1/products?select=id,name,price,image,description,categories(id,name)${categoryId ? "&category_id=eq."+categoryId : ""}`, {
            headers: {
                "apikey": runtimeConfig.public.apikey
            }
        }).then(async res => {
            const data = await res.json()
            resolve(data as Product[])
        }).catch(reject)
    })
}

const getProductById = (productId: number|null = null) => {
    return new Promise((resolve, reject) => {
        fetch(runtimeConfig.public.service+`/rest/v1/products?select=name,price,image,description,categories(id,name)&id=eq.${productId}`, {
            headers: {
                "apikey": runtimeConfig.public.apikey
            }
        }).then(async res => {
            const data = await res.json()
            resolve(data[0] as Product)
        }).catch(reject)
    })
}

export default getProducts
export {
    getProductById
}