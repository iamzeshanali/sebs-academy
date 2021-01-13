<template>
    <div>
        <v-carousel
            cycle
            height="600"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            show-arrows-on-hover
        >
            <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
            <v-container>
                <v-row class="fill height title" align="left" justify="left">
                    <v-col>
                    <div class="display-3 red--text text--darken-3">My Name</div>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                    <div class="display-3 red--text text--darken-3">My Name</div>
                    </v-col>

                </v-row>
            </v-container>  
            <!-- <v-sheet
                :color="colors[i]"
                height="100%"
            >
                <v-row
                class="fill-height"
                align="center"
                justify="center"
                >
                <div class="display-3">
                    {{ slide }} Slide
                </div>
                </v-row>
            </v-sheet> -->
            </v-carousel-item>
        </v-carousel>
    </div>
</template>
<script>
export default {
    data () {
      return {
        items: [
          {
            src: "/images/pexels-tirachard-kumtanom-733856.jpg",
          },
          {
            src: "/images/pexels-thirdman-5582587.jpg",
          },
          {
            src: "/images/pexels-fauxels-3184317.jpg",
          },
          {
            src: "/images/pexels-julia-m-cameron-4143791.jpg",
          },
        ]
      }
    },
}
</script>