<template>
    <div>
        <v-carousel
            continuous
            cycle

        >
            <v-carousel-item
            v-for="(item,i) in images"
            :key="'A'+i"
            :src="item.image"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
                <v-sheet
                    color="transparent"
                    height="100%"
                    width="100%"
                >
                    <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                    >
                    <div class="display-3" style="margin: 0 auto;">

                        <h2 align="center" class="red--text text--darken-4">
                            SEBS GALLERY
                        </h2>
                        <h4>
                            Speak English Accurately and Rapidly with our Dynamic Interactive Methodology
                        </h4>

                    </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <v-container>

            <v-row>
                <v-col lg="4"
                v-for="(mg,idx) in images"
                :key="'A'+idx"
                class="child-flex"
                >
                <div class="grow">
                <img
                    width="100%"
                    height="100%"
                    :src="mg.image"
                    class="grey lighten-2"
                />
                </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <div class="grow">
                <img
                    width="100%"
                    height="100%"
                    src="/images/5.jpg"
                    class="grey lighten-2"
                />
                </div>
                </v-col>
            </v-row>
            <!-- Certification bar Sticky   -->
        <div class="sticky" style="z-index:90">
          <v-hover v-slot="{ hover }">
          <v-card flat

          :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-row>
                      <v-col cols="6" align="center">
                          <v-img
                          contain
                          width="50%"
                          height="100%"
                          src="/images/apply-job-hunting-resume.jpg">
                          </v-img>
                      </v-col>
                      <v-col cols="6" align="center" class="my-auto">
                      <v-card flat>
                      <h3 class="hStyle font-weight-light red--text text--darken-3 mb-2"><b>
                          Certify Your English Proficiency with SEBS
                      </b>
                      </h3>
                      <v-btn
                                  @click="$router.push('testimonials')"
                              outlined
                              class="mt-5"
                              color="#012169"
                              dark
                              >
                                  <v-icon
                                  dark
                                  left
                                  >mdi-chevron-right
                                  </v-icon>
                                  <b class="hStyle">
                                  Register Yourself
                                  </b>

                      </v-btn>
                      </v-card>
                      </v-col>
            </v-row>
          </v-card>
          </v-hover>
        </div>
        </v-container>
    </div>
</template>
<style scoped>
    .grow img{
opacity:0.9;
transition: 1s ease;
}

.grow img:hover{
    opacity:1;
transition: 1s ease;
-webkit-transform: scale(0.9);
-ms-transform: scale(0.9);
transform: scale(0.9);
transition: 1s ease;
}

.sticky {
 position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: transparent;
  padding: 50px;
  font-size: 20px;
}
</style>
<script>
export default {
    data: () => ({
        images: [
            {  image: "/images/6.jpg" },
            {  image: "/images/e1.jpg" },
            {  image: "/images/Q158.jpg" },
            {  image: "/images/d34.jpg" },
            {  image: "/images/d120.jpg" },
            {  image: "/images/1212.jpg" }



        ],
         colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    }),

}
</script>
