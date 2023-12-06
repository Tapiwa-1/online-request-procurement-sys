<script setup>
import { ref } from 'vue';

const props = defineProps({
    mustVerifyEmail: Boolean,
    status: String,
});
const { $profileStore, $generalStore } = useNuxtApp()
let name = ref($profileStore.name)
let email = ref($profileStore.email)

let errors = ref(null)

// onMounted(async () => {
//     await $profileStore.editProfile();
// })
// const updateProfile = async () => {
//     errors.value = null
//     try {
//         $generalStore.updatingProfile = true
//         await $profileStore.updateProfile(name.value, email.value);
//         await $profileStore.getProfile();
//         $generalStore.updatingProfile = false;
//     } catch (error) {
//         $generalStore.updatingProfile = false
//         errors.value = error.response.data.errors
//     }
// }
</script>

<template>
    <section>
        <header class="flex">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Profile Information
            </h3>
            <button type="button" @click="$generalStore.isEditProfileOpen = false"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
        </header>

        <div class="mt-6 space-y-6">
            <div>
                <InputLabel for="name" value="Name" />

                <TextInput id="name" type="text" class="mt-1 block w-full" :placeholder="$profileStore.name"
                    v-model:model-value="name" required autofocus autocomplete="name" />

                <!-- <InputError class="mt-2" :message="errors && errors.name ? errors.name[0] : ''" /> -->
                <InputError class="mt-2" message="This is an error" />
            </div>

            <div>
                <InputLabel for="email" value="Email" />

                <TextInput id="email" type="email" class="mt-1 block w-full" :placeholder="$profileStore.emails"
                    v-model:model-value="email" required autocomplete="email" />

                <!-- <InputError class="mt-2" :message="errors && errors.email ? errors.email[0] : ''" /> -->
                <InputError class="mt-2" message="This is an error" />
            </div>

            <div v-if="true">
                <p class="text-sm mt-2 text-gray-800">
                    Your email address is unverified.
                    <NuxtLink to="/" method="post" as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Click here to re-send the verification email.
                    </NuxtLink>
                </p>

                <div v-show="props.status === 'verification-link-sent'" class="mt-2 font-medium text-sm text-green-600">
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton @click="updateProfile()">Save</PrimaryButton>

                <Transition v-if="true" enter-from-class="opacity-0" leave-to-class="opacity-0"
                    class="transition ease-in-out">
                    <p class="text-sm text-gray-600">Saving.</p>
                </Transition>
            </div>
        </div>
    </section>
</template>