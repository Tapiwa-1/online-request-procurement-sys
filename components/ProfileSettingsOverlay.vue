<template>
    <div id="ProfileSettingsOverlay"
        class="fixed flex justify-center pt-14  z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto"
        @click="$generalStore.isEditProfileOpen = false">
        <div class=" max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 ">
            <div class=" p-4 sm:p-8 bg-white shadow sm:rounded-lg dark:bg-gray-900">
                <UpdateProfileInformationForm :must-verify-email="mustVerifyEmail" :status="status" class="max-w-xl" />
            </div>

            <div class="p-4 sm:p-8 bg-white  shadow sm:rounded-lg dark:bg-gray-900">
                <UpdatePasswordForm class="max-w-xl" />
            </div>

            <div class="p-4 sm:p-8 bg-white shadow  sm:rounded-lg dark:bg-gray-900">
                <DeleteUserForm class="max-w-xl" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { $generalStore } = useNuxtApp()
let isRegister = ref(true)
</script>