<template>
    <div v-if="!uploadedImage" id="ProfilePhotoSection"
        class="flex flex-col border-b sm:h-[118px] h-[145px] px-1.5 py-2 w-full">
        <div class="text-xl font-semibold text-gray-900 dark:text-white">
            Profile photo
        </div>

        <div class="flex items-center justify-center sm:-mt-6">
            <label for="image" class="relative cursor-pointer">
                <img class="rounded-full" width="95" src="https://picsum.photos/200">
                <div
                    class="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-0.5 border-gray-300 inline-block w-[32px]">
                    <PencilIcon class="-mt-1 ml-0.5" />
                </div>
            </label>
            <input class="hidden" type="file" id="image" @input="getUploadedImage"
                accept="image/png, image/jpeg, image/jpg">
        </div>
    </div>
    <div v-else class="max-w-xl h-[430px]">
        <Cropper class="h-[430px]" ref="cropper" :stencil-component="CircleStencil" :src="uploadedImage" />
    </div>

    <div id="CropperButtons" v-if="uploadedImage" class="flex items-center justify-end">
        <PrimaryButton @click="uploadedImage = null" class="mx-2">
            Cancel
        </PrimaryButton>

        <PrimaryButton @click="cropAndUpdateImage()">
            Save
        </PrimaryButton>
    </div>
</template>

<script setup>
import { Cropper, CircleStencil } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
import {
    PencilIcon,

} from '@heroicons/vue/24/outline'
const { $generalStore } = useNuxtApp()
let isRegister = ref(true)
let file = ref(null)
let cropper = ref(null)
let uploadedImage = ref(null)

const getUploadedImage = (e) => {
    file.value = e.target.files[0]
    uploadedImage.value = URL.createObjectURL(file.value)
}
const cropAndUpdateImage = async () => {
    const { coordinates } = cropper.value.getResult()
    let data = new FormData();

    data.append('image', file.value || '')
    data.append('height', coordinates.height || '')
    data.append('width', coordinates.width || '')
    data.append('left', coordinates.left || '')
    data.append('top', coordinates.top || '')

    try {
        // await $userStore.updateUserImage(data)
        // await $userStore.getUser()
        // await $profileStore.getProfile(route.params.id)

        // $generalStore.updateSideMenuImage($generalStore.suggested, $userStore)
        // $generalStore.updateSideMenuImage($generalStore.following, $userStore)

        // userImage.value = image.value
        uploadedImage.value = null
    } catch (error) {
        console.log(error)
    }
}
</script>