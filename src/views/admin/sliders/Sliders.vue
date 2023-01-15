<script >
import ApiService from '../../../ApiService';
export default{
  mounted(){
    ApiService.get('v1/gender').then(function(c){
      console.log(c.data);
    })
  }
}
</script>

<template>
  <main>
    <img src="http://localhost:8000/images/loading.gif" alt="">
     <h1 class="text-3xl text-center mt-60">this is Sliders</h1>
  </main>
</template>
