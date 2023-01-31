<script >
export default {


      data() {
            return {
                  open: false,
                  nav_groups: [
                        {
                              title: "Admin Layout",
                              nav_menus: [
                                    {
                                          title: "Dashboard",
                                          route: "home",
                                          icon: "fa-solid fa-house text-xs"
                                    },
                                    {
                                          title: "Customers",
                                          route: "customers",
                                          icon: "fa-solid fa-user"
                                    },
                                    {
                                          title: "Roles",
                                          route: "roles",
                                          icon: "fa-solid fa-check"
                                    },

                              ]
                        },
                        {
                              title: "Contents",
                              nav_menus: [
                                    {
                                          title: "Sliders",
                                          route: "sliders",
                                          icon: "fa-solid fa-image"
                                    },
                                    {
                                          title: "Categories",
                                          route: "categories",
                                          icon: "fa-solid fa-tag"
                                    },
                                    {
                                          title: "Contents",
                                          route: "contents",
                                          icon: "fa-solid fa-pen"
                                    },
                                    {
                                          title: "Messages",
                                          route: "messages",
                                          icon: "fa-solid fa-envelope"
                                    }
                              ]
                        }
                  ],
            }
      },
      methods:{

      }
}

</script>

<template>
      <main>
            <div class="flex justify-end w-full">
                  <!-- SIDE BAR -->
                  <div class="fixed left-0 flex flex-col w-1/6 h-screen text-gray-500 bg-gray-100">
                        <!-- logo -->
                        <router-link to="/"
                              class="py-3 text-xl italic border-b-2 px-14 border-gray hover:text-blue-700">
                              <img src="../../../public/images/logo.png" class="w-2/3" alt="">
                        </router-link>

                        <div v-for="group, g_index in nav_groups" :key="g_index" class="p-4 border-b-2 border-gray px-7">
                              <h1 class="px-6 pb-2 font-bold">{{ group.title }}</h1>
                              <p v-for="menu, index in group.nav_menus" :key="index"
                                    class="p-2 hover:text-blue-500 hover:scale-110">
                              <router-link :to="{ name: menu.route }"><i class="text-sm text-gray-500" :class=menu.icon ></i>
                                          {{ menu.title }}</router-link>
                              </p>
                        </div>

                  </div>
                  <!-- MAIN FEED -->
                  <div class="w-5/6 ">
                        <!-- NAV  BAR -->
                        <div class="fixed flex flex-row w-5/6 bg-gray-200 h-14">
                              <!-- search box -->
                              <form action="" class="flex flex-row justify-center w-2/3 p-1 mt-2">
                                    <input type="text"
                                          class="w-1/3 p-2 border border-transparent border-none rounded caret-gray-400 h-2/3 focus:outline-none"
                                          placeholder="search">
                                    <button
                                          class="px-1 ml-2 text-sm text-gray-500 bg-transparent border border-gray-400 rounded h-2/3 hover:text-white hover:border-transparent hover:bg-gray-700">search</button>
                              </form>

                              <!-- noti + profile -->
                              <div class="flex flex-row justify-end w-1/3">
                                    <div class="flex flex-row mx-4">
                                          <a href="" class="mx-3 my-5 ml-8 text-gray-500 hover:text-blue-500"><i
                                                      class="far fa-comment"></i> </a>
                                          <a href="" class="mx-4 my-5 text-gray-500 hover:text-blue-500"><i
                                                      class="fas fa-bell"></i> </a>
                                          <div @click="open = !open"
                                                class="relative flex flex-row mt-1 ml-6 cursor-pointer">
                                                <img src="../../../public/images/profile2.webp"
                                                      class="w-6 h-6 mt-3 rounded-full" alt="">
                                                <p
                                                      class="m-3 text-xl font-thin text-gray-500 cursor-pointer select-none hover:text-blue-500">
                                                      Zwe Zar Ni <i
                                                            class="text-sm text-gray-500 fa-solid fa-circle-chevron-down text-thin"></i>
                                                </p>
                                                <button v-if="open != false"
                                                      class="absolute w-24 h-8 py-2 text-sm font-bold text-white bg-gray-500 rounded right-4 top-10 hover:bg-gray-800">Log
                                                      out</button>

                                          </div>

                                    </div>
                              </div>
                        </div>

                        <!-- MAIN FEED -->
                        <div>
                              <RouterView />
                        </div>
                  </div>


  data() {
    return {
      open: false,
      nav_groups: [
        {
          title: "Admin Layout",
          nav_menus: [
            {
              title: "Dashboard",
              route: "home",
              icon: "fa-sharp fa-solid fa-computer"
            },
            {
              title: "Customers",
              route: "customers",
              icon: "fa-solid fa-user"
            },
            {
              title: "Roles",
              route: "roles",
              icon: "fa-solid fa-ranking-star"
            }
          ]
        },
        {
          title: "Contents",
          nav_menus: [
            {
              title: "Sliders",
              route: "sliders",
              icon: "fa-solid fa-image"
            },
            {
              title: "Categories",
              route: "categories",
              icon: "fa-solid fa-tag"
            },
            {
              title: "Contents",
              route: "contents",
              icon: "fa-solid fa-file"
            },
            {
              title: "Messages",
              route: "messages",
              icon: "fa-solid fa-message"
            }
          ]
        }
      ]
    };
  }
};
</script>

<template>
  <main>
    <div class="flex w-full">
      <!-- SIDE BAR -->
      <div class="flex flex-col w-1/6 h-screen text-gray-500 bg-gray-100">
        <!-- logo -->
        <router-link
          to="/"
          class="pt-2 pb-2 text-xl italic border-b-2 px-14 border-gray hover:text-blue-700"
        >
          <img src="../../../public/images/logo.png" class="w-2/3" alt />
        </router-link>

        <!-- contents management -->
        <div
          v-for="group, g_index in nav_groups"
          :key="g_index"
          class="p-4 border-b-2 border-gray px-7"
        >
          <h1 class="px-5 pb-2 text-sm font-bold">{{ group.title }}</h1>
          <p
            v-for="menu, index in group.nav_menus"
            :key="index"
            class="p-2 hover:text-blue-500 hover:text-lg"
          >
            <router-link :to="{ name: menu.route }">
              <i :class="menu.icon"></i>
              {{ menu.title }}
            </router-link>
          </p>
        </div>
      </div>
      <!-- MAIN FEED -->
      <div class="w-5/6">
        <!-- NAV  BAR -->
        <div class="flex flex-row bg-gray-200 h-14">
          <!-- search box -->
          <form action class="flex flex-row justify-center w-2/3 p-1 mt-2">
            <input
              type="text"
              class="w-1/3 p-2 border border-transparent border-none rounded caret-gray-400 h-2/3 focus:outline-none"
              placeholder="search"
            />
            <button
              class="px-1 ml-2 text-sm text-gray-500 bg-transparent border border-gray-400 rounded h-2/3 hover:text-white hover:border-transparent hover:bg-gray-700"
            >search</button>
          </form>

          <!-- noti + profile -->
          <div class="flex flex-row justify-end w-1/3">
            <div class="flex flex-row mx-4">
              <a href class="mx-3 my-5 ml-16 text-gray-500 hover:text-blue-500">
                <i class="far fa-comment"></i>
              </a>
              <a href class="mx-4 my-5 text-gray-500 hover:text-blue-500">
                <i class="fas fa-bell"></i>
              </a>
              <div @click="open = !open" class="relative flex flex-row mt-1 ml-8 cursor-pointer">
                <img
                  src="../../../public/images/profile2.webp"
                  class="w-6 h-6 mt-3 rounded-full"
                  alt
                />
                <p
                  class="m-3 text-xl font-thin text-gray-500 cursor-pointer select-none hover:text-blue-500"
                >
                  Zwe Zar Ni
                  <i
                    class="text-sm text-gray-500 fa-solid fa-circle-chevron-down text-thin"
                  ></i>
                </p>
                <button
                  v-if="open != false"
                  class="absolute w-24 h-8 py-2 text-sm font-bold text-white bg-gray-500 rounded right-4 top-10 hover:bg-gray-800"
                >
                  Log
                  out
                </button>
              </div>

            </div>
          </div>
        </div>

        <!-- MAIN FEED -->
        <div>
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>
