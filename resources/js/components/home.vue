<template>
  <div>
<div class="here">
  <v-vanta effect="waves" :options=options v-if="!$route.meta.hideVanta"></v-vanta>
</div>

<v-container>
  <v-layout row wrap class="py-5">
    <v-flex>
        <h1 class="white--text">seb</h1>
    </v-flex>
  </v-layout>
  <v-sheet class="mt-10 height-100">
              <!-- Main Header -->
              <v-layout row>
                <v-flex xs12 md12 lg12 justify-center class="py-14">
                  <v-card class="d-flex justify-center" justify="center" align="center" color="transparent" flat>
                  <div>
                    <v-layout row wrap>
                      <v-flex xs6 md6 lg12>
                          <h1 class="hStyle text_1 red--text text--darken-4">
                            BRINGS OUT THE CHAMPION IN YOU
                          </h1>
                      </v-flex>
                    </v-layout>

                    <br><br>

                    <h4 class="hStyle indigo--text text--darken-3">Improve your English, BOOST your
                      confidence and your career!
                      </h4>


                      <v-btn max-width="100%" x-large dark color="#012169" class="hStyle my-9">Enroll Yourself</v-btn>

                  </div>
                  </v-card>
                </v-flex>
              </v-layout>

              <!-- Down Button Animation -->

              <v-layout row class="hidden-sm-and-down">
                    <v-flex xs12 md12 class="py-9">
                      <v-card flat color="transparent">
                        <p align="center">
                          <v-btn


                            transparent
                              fab
                              large
                              center
                              top
                              @click="toVision"
                            >
                            <v-icon color="#B71C1C">mdi-arrow-down-bold-hexagon-outline</v-icon>
                            </v-btn>

                        </p>
                    </v-card>
                    </v-flex>
                  </v-layout>

              <!-- Vision Row -->
    </v-sheet>
</v-container>
        <v-sheet color="grey lighten-5" class="pt-15">
          <br>
            <v-layout row wrap>
                <v-flex xs12 md12 lg12>
                    <v-row justify="center" align="center" class="mx-4">
                        <h1 class="hStyle font-weight-light red--text text--darken-3">Our Vision</h1>
                    </v-row>
                    <v-row justify="center" align="center" class="my-6 mx-6">
                        <h6 class="indigo--text hStyle text--darken-4">
                            "TO UPROOT THE LEARNING SYSTEM AND SOW THE SEEDS OF CREATIVITY FOR PRACTICAL REASONS."
                        </h6>
                    </v-row>
                </v-flex>
                <br> <br>
                <v-flex xs12 md12 lg12>
                    <v-layout row wrap>
                        <v-flex xs12 md6 lg6 class="hidden-md-and-down">
                            <div class="grow" align="center">
                                <img
                                    height="420px"
                                    width="500px"

                                    src="/images/HeroImage-Recovered12.jpg"
                                />
                            </div>
                        </v-flex>
                        <v-flex xs12 md6 lg6 class="my-auto">
                            <v-sheet
                                color="grey lighten-5"
                                rounded
                                height="100%"
                                width="90%"
                                class="mx-auto my-auto"
                            >
                                <div class="font-weight-light title mb-2 px-5" align="left">
                                    <h2 class="red--text text--darken-3"> PROFESSIONAL DEVELOPMENT, LANGUAGE CENTER, i.MATTER
                                    </h2><br>
                                    <p style="font-size:22px">
                                        To make our students, Professionals and non-professionals part of an interactive learning process where they enjoy the learning. </p><p style="font-size:22px">
                                    We believe that innovative, rigorous, and compassionate approach to quality education, training, improvement and grooming empowers the individuals, professionals, and students and builds their characters for increasingly diverse and demanding world.
                                </p>
                                </div>
                            </v-sheet>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>

        </v-sheet>
      <v-container>
        <!-- Services Row -->
      <div>
        <v-layout row wrap>
          <v-flex xs12 md12 lg12>
            <v-row class="mt-10" justify="center" align="center">
              <h1 class="hStyle font-weight-light red--text text--darken-3 mb-2">Our Services</h1>
            </v-row>
            <br>
          </v-flex>
          <v-flex xs12 md12 lg12 mx-9>
            <v-row justify="center" align="center">
              <h6 class="indigo--text hStyle text--darken-4">
                "TAKE A FREE DAIGNOSTIC TEST TO FIND OUT YOUR LEVEL OF ENGLISH
                LANGUAGE PROFICIENCY"
              </h6>
            </v-row>
            <br><br>
          </v-flex>
          <v-flex xs12 md12 lg12>

                <v-layout row wrap justify-center>
                <v-flex xs12 md12 lg4 px-4 justify-center>
                      <v-hover v-slot="{ hover }">
                      <v-card
                      :elevation="hover ? 16 : 2"
                      :class="{ 'on-hover': hover }"
                        class="mx-auto"
                        align="center"
                        color="grey lighten-4"
                        max-width="600"
                      >
                        <v-img
                          :aspect-ratio="16/9"
                          src="/images/pexels-julia-m-cameron-4143791.jpg"
                        >
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out indigo darken-1 v-card--reveal display-3 white--text"
                              style="height: 100%; opacity: 0.7;"
                              align="center"
                            >
                                <p class="ma-auto">
                                <v-btn  outlined color="white"> Enroll Yourself</v-btn>
                                </p>

                            </div>
                          </v-expand-transition>
                        </v-img>
                        <v-card-text
                          class="pt-6"
                          style="position: relative;"
                        >
                          <v-btn
                            absolute
                            color="#B71C1C"
                            class="white--text"
                            fab
                            large
                            right
                            top
                          >
                            <v-icon>mdi-professional-hexagon</v-icon>
                          </v-btn>
                          <div class="font-weight-light grey--text title mb-2">
                            SEB’S Assessment Test
                          </div>
                          <h3 class="hStyle font-weight-light red--text text--darken-3 mb-2">
                          IELTS
                          </h3>
                          <div class="font-weight-light title mb-2">
                            Prepare to get a high score on your IELTS Test with IELTS Intensive
                        Preparation Course.
                          </div>
                        </v-card-text>
                      </v-card>
                      </v-hover>
                </v-flex>
                <v-flex xs12 md12 lg4 px-4>
                  <v-hover v-slot="{ hover }">
                  <v-card
                  :elevation="hover ? 16 : 2"
                  :class="{ 'on-hover': hover }"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                    align="center"
                  >
                    <v-img
                      :aspect-ratio="16/9"
                      src="/images/pexels-fauxels-3184317.jpg"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out indigo darken-1 v-card--reveal display-3 white--text"
                          style="height: 100%;  opacity: 0.7;"
                        >
                          <p class="ma-auto">
                            <v-btn  outlined color="white"> Enroll Yourself</v-btn>
                            </p>
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text
                      class="pt-6"
                      style="position: relative;"
                    >
                      <v-btn
                        absolute
                        color="#B71C1C"
                        class="white--text"
                        fab
                        large
                        right
                        top
                      >
                        <v-icon>mdi-professional-hexagon</v-icon>
                      </v-btn>
                      <div class="font-weight-light grey--text title mb-2">
                        SEB’S Assessment Test
                      </div>
                      <h4 class="hStyle font-weight-light red--text text--darken-3 mb-2">
                        Professional Speeking
                      </h4>
                      <div class="font-weight-light title mb-2">
                        Our Spoken English course ensures that students study English in the
                    learning environment.
                      </div>
                    </v-card-text>
                  </v-card>
                  </v-hover>
                </v-flex>
                <v-flex xs12 md12 lg4 px-4>

                  <v-hover
                  v-slot="{ hover }"
                  open-delay="200"
                  >
                    <v-card
                      :elevation="hover ? 16 : 2"
                    :class="{ 'on-hover': hover }"
                      class="mx-auto"
                      color="grey lighten-4"
                      max-width="600"
                      align="center"
                    >
                      <v-img
                        :aspect-ratio="16/9"
                        src="/images/pexels-rfstudio-3059745.jpg"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out indigo darken-1 v-card--reveal display-3 white--text"
                            style="height: 100%; opacity: 0.7;"
                          >
                            <p class="ma-auto">
                              <v-btn  outlined color="white"> Enroll Yourself</v-btn>
                              </p>
                          </div>
                        </v-expand-transition>
                      </v-img>
                      <v-card-text
                        class="pt-6"
                        style="position: relative;"
                      >
                        <v-btn
                          absolute
                          color="#B71C1C"
                          class="white--text"
                          fab
                          large
                          right
                          top
                        >
                          <v-icon>mdi-professional-hexagon</v-icon>
                        </v-btn>
                        <div class="font-weight-light grey--text title mb-2">
                          SEB’S Assessment Test
                        </div>
                        <h3 class="hStyle font-weight-light red--text text--darken-3 mb-2">
                        Writing for CSS
                        </h3>
                        <div class="font-weight-light title mb-2">
                          Your writing skills courses are designed for schools to
                      university going students and
                      Professionals.
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-hover>

                </v-flex>
                </v-layout>

          </v-flex>
        </v-layout>
      </div>
  <!-- Fun Knowledge Club Row       -->
      <v-row class="mt-15">
        <v-divider></v-divider>
      </v-row>
      <div>
        <v-layout row wrap>
          <v-flex xs12 md6 lg12 class="px-6">
            <v-row class="mt-15" justify="center" align="center">
              <h1 class="hStyle font-weight-light red--text text--darken-3 mb-2">Fun-Knowledge Club</h1>
            </v-row>
          </v-flex>
        </v-layout>
      <v-layout row wrap>
          <v-flex xs12 md12 lg12 mx-6>
            <v-row class="mt-5 mx-4" justify="center" align="center">
              <h6 class="indigo--text hStyle text--darken-4">
                "Once you’re part of SEB'S Fun-knowledge club, you’re part of something special."
              </h6>
            </v-row>
          </v-flex>
        </v-layout>
      <v-layout row wrap>
          <v-flex xs12 md12 lg12 mx-6>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col cols="12" class="mt-5">
                    <p>
                      SEBS being believer of “No Fun; No learning” ensures it in letter and spirit. The club helps its students, their friends and relatives to become a part of fun-filled healthy educational activities. The mission is to support safe and inclusive opportunities for students' involvement and engagement. It has easy registration policy.
                    </p>
                    <p>
                      <b>
                      The club does the following activities to ensure fun and knowledge:
                      </b>
                    </p>
                    <v-layout row wrap align-center>
                      <v-flex xs2 md2 lg2>
                          <div class="grow" align="center">
                          <h6 class="hStyle"><img  height="100%" width="100%"
                          src="/images/—Pngtree—business people sitting at the_5189991.jpg"/>
                          Mini Talks</h6>
                        </div>
                      </v-flex>
                      <v-flex xs1 md1 lg1></v-flex>
                      <v-flex xs2 md2 lg2>
                          <div class="grow" align="center">
                          <img  height="100%" width="100%"
                          src="/images/—Pngtree—online class school video call_5375285.jpg" />
                          <h6>Talk Shows</h6>
                        </div>
                      </v-flex>
                      <v-flex xs1 md1 lg1></v-flex>
                      <v-flex xs2 md2 lg2>
                          <div class="grow" align="center">
                          <img  height="100%" width="100%"
                          src="/images/—Pngtree—group discussion learning teaching hand_5471660.jpg" />
                          <h6>Group Discussions</h6>
                        </div>
                      </v-flex>
                      <v-flex xs1 md1 lg1></v-flex>
                      <v-flex xs2 md2 lg2>
                          <div class="grow" align="center">
                          <img  height="100%" width="100%"
                          src="/images/—Pngtree—circus role playing magician character_4647243.jpg" />
                          <h6>Role play activities</h6>
                        </div>
                      </v-flex>
                      <v-flex xs1 md1 lg1></v-flex>
                      <v-flex xs2 md2 lg2>
                        <div class="grow" align="center">
                          <img  height="100%" width="100%"
                          src="/images/—Pngtree—muslim couple flat illustration design_5349336.jpg" />
                          <h6>Inter-faith harmony</h6>
                        </div>
                      </v-flex>
                      <v-flex xs1 md1 lg1></v-flex>
                      <v-flex xs2 md2 lg2>
                        <div class="grow" align="center">
                          <img  height="100%" width="100%"
                          src="/images/—Pngtree—happy client vector customer person_5189759.jpg" />
                          <h6>Personality grooming</h6>
                        </div>
                      </v-flex>
                      <v-flex xs1 md1 lg1></v-flex>
                      <v-flex xs2 md2 lg2>
                        <div class="grow" align="center">
                          <img  height="100%" width="100%"
                          src="/images/—Pngtree—video frame vector png element_5494576.jpg" />
                          <h6>Short videos for learning</h6>
                        </div>
                      </v-flex>
                      <v-flex xs1 md1 lg1></v-flex>
                      <v-flex xs2 md2 lg2>
                        <div class="grow" align="center">
                          <img  height="100%" width="100%"
                          src="/images/—Pngtree—female teacher student writing homework_4841733.jpg" />
                          <h6>Teacher-student discussion</h6>
                        </div>
                      </v-flex>
                    </v-layout>
                    <v-flex xs1 md1 lg1></v-flex>

                    <v-card flat color="transparent mt-5">
                    <v-row>
                      <v-col cols="12">
                        <p align="center">
                          <v-btn
                              outlined
                              color="#B71C1C"
                              class="indigo--text text--darken-3"

                              large
                              center

                            > Explore More
                              <v-icon right>mdi-arrow-up-drop-circle-outline</v-icon>
                            </v-btn>
                        </p>
                      </v-col>
                    </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>

      </div>
      <!-- Our Gallery -->
      <v-row class="mt-8">
        <v-divider></v-divider>
      </v-row>
      <div>
        <v-row class="mt-15" justify="center" align="center">
          <h1 class="hStyle font-weight-light red--text text--darken-3 mb-2">Visit Our Gallery</h1>
        </v-row>

        <v-row class="mt-9">
          <v-col cols="12">
            <v-sheet

              class="mx-auto"
              elevation="8"
              max-width="1500"
            >
              <v-slide-group
                v-model="model"
                class="pa-4"
                center-active
                show-arrows
              >
                <v-slide-item
                  v-for="(g,i) in gallery"
                  :key="'A'+i"
                  v-slot="{ toggle }"
                >
                  <v-card flat
                    color="white"
                    class="ma-4"
                    height="400"
                    width="400"
                    @click="toggle"
                  >
                    <v-row
                      class="fill-height mt-5"
                      align="center"
                      justify="center"
                    >
                    <v-img
                    style="opacity:0.7"
                          width="20px"
                          height="100%"
                          :src="g.image"
                    ></v-img>

                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
              <v-card flat color="transparent">
              <v-row>
                <v-col cols="12">
                  <p align="center">
                    <v-btn
                        style="text-decoration:none;"
                        to="/gallery"
                        outlined
                        color="#B71C1C"
                        class="red--text text--darken-3"
                        large
                        center
                      > View More
                        <v-icon right>mdi-arrow-up-drop-circle-outline</v-icon>
                      </v-btn>
                  </p>
                </v-col>
              </v-row>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>

      </div>
      </v-container>
   <!-- Certification bar Sticky   -->

        <div :class="[minifyWidth ? 'stickyWidth' : 'sticky']" class="hidden-md-and-down" id="certification">
          <v-hover v-slot="{ hover }">
          <v-card flat align="center"

          :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
          >
          <v-row class="px-9 py-9">
              <v-col cols="4">
                  <v-img
                          contain
                          width="50%"
                          height="100%"
                          src="/images/apply-job-hunting-resume.jpg">
                          </v-img>
              </v-col>
              <v-col cols="8">
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
          <v-layout row wrap>
                  <v-flex xs4 md4 lg4>

                  </v-flex>
                  <v-flex xs8 md8 lg8>



                      </v-flex>


          </v-layout>
          </v-card>
          </v-hover>
        </div>
        <div :class="[minifyWidth ? 'stickyWidth' : 'sticky']" class="hidden-lg-and-up" id="certification1">
          <v-hover v-slot="{ hover }">
              <v-card align="center"

                      :elevation="hover ? 16 : 2"
                      :class="{ 'on-hover': hover }"
              >
                  <v-layout row wrap>
                      <v-flex xs12 md12 lg6>
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
                      </v-flex>
                  </v-layout>


              </v-card>
          </v-hover>
      </div>

      <v-container>
        <!-- Testimonials Row -->

      <div style="max-width: 100%">
        <v-row class="mt-12" justify="center" align="center">
          <h1 class="hStyle font-weight-light red--text text--darken-3 mb-2">Testimonials</h1>
        </v-row>
        <v-row class="mt-2" justify="center" align="center">
          <h6 class="red--text text--darken-3">"What They quote about us?"</h6>
        </v-row>
        <v-layout row wrap>
          <v-flex sm12 md9 lg9>
              <v-carousel
                cycle
                height="200"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item v-for="(slide,i) in tests" :key="'B'+i">
                  <v-sheet color="white">
                    <v-row>
                      <v-col cols="12">
                        <v-hover v-slot="{ hover }">

                        <v-card
                        flat
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                          class="mx-15 white"
                          max-width="100%"
                          height="180px"
                          rounded
                        >
                          <v-list-item three-line>
                            <v-list-item-content>
                              <v-list-item-title
                                class="indigo--text text--darken-4"
                              >
                                <v-list-item-avatar>
                                  <v-img :src="slide.image"> </v-img>
                                </v-list-item-avatar>
                                <b class="hStyle">{{ slide.author }}</b>
                                <br />
                                <small mr="30px" class="hStyle">
                                  {{ slide.grade }} | Experince:
                                  {{ slide.experience }} years
                                </small>
                                <br />
                                <small class="red--text hStyle text--darken-3">
                                  {{ slide.city }}
                                </small>
                              </v-list-item-title>
                              <v-list-item-subtitle class="black--text pStyle">
                                <h6>
                                    <span v-html="slide.content"></span>
                                </h6>
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                        </v-hover>
                      </v-col>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
          </v-flex>
          <v-flex sm12 md3 lg3>
            <v-card flat align="center">
              <v-img
                contain
                height="100%"
                width="80%"
                src="/images/Testimo-img.jpg"
              >
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
     <v-layout row>
            <v-flex>

                  <v-btn
                    v-show="fab"
                    v-scroll="onScroll"

                    transparent
                      fab
                      fixed

                      bottom
                      right
                      @click="toTop()"
                      class="transitionEffect"
                    >
                    <v-icon color="#B71C1C">mdi-arrow-up-bold-hexagon-outline</v-icon>
                    </v-btn>


            </v-flex>
      </v-layout>
      <!-- Contact Form -->
      <v-row class="mt-15" justify="center" align="center">
          <h1 class="hStyle font-weight-light red--text text--darken-3 mb-2">Contact Us</h1>
        </v-row>
      <contactForm></contactForm>
    </v-container>
  </div>
</template>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
<style scoped>

.height-100 {
  height: 100%;
  z-index: 1;
}

.here {
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/* Image Hover */
.grow v-img{
transition: 1s ease;
}


.grow img:hover{
-webkit-transform: scale(0.8);
-ms-transform: scale(0.8);
transform: scale(0.8);
transition: 1s ease;
}

/* Text Flow Animation */
.text_1 {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter;
  display: inline-block;
  position: relative;
  animation-duration: 50s;
  animation-timing-function: steps(30, end);
  animation-iteration-count: infinite;
}


.text_1::after {
  content: "|";
  position: absolute;
  right: 0;
  animation: caret infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
}

@keyframes typewriter {
  0%, 100% {
    width: 0;
  }
  20%, 80% {
    width: 18.7em;
  }
}

@keyframes caret {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
/* Sticky Component */
.sticky {
  background-color: transparent;
  transition:0.5s;
  transition-delay: 10ms;
  font-size: 20px;
  max-width: 76%;
   margin: 0 auto;
}
.stickyWidth{
  position: sticky;
  margin: 0 auto;
  z-index:90;
  top: 0;
  background-color: transparent;
  transition:0.5s;
  font-size: 20px;
  max-width: 100%;
  max-height: 10%;
  transition-delay: 10ms;
}
#wrapper{
    height: 200px;
  }
@media (min-height: 768px) {
  #wrapper{
    height: 2000px;
  }
}
/* Text Styling */

.styledText {
  font-family: "Pacifico", cursive;
}
.boxStyle{
  border:1px solid white; box-shadow:3px 3px 5px grey
}
.pStyle, p{
  font-family:webFont1;
}
.hStyle,h1,h2,h4 h6{
  font-family: webFont2;
}
@font-face{
  font-family:webFont1;
  src: url(/fonts/Humnst777-Lt-BT-Light.woff);
}
@font-face{
  font-family:webFont2;
  src: url(/fonts/tt0861m_.woff);
}
</style>

<script>
import testimonials from "./testimonials";
import contactForm from './layouts/contactForm'
import NavComponent from './layouts/NavbarComponent'
import VVanta from 'vue-vanta';

export default {
  components: {
    testimonials,
    contactForm,
    NavComponent,
    VVanta
  },
    data: () => ({
        divTop: 0,
        divTopSmScreen: 0,
        windowTop: 0,
        minifyWidth: false,
        fab: false,
        model: null,
        options: {
            mouseControls: true,
            touchControls: true,
            minHeight: 800.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xc0c0d9
        },
        activities: [
            {
                name: "Mini Talk",
                icons: "mdi-account-group-outline"
            },
            {
                name: "Talk Shows",
                icons: "mdi-human-cane"
            },
            {
                name: "Group discussions",
                icons: "mdi-human-cane"
            },
            {
                name: "Role play activities",
                icons: "mdi-human-cane"
            },
            {
                name: "Inter-faith harmony",
                icons: "mdi-human-cane"
            },
            {
                name: "Personality grooming",
                icons: "mdi-account-group-outline"
            },
            {
                name: "Spoken English Games",
                icons: "mdi-human-cane"
            },
            {
                name: "Carefully selected movies",
                icons: "mdi-human-cane"
            },
            {
                name: "Short videos for learning",
                icons: "mdi-human-cane"
            },
            {
                name: "Teacher-student discussion",
                icons: "mdi-human-cane"
            },
            {
                name: "Confidence building activities",
                icons: "mdi-account-group-outline"
            },
            {
                name: "Question and Answer sessions",
                icons: "mdi-human-cane"
            },
            {
                name: "Free spoken English Practice sessions",
                icons: "mdi-human-cane"
            },
            {
                name: "Presentation and communication skills activities",
                icons: "mdi-human-cane"
            },
            {
                name: "Club members get to-gathers to discuss social issue",
                icons: "mdi-human-cane"
            }
        ],
        tests: [
            {
                author: "Muhammad Ishfaq Ahmed ",
                image: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                experience: "30",
                city: "Sargodha",
                grade: "Senior Headmaster",
                content: `پنے کریئر میں میں اس لمحے خوشی محسوس کر رہاہوں کہ دیر آید درست آید۔ یہ ٹریننگ سیشن سابقہ دورمیں کیے گئے ٹریننگ سیشنز سے انتہائی مفید رہا جس میں مجھے یہ رشک ہوا کہ میں اہنے ادارے کے بچوں اور اساتذہ میں تبدیلی کیلے بہت کچھ کر سکتا ہوں۔ `,
            },
            {
                author: "Arshad Hussian",
                image: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                experience: "31",
                city: "Hafizabad",
                grade: "SSS-PLT 22",
                content: ` The training sessions conducted by Sir Ejaz Bukhari were highly motivational. We learnt lot even instantly our own behaviors changed positively. We enjoyed learning very much and felt pleasure because the methodologies employed were clear and beneficial to the maximum.  `,
            },
            {
                author: "Mrs. Kousar Saleem ",
                image: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                experience: "26",
                city: "Lahore",
                grade: "Senior Headmistress ",
                content: `ہت سی ٹریننگ ہوتی بھی رہتی ہیں، لی بھی جاتی ہیں اور دی بھی جاتی ہیں۔ ایسا لیکچر جو سید اعجاذ بخاری صاحب نے ہمیں دیا میں ہمیشہ اسے یاد  بھی رکھوں گی۔ بحثیت ہیڈ آف ادارہ میں اسے آئیندہ پھیلاؤں گی بھی ۔ `,
            },
            {
                author: "Kareem Bakhsh ",
                image: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                experience: "10",
                city: "Layyah",
                grade: "Senior Head Master ",
                content: `محترم و مکرم صاحب۔
                    آپکا انداز بیان دوران ٹریننگ ایسا متاثر  کن تھا کہ جس سے  ہم نے   جینے، رہنے، ہنسنے اور نفسیات کے گر  سیکھ لیے ہیں۔ بہت ساری نئی چیزیں ملی ہیں۔  آپ جیسے لوگوں کی تعلیمی اداروں کو ضرورت ہے۔ اللہ تعالی آپکا خوش رکھے۔ آمین
                    ۔`,
            },
            {
                author: "Mr Bahadur Ali",
                image: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                experience: "32",
                city: "Rawalpindi",
                grade: "Senior Subject Specialist ",
                content: `یف نہیں حقیقت ہے کہ ذندگی میں اس سے مفید ، پر اثر اور جامع لیکچر نہیں سنا ۔ اور اب  یہ احساس ہوا ہے کہ 32 سال ضائع ہو گئے ہیں اور  ایک اچھا ٹیچر نہیں بن سکا۔ اور نہ ہی ٹیچنگ کا حق ادا کر سکا ۔ کاش یہ ٹریننگ اس وقت  کی ہوتی جب سروس کا آغاذکیا تھا۔ `,
            },
            {
                author: "Tehmina Safdar",
                image: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                experience: "22",
                city: "Toba Taik Singh",
                grade: "Senior Headmistress ",
                content: `سید اعجا ذ بخاری صاحب کا  ٹریننگ سیشن انتہائی مفید تھا۔ سوچ میں بڑی تبدیلی کا باعث بنا۔ `,
            },
        ],
        gallery: [
            {image: "/images/IMG_9273.JPG"},

            {image: "/images/DSC_0400.JPG"},

            {image: "/images/DSC_0392.JPG"},
            {image: "/images/IMG_9251.jpg"},
            {image: "/images/e1.jpg"},

            {image: "/images/Q158.jpg"},
        ]
    }),
  methods: {
      checkHeight(){
          function offset(el) {
              var rect = el.getBoundingClientRect(),
                  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
          }

// example use

          if(window.innerWidth < 600){
              var div = document.querySelector('div#certification1');
              var divOffset = offset(div);
              this.divTop = divOffset.top + 197;

          }else{
              var div = document.querySelector('div#certification');
              var divOffset = offset(div);
              this.divTop = divOffset.top + 338;

          }

      },

    onScroll (e) {
       this.windowTop = e.target.documentElement.scrollTop;
       
      if(this.windowTop > this.divTop){
              this.minifyWidth=true;
      }
      if(this.windowTop < this.divTop){

        this.minifyWidth=false;
      }
        if(this.windowTop > this.divTop){
            this.minifyWidth=true;
        }
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
        this.$vuetify.goTo(0);
      this.$vuetify.breakpoint.name;
    },
    toVision () {
      this.$vuetify.goTo(810)
    }
  },
  mounted() {
      this.checkHeight();
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

};
</script>
