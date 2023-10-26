<template>
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="w-full flex justify-between">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Recomended</h2>
          <Dropdown :categories="categories" @selected-category="getProducts"/>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative shadow-lg bg-slate-100 p-2" v-for="product in products" :key="product.id">
            <CardsCardProduct :product="product"/>
        </div>
    </div>
  </div>
</div>

</template>

<script lang="ts">
import type { Product } from "~/types/product"
import type { Category } from "~/types/category"

export default {
    data(){
        return {
            products: [] as Product[],
            categories: [] as Category[],
        }
    },
    created(){
        this.getCategories()
        this.getProducts()
    },
    methods: {
        getProducts(category_id = null){
            const runtimeConfig = useRuntimeConfig();
            fetch(runtimeConfig.public.service+`/rest/v1/products?select=id,name,price,image,description,categories(id,name)${category_id ? "&category_id=eq."+category_id : ""}`, {
                headers: {
                    "apikey": runtimeConfig.public.apikey
                }
            }).then(async res => {
                this.products = await res.json()
            })
        },
        getCategories(){
            const runtimeConfig = useRuntimeConfig();
            fetch(runtimeConfig.public.service+"/rest/v1/categories", {
                headers: {
                    "apikey": runtimeConfig.public.apikey
                }
            }).then(async res => {
                this.categories = await res.json()
            })
        }
    }
}
</script>~/types/product