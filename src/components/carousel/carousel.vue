<template>
   <div class="carousel">
     <carouselslides :v-show="visibleslider  == index">
      <slot></slot>
     </carouselslides>
   </div>
</template>

<script>
import carouselslides from './carouselslides.vue';
export default {
 components:{
  carouselslides
 },
 props: ["visibleslider", "index"]

}
</script>

