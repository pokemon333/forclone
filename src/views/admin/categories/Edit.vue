<script>
    import ApiService from '../../../ApiService'

     export default{

        data(){
            return{
                slug : this.$route.params.slug,
                category : {},
                inputData : {
                    name : "",
                    status: ""
               },
            }
        },
        mounted(){
            ApiService.get('http://localhost:8000/api/admin/categories' + "/" + this.slug)
                .then((response)=>{
                    this.category = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        methods:{
            editFunction(){
                ApiService.patch('http://localhost:8000/api/admin/categories' + "/" + this.slug , this.inputData )
                .then((response)=>{
                    console.log(response);
                })
                .catch((error)=> {
                    console.log(error);
                })
                window.location.assign('http://localhost:5173/admin/categories');
            }
        }
     }
</script>

<template>
    <div >
       <form class="flex flex-col w-1/2 mx-auto mt-16 text-gray-500 bg-gray-200" @submit.prevent="editFunction">
            <h1 class="p-2 pt-4 pb-0 ml-2 text-2xl text-gray-500">EDIT {{ category.name }}
                 <div v-if="category.status ">Status : True</div>
                 <div v-else>Status : False</div>
                </h1>
            <label for="" class="m-4 mb-1">Name</label>
            <input type="text" v-model="inputData.name" class="px-2 py-1 m-4 mt-0 border-2 rounded caret-gray-400 h-2/3 focus:outline-none">
            <label for="" class="m-4 mb-1">Status</label>
            <input type="text" v-model="inputData.status" class="px-2 py-1 m-4 mt-0 border-2 rounded caret-gray-400 h-2/3 focus:outline-none">
            <div class="mb-2">
                <router-link :to="{name : 'categories'}"  class="w-1/6 px-4 cursor-pointer py-1.5 m-2 ml-4 text-sm font-bold text-white bg-gray-500 rounded right-4 top-10 hover:bg-gray-700"  >back</router-link>
                <button class="w-16 py-2 m-2 ml-4 text-sm font-bold text-white bg-gray-500 rounded right-4 top-10 hover:bg-gray-700">Edit</button>
            </div>
            
        </form>
    </div>
</template>
