<template>
     <CCarousel controls indicators transition="crossfade">
          <CCarouselItem>
               <img class="d-block w-100 h-96" src="../../../public/images/cms.webp" alt="slide 2"/>
          </CCarouselItem>
          <CCarouselItem>
               <img class="d-block w-100 h-96" src="../../../public/images/lms2.jpg" alt="slide 2"/>
          </CCarouselItem>
          <CCarouselItem>
               <img class="d-block w-100 h-96" src="../../../public/images/slider.jpg" alt="slide 3"/>
          </CCarouselItem>
      </CCarousel>
</template>

<script>
     import { CCarousel } from '@coreui/vue'
     import { CCarouselItem } from '@coreui/vue'
     export default {
          data(){
               return {
                    sliders : [
               "../../../public/images/cms.webp",
               "../../../public/images/lms2.jpg",
               "../../../public/images/slider.jpg"
               ]
               }
          },
          components: {
               CCarousel,
               CCarouselItem
          },
          mounted(){
               
          }
     }
</script>

<style>
     .d-block{
          display: none;
          width:90%;
          height: 90%;
     }
</style>