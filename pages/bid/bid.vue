<template>
    <NuxtLayout />
    <div class="container mx-auto pt-2 ">


        <div class="md:flex">
            <ul
                class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                <li>
                    <NuxtLink to="/"
                        class="inline-flex items-center px-4 py-3 text-white  rounded-lg  w-full hover:text-gray-300 "
                        aria-current="page">
                        Bids
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/market"
                        class="inline-flex items-center px-4 py-3 text-white  rounded-lg  w-full hover:text-gray-300"
                        aria-current="page">
                        Market
                    </NuxtLink>
                </li>

            </ul>
            <HomeTabCard>
                <template #header>
                    <h1>Bids Details </h1>
                </template>
                <BidCardMoreDetails v-bind:bid-details="bidDetails" />

            </HomeTabCard>
        </div>


    </div>
</template>
<script setup>
const bidDetails = ref({
    bidImg: "~/assets/img/sample1.jpeg",
    bidInvitation: " RFP-2023-12-02-M1",
    bidder: "ACME Technologies",
    bidDate: " 2023-12-02",
    bidProduct: "20 units of MacBook Air (M2)",
    bidDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eius autem! Ipsa officiis doloribus obcaecati autem omnis placeat voluptatem magni distinctio, repellat expedita, asperiores explicabo possimus fugit nihil minus eaque?"
})
</script>
