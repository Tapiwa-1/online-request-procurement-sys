<template>
    <NuxtLayout name="authenticated-layout">
        <div class="container mx-auto">
            <div class="mb-3 text-gray-500 dark:text-gray-400">


                <DashboardTopSlot>

                    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Users</h5>
                    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Manage Users here</p>
                </DashboardTopSlot>

            </div>
            <div
                class="w-full max-w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Users</h5>
                    <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </a>
                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        <li v-for="user in users" :key="user.id" class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full" src="https://i.pravatar.cc/300" alt="Neil image">
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {{ user.name }}
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {{ user.email }}
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {{ user.role }}
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>


        </div>
    </NuxtLayout>
</template>
<script setup>
const users = [
    {
        "name": "User 2",
        "email": "user96@example.com",
        "role": "Chief Finance Officer"
    },
    {
        "name": "User 14",
        "email": "user17@example.com",
        "role": "Chief Planning Officer"
    },
    {
        "name": "User 60",
        "email": "user16@example.com",
        "role": "Director of Housing Finance"
    },
    {
        "name": "User 11",
        "email": "user21@example.com",
        "role": "Director of National Housing"
    },
    {
        "name": "User 49",
        "email": "user98@example.com",
        "role": "Chief Planning Officer"
    },
    {
        "name": "User 5",
        "email": "user79@example.com",
        "role": "Director of Procurement"
    },
    {
        "name": "User 3",
        "email": "user99@example.com",
        "role": "Director of National Housing"
    },
    {
        "name": "User 52",
        "email": "user44@example.com",
        "role": "Public Relations Officer"
    },
    {
        "name": "User 76",
        "email": "user32@example.com",
        "role": "Director of Housing Standards"
    },
    {
        "name": "User 52",
        "email": "user36@example.com",
        "role": "Director of Local Government Services"
    }
];
</script>