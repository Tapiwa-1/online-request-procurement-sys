<template>
  <NuxtPage />
  <ProfileSettingsOverlay v-if="isEditProfileOpen" />
</template>
<script setup>
import { storeToRefs } from 'pinia';
const { $generalStore } = useNuxtApp()
const { isEditProfileOpen } = storeToRefs($generalStore)


useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900'
  }
})

onMounted(async () => {
  $generalStore.bodySwitch(false)
  isLoginOpen.value = false
  isEditProfileOpen.value = false
  try {
    // await $generalStore.hasSessionExpired()
    // await $generalStore.getRandomUsers('suggested')
    // await $generalStore.getRandomUsers('following')
    // if ($userStore.id) {
    //   $userStore.getUser()
    // }
  } catch (error) {
    console.log(error)
  }
  // watch(() => isLoginOpen.value, (val) => $generalStore.bodySwitch(val))
  watch(() => isEditProfileOpen.value, (val) => $generalStore.bodySwitch(val))
})
</script>