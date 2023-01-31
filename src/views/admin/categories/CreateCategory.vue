<script>
import axios from 'axios';
import ApiService from '../../../ApiService'

export default{

     data(){
          return{
               inputData : {
                    name : "",
                    status: ""
               },
          }
     },
     methods: {
          createFunction(){
               ApiService.post("http://localhost:8000/api/admin/categories" , this.inputData)
                    .then((response) => {
                      response.data.data = this.inputData;
                      window.location.assign('http://localhost:5173/admin/categories');
                    })
                    .catch((error) => {
                      console.log(error);
                    });
          },

     }
}
</script>

<template>
      <div class="w-1/2 mx-auto mt-16 bg-gray-100">
            <form @submit.prevent="createFunction" class="flex flex-col">
                <h1 class="p-2 pb-0 ml-2 text-2xl text-gray-500">CREATE CATEGORY</h1>
                <input type="text" v-model="inputData.name" placeholder="name" class="p-2 m-4 border-2 rounded caret-gray-400 h-2/3 focus:outline-none">
                <input type="text" v-model="inputData.status" placeholder="status" class="p-2 m-4 border-2 rounded caret-gray-400 h-2/3 focus:outline-none">
                <div>
                  <router-link :to="{name : 'categories'}"  class="w-1/6 px-6 cursor-pointer py-1.5 m-2 ml-4 text-sm font-bold text-white bg-gray-500 rounded right-4 top-10 hover:bg-gray-700"  >back</router-link>
                  <button  class="w-1/6 px-2 py-2 m-2 text-sm font-bold text-white bg-gray-500 rounded right-4 top-10 hover:bg-gray-700">create</button>
                </div>
            </form>
      </div>
</template>
