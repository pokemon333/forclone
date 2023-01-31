<template>
<div class="theme">
                                        <!-- Nav Bar -->
     <div class="container sticky top-0 z-40 text-gray-500 bg-gray-100">
          <div class="flex justify-between w-screen border-b-2 border-gray-200 navBar">
               <router-link to="/" class="p-2">
                    <img src="../../../public/images/logo.png" class="w-20 mx-6 mb-2" alt="">
               </router-link>
               <ul class="flex mt-2 text-xl ">
                    <li class="m-2 mx-4 hover:text-indigo-600 hover:scale-110" v-for="navItem in navItems" :key="navItem">
                         <a v-bind:href="navItem.route" >{{ navItem.name }}</a>
                    </li>
                                        <!-- theme -->
                    <li class="m-2 mx-4 hover:scale-110">
                         <button @click="toggleTheme"><i class="fa-regular fa-lightbulb"></i></button>
                    </li>
               </ul>
          </div>
     </div>

                                   <!-- Slider -->
     <div class="container" id="home">
          <img src="../../../public/images/lms2.jpg" class="w-2/3 mx-auto " alt="">
     </div>

                                   <!-- blogs -->
     <div class="container z-10 mt-24 text-gray-500"  id="blogs">

          <h1 class="mb-16 text-3xl text-center">Blogs</h1>
          <div >

               <div class="flex items-center w-3/4 m-16 mx-auto forReverse" key="div1">
                    <img src="../../../public/images/lms2.jpg" class="rounded" style="width:50%; height:50%;"  alt="">
                    <div class="relative p-3 ml-4" >
                         <h1 class="m-1 ml-0 text-2xl" >Content Management System</h1>
                         <p class="mb-3 leading-6" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti atque dolorem quos, quia voluptatibus natus voluptatem maiores vero odit dolorum dignissimos harum ea consequatur iste provident velit, aspernatur incidunt.</p>
                         <router-link to="/"  class="px-2 py-1 font-bold text-white bg-blue-500 rounded w-fit hover:bg-blue-700">show</router-link>
                    </div>
               </div>

               <div class="flex items-center w-3/4 m-16 mx-auto forReverse" key="div2">
                    <img src="../../../public/images/lms2.jpg" class="rounded" style="width:50%; height:50%;"  alt="">
                    <div class="relative p-3 ml-4">
                         <h1 class="m-1 ml-0 text-2xl">Content Management System</h1>
                         <p class="mb-3 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti atque dolorem quos, quia voluptatibus natus voluptatem maiores vero odit dolorum dignissimos harum ea consequatur iste provident velit, aspernatur incidunt.</p>
                         <router-link to="/"  class="px-2 py-1 font-bold text-white bg-blue-500 rounded w-fit hover:bg-blue-700">show</router-link>
                    </div>
               </div>

               <div class="flex items-center w-3/4 m-16 mx-auto forReverse" key="div3">
                    <img src="../../../public/images/lms2.jpg" class="rounded" style="width:50%; height:50%;"  alt="">
                    <div class="relative p-3 ml-4">
                         <h1 class="m-1 ml-0 text-2xl">Content Management System</h1>
                         <p class="mb-3 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti atque dolorem quos, quia voluptatibus natus voluptatem maiores vero odit dolorum dignissimos harum ea consequatur iste provident velit, aspernatur incidunt.</p>
                         <router-link to="/"  class="px-2 py-1 font-bold text-white bg-blue-500 rounded w-fit hover:bg-blue-700">show</router-link>
                    </div>
               </div>

               <div class="flex items-center w-3/4 m-16 mx-auto forReverse" key="div4">
                    <img src="../../../public/images/lms2.jpg" class="rounded" style="width:50%; height:50%;"  alt="">
                    <div class="relative p-3 ml-4">
                         <h1 class="m-1 ml-0 text-2xl">Content Management System</h1>
                         <p class="mb-3 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti atque dolorem quos, quia voluptatibus natus voluptatem maiores vero odit dolorum dignissimos harum ea consequatur iste provident velit, aspernatur incidunt.</p>
                         <router-link to="/"  class="px-2 py-1 font-bold text-white bg-blue-500 rounded w-fit hover:bg-blue-700">show</router-link>
                    </div>
               </div>

          </div>

     </div>

     
</div>
</template>

<script>
export default {
     mounted() {
          this.scrollTrigger();
          this.checkTheme();
     },
     data(){
          return{
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
     methods:{
          scrollTrigger(){
               const blogElements = document.querySelectorAll('.forReverse');
               const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                         entry.target.classList.add('animateBlogs');
                         }else{
                         entry.target.classList.remove('animateBlogs');
                         }
                    })
               });
               blogElements.forEach((el) => observer.observe(el));
          },
               // check theme
          checkTheme(){
               const theme = document.querySelector('.theme');
               const navBar = document.querySelector('.navBar');
               if (localStorage.theme == "dark") {
                    theme.classList.add('darkTheme');
                    navBar.classList.add('darkTheme');
                    navBar.style.border = "none";
               } else {
                    theme.classList.remove('darkTheme');
                    navBar.classList.remove('darkTheme');
               }
          },
          toggleTheme(){
               const theme = document.querySelector('.theme');
               const navBar = document.querySelector('.navBar');
               if (localStorage.theme == 'dark') {
                    localStorage.theme = "light";
                    theme.classList.remove('darkTheme');
                    navBar.classList.remove('darkTheme');
                    navBar.style.border = "none";
               } else{
                    localStorage.theme = "dark";
                    theme.classList.add('darkTheme');
                    navBar.classList.add('darkTheme');
                    navBar.style.border = "none";

               }
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

.forReverse{
     transition: all 1s ease;
     transform: scale(0.8);
     opacity: 0.3;
}
.animateBlogs{
     transform: scale(1);
     opacity: 1;
}

</style>