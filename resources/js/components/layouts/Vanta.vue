<template>
         <v-vanta effect="waves" :options=options></v-vanta>    
</template>
<script>
import VVanta from 'vue-vanta';
export default {
    components :{
        VVanta,
    },
     data () {
      return {
        options: {
              mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 765.00,
  minWidth: 500.00,
 
  scaleMobile: 1.00,
  color: 0xc0c0d9
        }
      }
    }
}
</script>