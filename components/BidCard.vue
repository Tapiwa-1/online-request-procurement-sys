<template>
    <NuxtLink to="/bid/bid"
        class="flex flex-col items-center bg-white border border-gray-200 py-1 my-1 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="~/assets/img/sample1.jpeg" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Item: {{ BidData.item }}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Description: {{ BidData.description }}
            </p>
        </div>
    </NuxtLink>
</template>
<script setup>
defineProps({
    BidData: Object
})

</script>