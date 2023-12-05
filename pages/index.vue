<template>
    <NuxtLayout />
    <div class="container mx-auto pt-2 ">

        <!-- -style="border: red solid 2px;" -->
        <div class="md:flex">
            <ul
                class="flex-column  space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
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
                    <h1>Bids Available</h1>
                </template>
                <BidCard v-for="bid in bids" key="bid.id" v-bind:-bid-data="bid" />
            </HomeTabCard>
        </div>


    </div>
</template>
<script setup>

const bids = ref([
    {
        id: 1,
        item: "This is an item 1",
        description: "This is summary of item 1 details"
    },
    {
        id: 2,
        item: "This is an item 2",
        description: "This is summary of item 2 details"
    },
    {
        id: 3,
        item: "This is an item 3",
        description: "This is summary of item 3 details"
    },
    {
        id: 4,
        item: "This is an item 4",
        description: "This is summary of item 4 details"
    },
    {
        id: 5,
        item: "This is an item 5",
        description: "This is summary of item 5 details"
    },
    {
        id: 6,
        item: "This is an item 6",
        description: "This is summary of item 6 details"
    },
    {
        id: 7,
        item: "This is an item 7",
        description: "This is summary of item 7 details"
    },
    {
        id: 8,
        item: "This is an item 8",
        description: "This is summary of item 8 details"
    },
    {
        id: 9,
        item: "This is an item 9",
        description: "This is summary of item 9 details"
    },
    {
        id: 10,
        item: "This is an item 10",
        description: "This is summary of item 10 details"
    },
])

</script>
