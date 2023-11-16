<template>
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="w-full flex justify-between">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Recomended</h2>
          <div class="flex gap-2 items-center">
              <nuxt-link to="/new/category" class="bg-gray-400 text-white hover:bg-gray-500 hover:text-gray-100 rounded-lg px-3 py-2">New Category</nuxt-link>
              <Dropdown :categories="categories" @selected-category="setProducts"/>
          </div>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative shadow-lg bg-slate-100 p-2" v-for="product in products" :key="product.id">
            <CardsCardProduct :product="product"/>
        </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import type { Product } from "~/types/product"
import type { Category } from "~/types/category"
import getProducts from "~/api/product"
import getCategories from "~/api/category"

const products = ref<Product[]>([])
const categories = ref<Category[]>([])

const setProducts = async (id: number|null = null) => {
    products.value = await getProducts(id) as Product[]
}

setProducts()
categories.value = await getCategories() as Category[]
</script>