  <script >
    import ApiService from '../../../ApiService'
      export default {

        data(){
          return{
            indexMethod : true,
            showMethod : false,
            url:'http://localhost:8000/api/admin/categories',
            categories : [],
            showData : {
              name : "",
              status : ""
            },
          }
        },

        mounted() {
          ApiService.get(this.url)
                  .then( (response) => {
                    this.categories = response.data.data;
                  });
        },

        methods:{

          showFunction(param) {
            this.showMethod = true;
            this.indexMethod = false;
            ApiService.get(this.url +  "/" +param)
              .then((response) => {
                this.showData = response.data.data;

              });
          },
          storeSlug(slug){
            localStorage.setItem("slug" , slug);
          },
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

  <template>
    <main>

        <div class="flex flex-col w-full ">

                                                            <!-- INDEX -->
    <table class="w-1/2 mx-auto mt-8 text-gray-500 bg-gray-100 table-auto" v-if="indexMethod">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>STATUS</th>
            <th>
            <router-link to="category/create" class="px-1 py-1 pr-2 text-blue-500 rounded hover:text-white hover:bg-gray-500" >CREATE</router-link>
            </th>
          </tr>
        </thead>
        <tbody v-for="category in categories" :key="category">
          <tr>
            <td>{{ category.id }}.</td>
            <td>{{ category.name }}</td>
            <td v-if="category.status == 1">True</td>
            <td v-else>False</td>
            <td>
              <button @click="showFunction(category.slug)"  class="p-1 px-4 text-sm font-bold text-white bg-gray-500 rounded cursor-pointer hover:bg-gray-700">show</button>
            </td>
        </tr>
        </tbody>
      </table>

                                                          <!-- SHOW -->
      <div v-if="showMethod" class="w-1/2 p-8 mx-auto my-8 bg-gray-100">
        <h1 class="p-3 pb-2 text-3xl">ID : {{ showData.id }}</h1>
        <h1 class="p-3 pb-2 text-3xl">Name : {{ showData.name }}</h1>
        <p class="p-3 text-2xl" v-if="showData.status == 1">Status : True</p>
        <p class="p-3 text-2xl" v-else>Status : False</p>
        <div>
          <button class="px-3 py-1 ml-3 font-bold text-white bg-gray-500 rounded hover:bg-gray-700" @click="indexMethod = !indexMethod , showMethod = !showMethod">back</button>
          <router-link @click="storeSlug(showData.slug)" class="px-4 py-0.5 ml-3 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"   to="category/edit">edit</router-link>
          <button @click="deleteCategory(showData.slug)" class="px-3 py-1 ml-3 font-bold text-white bg-gray-500 rounded hover:bg-gray-700">delete</button>
        </div>
      </div>
  </div>

    </main>
  </template>

  <style scoped>
  th , td {
    text-align: left;
    padding: 10px 20px; 
  }
  </style>