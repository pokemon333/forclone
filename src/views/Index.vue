<template>
<div :class="theme == 'dark'? 'darkTheme': ''" >

                                             <!-- NavBar -->
     <div class="sticky top-0 z-40 w-screen text-gray-400 h-14">

          <div class="flex justify-between navBar">

               <router-link to="/" class="p-2">
                    <img src="../../../public/images/logo.png" class="w-20 mb-2 ml-6" alt="">
               </router-link>
               
               <ul class="flex mt-2 text-xl ">
                    <li class="m-2 mx-3 hover:text-indigo-600 hover:scale-110" v-for="navItem in navItems" :key="navItem">
                         <a v-bind:href="navItem.route" class="text-gray-500 no-underline">{{ navItem.name }}</a>
                    </li>
                                        <!-- theme -->
                    <li class="m-2 mx-4 hover:scale-110">
                         <button @click="toggleTheme"><i class="fa-regular fa-lightbulb"></i></button>
                    </li>
               </ul>

          </div>

     </div>

                                   <!-- Slider -->
     <div class="container" style="width:70%; height:50%;" id="home">
          <Slider />
     </div>

                                        <!-- blogs/contents -->
     <div class="container z-10 mt-16 text-gray-500"  id="blogs">

          <h1 class="text-3xl text-center">Blogs</h1>

               <div class="flex items-center w-3/4 m-16 mx-auto forReverse" v-for="content in contents" :key="content.id" data-aos="zoom-in">
                    <img src="../../../public/images/lms2.jpg" class="rounded" style="width:50%; height:50%;"  alt="">
                    <div class="relative p-3 ml-4" >
                         <h1 class="m-1 ml-0 text-2xl" >{{ content.name }}</h1>
                         <p class="mb-3 leading-6" >{{ content.paragraph }}</p>
                         <router-link to="/"  class="px-2 py-1 font-bold text-white no-underline bg-blue-500 rounded w-fit hover:bg-blue-700">show</router-link>
                    </div>
               </div>

     </div>

     
</div>
</template>

<script>
import '@coreui/coreui/dist/css/coreui.min.css'
import ApiService from '../ApiService';
import Slider from '../components/carousel/Slider.vue'
export default {
     components: {
          Slider
     },
     
     data(){
          return{
               contents : [],
               theme: 'light',
               navItems : [
                    {
                         name: "Home",
                         route: "#home"
                    },
                    {
                         name: "Blogs",
                         route: "#blogs"
                    },
                    {
                         name: "Services",
                         route: "#services"
                    },
                    {
                         name: "About Us",
                         route: "#about"
                    },
                    {
                         name: "Contact Us",
                         route: "#contact"
                    }
               ],
          }
     },

     mounted() {

          // Getting contents
          ApiService.get('/admin/contents')
          .then((response) => {
          this.contents = response.data.data;
          })
          .catch((error) => {
          console.log(error);
          })

          // remove slider buttons
          const nextBtn = document.querySelector('.carousel-control-next-icon');
          nextBtn.style.display = "none";
          const prevBtn = document.querySelector('.carousel-control-prev-icon');
          prevBtn.style.display = "none";
          setInterval(() => {
          nextBtn.click();
          },3000); 
     },
     methods:{

               // check theme
          checkTheme(){
               // const theme = document.querySelector('.theme');
               // const navBar = document.querySelector('.navBar');
               // if (localStorage.theme == "dark") {
               //      theme.classList.add('darkTheme');
               //      navBar.classList.add('darkTheme');
               //      navBar.style.border = "none";
               // } else {
               //      theme.classList.remove('darkTheme');
               //      navBar.classList.remove('darkTheme');
               // }
          },
          toggleTheme(){
               this.theme = this.theme == 'light'? 'dark': 'light';
               // const theme = document.querySelector('.theme');
               // const navBar = document.querySelector('.navBar');
               // if (localStorage.theme == 'dark') {
               //      localStorage.theme = "light";
               //      theme.classList.remove('darkTheme');
               //      navBar.classList.remove('darkTheme');
               //      navBar.style.border = "none";
               // } else{
               //      localStorage.theme = "dark";
               //      theme.classList.add('darkTheme');
               //      navBar.classList.add('darkTheme');
               //      navBar.style.border = "none";

               // }
          }
     }
}
</script>

<style>
.darkTheme{
     background-color: #303030;
     color: white;
}
.forReverse:nth-child(even) {
          flex-direction: row-reverse;
}
.forReverse:nth-child(even) p , .forReverse:nth-child(even) h1 {
     text-align: end;
     margin-right:4%;
}

.forReverse:nth-child(even) .w-fit {
     position: absolute;
     right: 6.5%;
}

</style>