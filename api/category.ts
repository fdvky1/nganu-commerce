import type { Category } from "~/types/category"

const runtimeConfig = useRuntimeConfig();
const getCategories = () => {
  return new Promise((resolve, reject) => {
    fetch(runtimeConfig.public.service+"/rest/v1/categories", {
        headers: {
          "apikey": runtimeConfig.public.apikey
        }
    }).then(async res => {
        const data = await res.json()
        resolve(data as Category[])
    }).catch(reject)
  })
}

const createCategory = (categoryName: string) => {
  return new Promise((resolve, reject) => {
    fetch(runtimeConfig.public.service+"/rest/v1/categories", {
      method: "POST",
      body: JSON.stringify({
        name: categoryName
      }),
      headers: {
        "content-type": "application/json",
        "apikey": runtimeConfig.public.apikey
      }
    }).then(resolve).catch(reject)
  })
}

export default getCategories
export { createCategory }