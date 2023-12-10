<template>
    <NuxtLayout name="authenticated-layout">
        <div class="container mx-auto">
            <div class="mb-3 text-gray-500 dark:text-gray-400">


                <DashboardTopSlot>

                    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Roles</h5>
                    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Manage Roles here</p>
                </DashboardTopSlot>

            </div>
            <div
                class="w-full max-w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <TableSlot :table-meta="tableMeta">
                    <li v-for="role in roles" :key="role.title" class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {{ role.title }}
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {{ role.description }}
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                edit
                            </div>
                        </div>
                    </li>
                </TableSlot>

            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
const roles = ref([

    {
        "title": "Minister of Local Government and Public Works",
        "description": "Provides political leadership and direction to the ministry and oversees all functions related to local government and public works."
    },
    {
        "title": "Permanent Secretary",
        "description": "Heads the administrative arm of the ministry and is responsible for implementing government policies and programs related to local government and public works."
    },
    {
        "title": "Director of Local Government Services",
        "description": "Oversees the provision of technical and financial support to local authorities and is responsible for promoting sound local governance."
    },
    {
        "title": "Director of Urban Development",
        "description": "Develops and implements policies and programs related to urban development and planning."
    },
    {
        "title": "Director of Rural Development",
        "description": "Develops and implements policies and programs related to rural development and poverty alleviation."
    },
    {
        "title": "Chief Planning Officer",
        "description": "Provides technical expertise on planning matters and assists local authorities in preparing and implementing development plans."
    },
    {
        "title": "Chief Finance Officer",
        "description": "Provides financial management oversight and ensures that the ministry's resources are used efficiently and effectively."
    },
    {
        "title": "Director of Human Resources",
        "description": "Manages the ministry's human resources and ensures that it has the skills and capacity to deliver on its mandate."
    },
    {
        "title": "Public Relations Officer",
        "description": "Coordinates the ministry's communication activities and promotes its policies and programs to the public."
    }

])
const tableMeta = ref({
    heading: "Roles",
    url: null,
    urlName: "Add Role",
    addRole: true,
})
</script>
