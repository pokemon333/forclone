<template>
  <div>
    <div class="sticky top-0 flex justify-between w-full bg-white h-14">
      <div class="w-2/12 h-full">
        <img src="../../../public/images/projectlogo.jpeg" class="h-full" alt />
      </div>
      <div class="flex w-5/12 h-full py-4 justify-evenly">
        <a href>Home</a>
        <a href>Services</a>
        <a href>Content</a>
        <a href>About us</a>
        <button class="relative w-32 rounded-full bg-violet-700 h-9 bottom-1">Contact Now</button>
      </div>
    </div>

    <div class="flex h-screen mt-3">
      <div v-for="(slide,index) in sliders" :key="index" class="transition delay-150">
        <div v-if="visibleslider === index" class="h-full transition delay-150">
          <img :src="slide" id="image" alt class />
          <div class="flex justify-between w-full">
            <i @click="previous"  class="relative text-white fa-solid fa-angles-left fa-2xl bottom-80"></i>
            <i @click="next" class="relative text-white fa-solid fa-angles-right fa-2xl bottom-80"></i>
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
          <div class="bg-white rounded-lg shadow-lg w-80">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt
              />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium text-gray-900">Card title</h5>
              <p class="mb-4 text-base text-gray-700">
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
          <div class="bg-white rounded-lg shadow-lg w-80">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt
              />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium text-gray-900">Card title</h5>
              <p class="mb-4 text-base text-gray-700">
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
          <div class="bg-white rounded-lg shadow-lg w-80">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt
              />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium text-gray-900">Card title</h5>
              <p class="mb-4 text-base text-gray-700">
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

    <div class="mt-20 mb-20 h-2/6">
      <div class="h-20">
        <div class="mx-auto w-60">
          <h1 class="mx-auto text-2xl">OUR PROJECTS</h1>
        </div>
      </div>
      <div class="h-full">
        <div class="flex">
          <div class="flex ml-26">
            <img
              class="w-5/12 mr-20 ml-36"
              src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
              alt
            />

            <div class="w-96">
              <h5 class="mb-2 text-xl font-medium text-gray-900">Card title</h5>
              <p class="mb-4 text-base leading-8 text-gray-700">
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
            <div class="mr-40 w-96 ml-44">
              <h5 class="mb-2 text-xl font-medium text-gray-900">Card title</h5>
              <p class="mb-4 text-base leading-8 text-gray-700">
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