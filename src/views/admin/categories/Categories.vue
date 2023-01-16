  <script >
    import axios from 'axios';
    
      export default {

        data(){
          return{
            url:'http://localhost:8000/api/admin/categories',
            categories : [],
            inputData : {
              name : "",
              status: ""
            },
          }
        },

        mounted() {
          axios
          .get(this.url)
                  .then( (response) => {
                    this.categories = response.data.data;
                  });
        },

        methods:{
          createFunction(){
            axios
            .post(this.url , this.inputData)
                    .then((response) => {
                      response.data.data = this.inputData
                    })
          },
          showFunction(param){
            axios
            .get(this.url +  "/" +param)
              .then((response) => {
                console.log(response.data.data);
              })
          }
        }
      }
  </script>

  <template>
    <main>

        <div class="flex flex-col w-full ">
    <table class="w-1/2 mx-auto mt-8 text-gray-500 bg-gray-100 table-auto ">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>STATUS</th>
            <th class=" hover:text-blue-500">
              <router-link to="categories" >CREATE</router-link>
            </th>
          </tr>
        </thead>
        <tbody v-for="category in categories" :key="category">
          <tr>
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>{{ category.status }}</td>
            <td>
              <buttton @click="showFunction(category.slug)" class="p-1 px-4 text-sm font-bold text-white bg-gray-500 rounded cursor-pointer hover:bg-blue-400 hover:text-gray-600">show</buttton>
              <!-- <router-link to="/" class="p-1 px-4 text-sm font-bold text-white bg-gray-500 rounded hover:bg-blue-400 hover:text-gray-600">show</router-link> -->
            </td>
        </tr>
        </tbody>
      </table>
      <RouterView />

  </div>
                                                        <!-- create form -->
      <!-- <div class="mx-auto mt-8">
            <form @submit.prevent="createFunction" class="flex flex-col">
              <input type="text" v-model="inputData.name" placeholder="name" class="m-4 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none">
              <input type="text" v-model="inputData.status" placeholder="status" class="m-4 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none">
              <button  class="px-2 py-1 text-sm font-bold text-white bg-gray-500 rounded right-4 top-10 hover:bg-gray-800">create</button>
            </form>
      </div> -->



    </main>
  </template>

  <style scoped>
  th , td {
    text-align: left;
    padding: 10px 20px; 
  }

  </style>