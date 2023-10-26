<template>
    <div class="relative select-none">
        <div class="border border-primary flex items-center justify-center px-3 py-2 rounded-lg gap-4 cursor-pointer w-full" @click="isShow = !isShow">
            <span class="text-primary font-medium">Category</span>
            <i :class="`ri-arrow-down-s-line text-primary text-xl text-bold transition duration-300 ${isShow ? 'rotate-180' : 'rotate-0'}`"></i>
        </div>
        <div v-show="isShow" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-full absolute top-14">
            <ul class="py-2 text-sm text-gray-700">
                <li>
                    <span class="block px-4 py-2 hover:bg-primary hover:text-white transition duration-200 cursor-pointer" @click="$emit('selectedCategory',null)">All</span>
                </li>
                <li v-for="category in categories" :key="category.id">
                    <span class="block px-4 py-2 hover:bg-primary hover:text-white transition duration-200 cursor-pointer" @click="$emit('selectedCategory',category.id)">{{ category?.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import type { Category } from "~/types/category"

defineProps({
    categories: {
        type: Array as PropType<Category[]>
    }
})

const isShow = ref(false);

defineEmits(["selectedCategory"]);

</script>