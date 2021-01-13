<template>
    <div>
                 
                <navBar></navBar> 
                    <router-view></router-view>        
                <footerComponent></footerComponent>
    </div>
</template>
<script>

import tHeader from './layouts/TopHeader'
import navBar from './layouts/NavbarComponent'
import slider from './layouts/slider'
import Slider from './layouts/slider.vue'
import footerComponent from './layouts/footer'

export default {
    components :{
        navBar,
        tHeader,
        footerComponent,
         
    },
    data () {
        
      return {
        options: {
            mouseControls: true,
            touchControls: true,
            minHeight: 700.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xc0c0d9
        }
      }
    }
    
}
</script>
<style scoped>
.text1{
    font-family: 'Bungee Outline', cursive;
  }
 
</style>