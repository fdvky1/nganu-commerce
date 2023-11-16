<template>
    <DetailProduct :product="product"/>
</template>
<script lang="ts" setup>
import { Product } from '~/types/product';
import { getProductById } from "~/api/product"

const product = ref<Product>()
const id = parseInt(useRoute().params.id as string)

try {
    product.value = await getProductById(id) as Product
} catch (e) {
    console.error(e)
    navigateTo("/product")
}
</script>