<template>
  <div>
    <div class="w-full h-14 flex justify-between sticky top-0 bg-white">
      <div class="w-2/12 h-full">
        <img src="../../../public/images/projectlogo.jpeg" class="h-full" alt />
      </div>
      <div class="w-5/12 h-full flex justify-evenly py-4">
        <a href>Home</a>
        <a href>Services</a>
        <a href>Content</a>
        <a href>About us</a>
        <button class="rounded-full bg-violet-700 w-32 h-9 relative bottom-1">Contact Now</button>
      </div>
    </div>

    <div class="flex h-screen mt-3">
      <div v-for="(slide,index) in sliders" :key="index" class="transition delay-150">
        <div v-if="visibleslider === index" class="h-full transition delay-150">
          <img :src="slide" id="image" alt class />
          <div class="w-full flex justify-between">
            <i @click="previous"  class="fa-solid text-white fa-angles-left fa-2xl relative bottom-80"></i>
            <i @click="next" class="fa-solid fa-angles-right text-white fa-2xl relative bottom-80"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="h-2/6">
      <div class="h-20">
        <div class="mx-auto w-60">
          <h1 class="mx-auto text-2xl">OUR JOURNEY</h1>
        </div>
      </div>
      <div class="h-full">
        <div class="flex justify-evenly">
          <!-- card 1 -->
          <div class="rounded-lg shadow-lg bg-white w-80">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Button</button>
            </div>
          </div>
          <!-- card 2 -->
          <div class="rounded-lg shadow-lg bg-white w-80">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Button</button>
            </div>
          </div>

          <!-- card 3 -->
          <div class="rounded-lg shadow-lg bg-white w-80">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-2/6 mt-20 mb-20">
      <div class="h-20">
        <div class="mx-auto w-60">
          <h1 class="mx-auto text-2xl">OUR PROJECTS</h1>
        </div>
      </div>
      <div class="h-full">
        <div class="flex">
          <div class="flex ml-26">
            <img
              class="w-5/12 ml-36 mr-20"
              src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
              alt
            />

            <div class="w-96">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4 leading-8">
                Some quick example text to build on the card title and make up the bulk of the card's
                Loram has built a decades-long partnership with the rail industry offering the most innovative portfolio of equipment crewed by our expertly-trained operators and technicians. Our contracted services capabilities assure our customers of superior maintenance, unsurpassed productivity and maximum rail availability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="h-full mt-20">
        <div class="flex">
          <div class="flex ml-26">
            <div class="w-96 ml-44 mr-40">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4 leading-8">
                Some quick example text to build on the card title and make up the bulk of the card's
                Loram has built a decades-long partnership with the rail industry offering the most innovative portfolio of equipment crewed by our expertly-trained operators and technicians. Our contracted services capabilities assure our customers of superior maintenance, unsurpassed productivity and maximum rail availability.
              </p>
            </div>
            <img class="w-5/12" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200 h-80">
      <div class="bg-blue-400"></div>
      <div class="bg-orange-500"></div>
      <div class="bg-violet-500"></div>
    </div>
  </div>
</template>
<script>
import carousel from "../components/carousel/carousel.vue";
export default {
  data() {
    return {
      sliders: [
        " https://picsum.photos/id/1/1500/666",
        " https://picsum.photos/id/2/1500/666",
        " https://picsum.photos/id/30/1500/666"
      ],
      visibleslider: 0
    };
  },

  methods: {
    next() {
      if (this.visibleslider == this.sliders.length - 1) {
        this.visibleslider = 0;
      } else {
        this.visibleslider++;
      }
    },

    previous() {
      if (this.visibleslider == 0) {
        this.visibleslider = this.sliders.length -1;
      } else {
        this.visibleslider--;
      }
    }
  }
};
</script>

<style>
#image{
  animation-name: slide;
  animation-duration: 2s;
}
@keyframes slide {
  from {
    opacity: 70%;
  }

  to {
    opacity: 100%;
  }
}
</style>