import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    isPoccessing: false,
    updatingProfile: false,
    changingPassword: false,
    showModal: false,
    isEditProfileOpen: false,
  }),
  
  actions: {
    // allLowerCaseNoCaps(str) {
    //   return str.split(' ').join('').toLowerCase()
    // },
  bodySwitch(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
        return
      }
      document.body.style.overflow = 'visible'
    },
    setBackUrl(url) {
        this.isBackUrl = url
    },
    async hasSessionExpired() {
      await $axios.interceptors.response.use((response) => {
        // Call was successful, continue.
        return response;
      }, (error) => {
          switch (error.response.status) {
              case 401: // Not logged in
              case 419: // Session expired
              case 503: // Down for maintenance
                  // Bounce the user to the login screen with a redirect back
                  useUserStore().resetUser()
                  window.location.href = '/';
                  break;
              case 500:
                  alert('Oops, something went wrong!  The team has been notified.');
                  break;
              default:
                  // Allow individual requests to handle other errors
                  return Promise.reject(error);
          }
      });
    },
  
  },
  persist: true,
})