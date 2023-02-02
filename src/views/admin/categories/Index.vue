<template>
    <main>

        <div class="flex flex-col w-full ">

    <table class="w-2/3 mx-auto mt-16 text-gray-500 bg-gray-100 table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>STATUS</th>
            <th class="flex justify-center">
              <router-link :to="{name : 'CreateCategory'}" class="px-1 py-1 pr-2 mx-auto text-blue-500 rounded hover:text-white hover:bg-gray-500" >CREATE</router-link>
            </th>
          </tr>
        </thead>
        <tbody v-for="(category,index) in categories" :key="index">
          <tr>
            <td>{{ index+1 }}.</td>
            <td>{{ category.name }}</td>
            <td v-if="category.status == 1">True</td>
            <td v-else>False</td>
            <td class="flex justify-center" >
              <div class="flex">
                <router-link  class="px-4 py-1 ml-3 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"   :to="{name : 'EditCategory' , params: {slug : category.slug}}">edit</router-link>
                <button @click="deleteCategory(category.slug)" class="px-3 py-1 ml-3 font-bold text-white bg-gray-500 rounded hover:bg-gray-700">delete</button>
              </div>
            </td>
        </tr>
        </tbody>
      </table>


  </div>

    </main>
</template>

<script >
import ApiService from '../../../ApiService'
  export default {

    data(){
      return{
        url:'admin/categories',
        categories : [],
      }
    },

    mounted() {
      ApiService.get(this.url)
              .then( (response) => {
                this.categories = response.data.data;
              });
    },

    methods:{
      deleteCategory(param){
        ApiService.delete(this.url +  "/" +param)
        .then((response) => {
          console.log(response.data.data);
          window.location.assign('http://localhost:5173/admin/categories');
        })
        .catch((error) => {
          console.log(error);
        })
      }
    }
  }
</script>


  <style scoped>
  th , td {
    text-align: left;
    padding: 10px 20px; 
  }
  </style>