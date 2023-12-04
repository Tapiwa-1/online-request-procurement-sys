<template>
    <NuxtLink to="/auth/login"
        class="flex flex-col items-start bg-white border border-gray-200 py-1 my-1 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="~/assets/img/sample1.jpeg" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="text-xl font-extrabold dark:text-white my-2">Bid Invitation: {{ bidDetails.bidInvitation }}</h5>

            <h5 class="text-xl font-extrabold dark:text-white my-2">Bidder: {{ bidDetails.bidder }}</h5>

            <h5 class="text-xl font-extrabold dark:text-white my-2">Bid Date: {{ bidDetails.BidDate }}</h5>

            <h5 class="text-xl font-extrabold dark:text-white my-2"> Item: {{ bidDetails.bidProduct }}</h5>

            <div class="" v-html="bidDetails.bidDescription"></div>
        </div>
    </NuxtLink>
</template>
<script setup>
defineProps({
    bidDetails: Object,
})

</script>