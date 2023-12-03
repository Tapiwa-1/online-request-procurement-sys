<template>
    <NuxtLayout />
    <div class="container mx-auto pt-2 ">


        <div class="md:flex">
            <ul
                class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                <li>
                    <NuxtLink to="/"
                        class="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600"
                        aria-current="page">
                        Bids
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/market"
                        class="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-gray-600"
                        aria-current="page">
                        Market
                    </NuxtLink>
                </li>

            </ul>
            <HomeTabCard>
                <template #header>
                    <h1>Bids Details </h1>
                </template>
                <BidCardMoreDetails />
            </HomeTabCard>
        </div>


    </div>
</template>
<script>


</script>
