<template>
    <div class="bg-gray-100 h-[calc(100vh-8rem)] grid place-items-center">
        <div class="max-w-lg px-4 py-6 shadow-lg rounded-lg bg-gray-50">
            <form @submit.prevent="handleSubmit">
                <div>
                    <div v-for="(item, index) in fields" :key="index" class="mb-6">
                        <label :for="item.name" class="block mb-2 text-sm font-medium text-gray-900">{{ item.label }}</label>
                        <input 
                            :type="item.type"
                            :name="item.name"
                            :id="item.name"
                            v-model="item.value"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            :placeholder="item.placeholder" 
                            :required="item.required"
                        >
                    </div>
                </div>
                <button type="submit" class="bg-gray-300 px-4 py-2 rounded-lg mt-2">Simpan</button>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { createCategory } from "~/api/category"
const fields = ref([
  { name: "name", label: "Nama kategori", type: "text", value: "", placeholder: "", required: true },
]);

const handleSubmit = async () => {
    try {
        await createCategory(fields.value[0].value)
        fields.value[0].value = ""
    }catch(e){
        console.error(e)
    }
}
</script>