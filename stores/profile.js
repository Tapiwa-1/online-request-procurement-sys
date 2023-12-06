import { defineStore } from 'pinia'
// import axios from '../plugins/axios'

// const $axios = axios().provide.axios

export const useProfileStore = defineStore('profile', {
  state: () => ({
    id:1,
    name:'example name',
    email:'example@gmail.com',
    image: null,
    status:true,
    mustVerifyEmail:true,
  }),
  // actions: {
  //   async editProfile(){
  //     let res = await $axios.get('/api/get-profile')
  //     this.$state.mustVerifyEmail = res.data[0]
  //   },
  //   async getProfile() {
  //     let res = await $axios.get('/api/get-profile')
  //     this.$state.id = res.data[0].id
  //     this.$state.name = res.data[0].name
  //     this.$state.email = res.data[0].email
  //     this.$state.image = res.data[0].image
      
  //   },
  //   async updateProfile(name, email) {
  //     await $axios.patch('api/update-profile', {
  //       name: name,
  //       email: email
  //     })
  //   },
  //   async changePassword(current_password,password,password_confirmation){
  //     await $axios.patch('api/update-password-profile',{
  //       current_password: current_password,
  //       password:password,
  //       password_confirmation:password_confirmation
  //     })
  //   },
  //   async deleteProfile(password) {
  //     await $axios.patch('api/destroy-profile',{
  //       password: password
  //     })
  //     this.resetUser()
  //   },
  //   resetUser() {      
  //     this.$state.id = ''
  //     this.$state.name = ''
  //     this.$state.email = ''
  //     this.$state.image = ''
  //   }
  // },
  persist: true,
})