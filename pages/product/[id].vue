<template>
    <DetailProduct :product="product"/>
</template>
<script lang="ts">
import { Product } from '~/types/product';
export default {
    data(){
        return {
            product: Object as Product,
        }
    },
    created(){
        const id = this.$route.params.id as string
        this.getProductById(id)
    },
    methods: {
        getProductById(id: string){
            const runtimeConfig = useRuntimeConfig();
            fetch(runtimeConfig.public.service+`/rest/v1/products?select=name,price,image,description,categories(id,name)&id=eq.${id}`, {
                headers: {
                    "apikey": runtimeConfig.public.apikey
                }
            }).then(async res => {
                this.product = (await res.json())[0]
            })
        },
    }
}
</script>