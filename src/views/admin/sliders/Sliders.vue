<script >
import axios from "axios";
import ApiService from "../../../ApiService";

export default {
  data() {
    return {
      form: new FormData(),
      slidersDatas: [],
      display: "create",
      showData: []
    };
  },
  methods: {
    fileUpload(event) {
      let file = event.target.files[0];
      console.log(file);
      this.form.set("file", file);
      console.log(this.form);
    },
    changeForm(event, input) {
      this.form.set(input, event.target.value);
      console.log(this.form.get("order_by"));
    },
    submit(e) {
      e.preventDefault();
      ApiService.post("/admin/sliders/", this.form).then(c => {
        console.log(c.data.data);
      })
    },

    show(slider) {
      (this.display = "show"),
        ApiService.get("/admin/sliders/" + slider).then(c => {
          this.showData = c.data.data;
        });
    },
    edit(slider) {},
    Delete(slider) {
      ApiService.delete("/admin/sliders/" + slider).then(c => {
        console.log(c);
      });
    }
  },
  mounted() {
    localStorage.setItem("display", "index");
    ApiService.get("admin/sliders").then(c => {
      this.slidersDatas = c.data.data;
      console.log(this.slidersDatas);
    });
  }
};
</script>

<template>
  <main>
    <!-- This is the Index file -->

    <div v-if="this.display == 'index'">
      <div v-show="true">
        <div class="flex flex-col w-full">
          <table class="w-1/2 mx-auto mt-8 text-gray-500 bg-gray-100 table-auto">
            <thead class="bg-gray-400">
              <tr>
                <th>ID</th>
                <th class="pr-9">image</th>
                <th class="pr-10">STATUS</th>
                <th class="hover:text-blue-500">
                  <button
                    class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                    @click="this.display = 'create'"
                  >Create</button>
                </th>
              </tr>
            </thead>
            <tbody v-for="(image, index) in this.slidersDatas" :key="index">
              <tr>
                <td class="pt-2 pl-8">{{ image.id }}</td>
                <td class="pl-10">
                  <img :src="image.image" class="object-fill w-20 h-20 pt-3" />
                </td>
                <td class="pt-2 pl-12">{{ image.status }}</td>
                <td>
                  <button
                    v-on:click="show(image.id)"
                    class="px-4 py-2 ml-2 font-semibold bg-transparent border rounded hover:bg-sky-300 text-sky-400 hover:text-white border-sky-400 hover:border-transparent"
                  >show</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- This is the create form -->

    <div v-if="this.display=='create'">
      <div class="flex justify-center w-full bg-slate-100">
        <div class="w-3/6 mt-3">
          <div class="flex justify-center max-w-sm p-6 ml-20 bg-white shadow-lg rounded-xl">
            <form>
              <div class="mb-6 form-group">
                <!-- <label
                  for="exampleInputEmail1"
                  class="inline-block mb-2 text-gray-700 form-label"
                >Status</label>
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  v-model="formDatas.status"
                />-->
                <label
                  for="exampleInputEmail1"
                  class="inline-block mb-2 text-gray-700 form-label"
                >order_by</label>
                <input
                  type="number"
                  v-on:keyup="changeForm($event,'order_by')"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>
              <div class="mb-6 form-group">
                <label class="inline-block mb-2 text-gray-700 form-label">Image</label>
                <input
                  type="file"
                  @change="fileUpload"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>
              <button
                class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click="submit"
              >Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- This is the show form -->

    <div v-if="this.display=='show'">
      <div class="flex justify-center w-full bg-slate-100">
        <div class="w-3/6 mt-3">
          <div class="flex justify-center">
            <div class="max-w-sm bg-white rounded-lg shadow-lg">
              <img class="rounded-t-lg w-96 h-96" :src="this.showData.image" alt />
              <div class="p-6">
                <h1>status : {{ this.showData.status }}</h1>
              </div>
              <button
                @click="Delete(this.showData.id)"
                class="px-4 py-2 ml-2 font-semibold text-red-400 bg-transparent border border-red-400 rounded hover:bg-red-300 hover:text-white hover:border-transparent"
              >Delete</button>
              <button
                @click="edit(this.showData.id)"
                class="px-4 py-2 mb-2 ml-2 font-semibold text-yellow-300 bg-transparent border border-yellow-300 rounded hover:bg-yellow-300 hover:text-white hover:border-transparent"
              >Edit</button>
              <button
                @click="this.display = 'index'"
                class="px-4 py-2 mb-2 ml-2 font-semibold text-black bg-transparent border border-gray-500 rounded hover:bg-gray-500 hover:text-white hover:border-transparent"
              >Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

