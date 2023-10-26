<template>
    <div>
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
          <img :src="product?.image" :alt="product?.name" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <NuxtLink :to="`/product/${product?.id}?name=${encodeURIComponent(product?.name as string)}`">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{product?.name}}
              </NuxtLink>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{product?.categories?.name || "uncategorized"}}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">Rp {{product?.price}}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import type { Product } from "~/types/product"

defineProps({
    product: {
        type: Object as PropType<Product>
    }
})
</script>