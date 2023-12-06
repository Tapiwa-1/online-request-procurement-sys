<template>
    <NuxtLayout name="authenticated-layout">
        <div class="container mx-auto">
            <div class="mb-3 text-gray-500 dark:text-gray-400">


                <div
                    class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome Tapiwa Motsi</h5>
                    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work
                        forward with e-tengai.</p>
                    <div
                        class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                        <a href="#"
                            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <LogoNav />
                        </a>
                        <a href="#"
                            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <LogoNav />

                        </a>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div class="col-span-2">
                    <div class="mb-3 text-gray-500 dark:text-gray-400 shadow">
                        <div class=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel"
                            aria-labelledby="statistics-tab">
                            <dl
                                class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white sm:p-8">
                                <div class="flex flex-col">
                                    <dt class="mb-2 text-3xl font-extrabold">00.0%</dt>
                                    <dd class="text-gray-500 dark:text-gray-400">CPU Usage</dd>
                                </div>
                                <div class="flex flex-col">
                                    <dt class="mb-2 text-3xl font-extrabold">0.0</dt>
                                    <dd class="text-gray-500 dark:text-gray-400">Memory Usage</dd>
                                </div>
                                <div class="flex flex-col">
                                    <dt class="mb-2 text-3xl font-extrabold text-green-400">100%</dt>
                                    <dd class="text-gray-500 dark:text-gray-400">System health</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div class="mb-3 text-gray-500 dark:text-gray-400">
                        <div class=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel"
                            aria-labelledby="statistics-tab">
                            <dl
                                class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 dark:text-white sm:p-8">
                                <div class="flex flex-col">
                                    <dt class="mb-2 text-3xl font-extrabold">234</dt>
                                    <dd class="text-gray-500 dark:text-gray-400">Users</dd>
                                </div>
                                <div class="flex flex-col">
                                    <dt class="mb-2 text-3xl font-extrabold">12</dt>
                                    <dd class="text-gray-500 dark:text-gray-400">Back Ups</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="mb-3 text-gray-500 dark:text-gray-400">

                    <div
                        class="w-full max-w-full lg:max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                                            <img class="w-8 h-8 rounded-full" src="https://i.pravatar.cc/300"
                                                alt="Neil image">
                                        </div>
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {{ user.name }}
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {{ user.email }}
                                            </p>
                                        </div>
                                        <div
                                            class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            {{ user.role }}
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div class="mb-3 text-gray-500 dark:text-gray-400">
                <div
                    class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">e-Tengai part of HIT 400 Project
                        Capstone terms and condition apply</p>

                </div>
            </div>

        </div>

    </NuxtLayout>
</template>
<script setup>
const users = ref([
    { id: 1, name: "Tapiwa Motsi", email: "tmosti10@gmail.com", role: "Admin" },
    { id: 1, name: "John Doe", email: "Jdoe@gmail.com", role: "supplier" },
    { id: 1, name: "Mutsa Muguti", email: "mmuguti&gmail.com", role: "IT director" },
    { id: 1, name: "Nelson Nunga", email: "nnunga@gmail.com", role: "Proc director" },
    { id: 1, name: "Farai Kanoda", email: "fkanoda@gmail.com", role: "Fin director" },
    { id: 1, name: "Gibson Wodzi", email: "gwodzi0@gmail.com", role: "Proc officer" },
])
</script>