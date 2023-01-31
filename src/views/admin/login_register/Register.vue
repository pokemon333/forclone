<template>
    <div class="container">
         <div class="flex justify-center">
              <div class="w-1/3 h-screen rounded">
                   <form @submit.prevent="register" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;" class="flex flex-col justify-center w-full my-16 text-gray-500 bg-gray-100 rounded-lg ">
                         <h1 class="p-2 mx-auto my-4 text-3xl text-gray-500">Sign Up</h1>
                        <div class="flex flex-col">
                             <label class="px-2 py-1 m-2 mb-0" for="name">Name</label>
                             <input type="text" class="px-2 py-1 m-4 my-0 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none" v-model="registerData.name">
                        </div>
                        
                        <div class="flex flex-col">
                             <label class="px-2 py-1 m-2 mb-0" for="email">Email</label>
                             <input type="text" class="px-2 py-1 m-4 my-0 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none" v-model="registerData.email">
                        </div>

                        <div class="flex flex-col">
                             <label class="px-2 py-1 m-2 mb-0" for="password">Password</label>
                             <input type="password" class="px-2 py-1 m-4 my-0 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none" v-model="registerData.password">
                        </div>

                        <div class="flex flex-col">
                             <label class="px-2 py-1 m-2 mb-0" for="password_confirmation">Confirm Password</label>
                             <input type="password" class="px-2 py-1 m-4 my-0 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none" v-model="registerData.password_confirmation">
                        </div>

                        <div class="flex justify-between mt-2 mb-4">
                              <div class="flex flex-col m-5 ">
                                   <router-link :to="{name : 'AdminLogin'}" class="hover:text-gray-600">Already have an account?</router-link>
                              </div>
                              <button class="px-4 py-1 m-4 bg-gray-300 rounded h-2/3 hover:bg-gray-400 hover:text-white">sign up</button>
                         </div>
                   </form>
              </div>
         </div>
    </div>
</template>

<script>

import ApiService from '../../../ApiService'
import JWTService from '../../../JWTService'
export default {
     mounted(){
          if (JWTService.getToken()) {
               window.location.assign('http://localhost:5173');
          }
     },
     data(){
          return {
               registerData : {
                    name : "",
                    email : "",
                    password : "",
                    password_confirmation : ""
               },

          }
     },

     methods : {
          register(){
               ApiService.post('http://localhost:8000/api/register' , this.registerData)
               .then((response) => {
                    JWTService.saveToken(response.data.data.token);
                    if(JWTService.getToken()){
                         window.location.assign("http://localhost:5173/admin");
                    } else{
                              console.log('error');
                    }
               }).catch((response) => {
                    console.log(response)
               })
          }
     }
}
</script>

<style>

</style>