<template>

    <div>
        
        <v-toolbar 
            color="transparent"
        flat class="mt-4">
            <router-link to="/">
                <v-toolbar-title to="/about">
                <v-img 
                    width="130px"
                    src="/images/SEBS-Logo-Prototype-3.png">
                </v-img>
                
                </v-toolbar-title> </router-link>
            <v-toolbar-title to="/" class="indigo--text text--darken-4"><h2><b>Institute</b></h2></v-toolbar-title>
            
                    <!-- <v-select
                width="20px"
                :items="items"
                label="Solo field"
                dense
                solo
                ></v-select> -->
            <!-- <div class="text-center">
                <v-dialog
                v-model="dialog1"
                width="60%"
                >
                <template v-slot:activator="{ on, attrs }">
                    
                    <v-btn
                    outlined
                    class="ma-2 hidden-sm-and-down"
                    color="#012169"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                        <v-icon
                        dark
                        left
                        >mdi-chevron-up
                        </v-icon>
                        Browse Courses
                    </v-btn>
                  
                </template>

                <v-card>
                    
                    <v-card-text>
                        <v-row>
                            <v-col cols="5" align="center">
                                 <h2><v-img 
                    width="50%"
                    src="/images/SEBS-Logo-Prototype-3.png">
                </v-img></h2>
                                 <v-spacer></v-spacer>
                                 <v-row>
                                     <v-col align="center">
                                        <v-btn
                                        @click="$router.push('writingSkill'); dialog1 = false"
                                        
                                         class=" indigo--text white text--darken-4" depressed>
                                        <b>
                                            <v-icon
                                            dark
                                            left
                                            >mdi-view-split-horizontal
                                            </v-icon>
                                        General Writing Skill
                                        </b>
                                        </v-btn>
                                     </v-col>                                    
                                 </v-row>
                                 <v-row>
                                     <v-col align="center">
                                        <v-btn 
                                            @click="$router.push('ielts'); dialog1 = false"
                                        class=" indigo--text white text--darken-4" depressed>

                                        <b>
                                            <v-icon
                                            aria-hidden="false"
                                            dark
                                            left
                                            >mdi-typewriter
                                            </v-icon>
                                        Ielts Training
                                        </b>
                                        </v-btn>
                                     </v-col> 
                                 </v-row>
                                 <v-row>
                                     <v-col align="center">
                                        <v-btn 
                                        @click="$router.push('cssSkill'); dialog1 = false"
                                        class=" indigo--text white text--darken-4" depressed>
                                        <b>
                                            <v-icon
                                            dark
                                            left
                                            >mdi-spellcheck
                                            </v-icon>
                                        Writing Skills for CSS
                                        </b>
                                        </v-btn>
                                     </v-col> 
                                 </v-row>
                                 <v-row>
                                     <v-col align="center">
                                        <v-btn 
                                        @click="$router.push('englishForAll'); dialog1 = false"
                                        class=" indigo--text white text--darken-4" depressed>
                                        <b>
                                            <v-icon
                                            dark
                                            left
                                            >mdi-account-supervisor-outline
                                            </v-icon>
                                        Spoken English for All
                                        </b>
                                        </v-btn>
                                     </v-col> 
                                 </v-row>
                                 <v-row>
                                     <v-col align="center">
                                        <v-btn 
                                        @click="$router.push('englishForProfessionals'); dialog1 = false"
                                        class=" indigo--text white text--darken-4" depressed>
                                        <b>
                                            <v-icon
                                            dark
                                            left
                                            >mdi-professional-hexagon
                                            </v-icon>
                                        English for Professionals
                                        </b>
                                        </v-btn>
                                     </v-col> 
                                 </v-row>
                                 <v-row>
                                     <v-col align="center">
                                        <v-btn class=" indigo--text white text--darken-4" depressed>
                                        <b>
                                            <v-icon
                                            dark
                                            left
                                            >mdi-account-tie-voice
                                            </v-icon>
                                        Take Online Test
                                        </b>
                                        </v-btn>
                                     </v-col> 
                                 </v-row>
                            </v-col>   
                            <v-col cols="7" class="mt-12">
                                <v-row>
                                    <v-col cols="10" align="center">
                                        <h2 class="styleText1 red--text text--darken-3 d-flex">Choose your course. Choose your future</h2>
                                        <br>
                                        <h3>Speak English Accurately and Rapidly with our Dynamic Interactive Methodology</h3>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-btn
                                            color="red"
                                            text
                                            @click="dialog1 = false"
                                        >
                                            
                                            <v-icon
                                            dark
                                            left
                                            >mdi-cancel
                                            </v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <br><br>
                                <v-row>
                                    <v-col cols="6">
                                        <h2 class="indigo--text text--darken-4">Get Started:</h2>
                                        
                                            <b class="red--text text--darken-3">General Writing Skill</b>
                                            <p>•	<a href=""> Level 01 </a><br> •	<a href=""> Level 02</a></p>
                                            <br>
                                            <b class="red--text text--darken-3">IELTS</b>
                                            <p>•	<a href=""> Listening </a><br> •	<a href=""> Speaking</a> <br> •	<a href=""> Reading </a><br> •	<a href=""> Writing </a> </p>
                                            <b class="red--text text--darken-3">Spoken English For All</b>
                                            <v-btn
                                            class="indigo--text"
                                            text
                                            @click="dialog1 = false"
                                        >
                                            •	See more 
                                            <v-icon
                                                dark
                                                right
                                                >mdi-fast-forward-outline
                                            </v-icon>
                                            
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="6">
                                        <h2 class="indigo--text text--darken-4">Fun Knowledge Club:</h2>
                                        <h3 class="red--text text--darken-3">
                                            The club does the following activities to ensure fun and knowledge:
                                        </h3>
                                        <p>•	<a href=""> Mini talks</a></p>
                                        <p>•	<a href=""> Talk shows</a></p>
                                        <p>•	<a href=""> Group discussions</a></p>
                                        <p>•	<a href=""> Role play activities</a></p>
                                        <p>•	<a href=""> Confidence building activities</a></p>
                                        <p> 
                                        <v-btn
                                            class="indigo--text"
                                            text
                                            @click="dialog1 = false"
                                        >
                                            •	See more 
                                            <v-icon
                                                dark
                                                right
                                                >mdi-fast-forward-outline
                                            </v-icon>
                                            
                                        </v-btn>
                                        </p>

                                    </v-col>
                                </v-row>
                            </v-col>  
                        </v-row>                   
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="indigo--text"
                        text
                        @click="dialog1 = false"
                    >
                        Hands-on Learning
                        <v-icon
                                            dark
                                            left
                                            >mdi-fast-forward-outline
                        </v-icon>
                        
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </div> -->
            
           
            
            <v-spacer />
            <div class="text-center mr-7">
                <v-menu offset-y transition="slide-x-transition"
      bottom
      right
>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="transparent red--text text--darken-3"
                
                    v-bind="attrs"
                    v-on="on"
                    >
                    Dropdown
                    <v-icon
                        dark
                        right
                        >mdi-chevron-down
                        </v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    >
                    <v-list-item-title to="writingSkill">
                        <v-btn
                    color="transparent red--text text--darken-3">
                    General Writing Skill
                    </v-btn>
                    </v-list-item-title>
                    <v-list-item-title></v-list-item-title>
                    <v-list-item-title></v-list-item-title>
                    <v-list-item-title></v-list-item-title>
                    <v-list-item-title></v-list-item-title>

                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            <!-- <v-text-field
                @focus="showSearch = false"
                @blur="showSearch = true"
                class="mt-5 expanding_search"
                color="#012169--text"
                append-icon="mdi-magnify"
                placeholder="Search Course"
                :class="{ 'closed' : searchClosed}"
                filled
                dense
            ></v-text-field> -->
            <v-btn
                class="ma-2 hidden-sm-and-down"
                outlined
                color="#c8102e">
                Login
            </v-btn>
            <v-row justify="center" align="center" style="flex: 0 0 auto;">
                <div class="text-center">
                <v-dialog
                
                absolute
                v-model="dialog"
                persistent
                max-width="700px"
                justify="center" align="center"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            class="ma-2 hidden-sm-and-down"
                            dark
                            color="#012169"
                            v-bind="attrs"
                    v-on="on"
                            >
                            Signup
                        </v-btn>
                </template>
                <v-card>
                    <v-container>
                    <v-card-title> 
                    <h2 class="red--text text1 text--darken-3"><b>SEBS</b></h2><h2 class="indigo--text text--darken-4"><b>Academy</b></h2>
                    </v-card-title>
                    <v-divider />
                    <v-card-text>Start your free 3-day trial and become one of the shining professionals advancing their career goals.</v-card-text>
                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                                outlined
                                label="Firstname"
                                prepend-inner-icon="mdi-dns"
                                v-model="fName"
                                :rules="[rules.required, rules.counter]"
                                counter
                                maxlength="20"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                                outlined
                                label="Lastname"
                                prepend-inner-icon="mdi-dns"
                                v-model="lName"
                                :rules="[rules.required, rules.counter]"
                                counter
                                maxlength="20"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                outlined
                                suffix="@gmail.com"
                                label="Email Address"
                                prepend-inner-icon="mdi-email"
                                v-model="email"
                                :rules="[rules.required, rules.email]"
                                counter
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            >
                            <v-text-field
                                prepend-inner-icon="mdi-lock"
                                :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.counter]"
                                :type="show4 ? 'text' : 'password'"
                                outlined
                                label="Password"
                                hint="At least 8 characters"
                                @click:append="show4 = !show4"
                            ></v-text-field>
                            </v-col>
                        <v-col
                            cols="12"
                            >
                            <v-text-field
                                prepend-inner-icon="mdi-lock"
                                :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.counter]"
                                :type="show4 ? 'text' : 'password'"
                                outlined
                                label="Confirm Password"
                                hint="At least 8 characters"
                                @click:append="show4 = !show4"
                            ></v-text-field>
                            </v-col>
                        <v-col
                            cols="12"
                        >    
                        <v-checkbox
                            v-model="accept"
                            label="By creating an account, you agree to the terms of Service and Privacy Policy"
                            color="red darken-3"
                            value="red darken-3"
                            ></v-checkbox>
                        </v-col>
                        <v-btn
                            class="ma-2"
                            dark
                            color="#c8102e"
                        >Create Free Account</v-btn>

                        </v-row>
                    </v-container>
                    <p>Already have an account? <a href="">Sign In </a></p>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="#c8102e"
                        dark
                        text
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="#012169"
                        text
                        @click="dialog = false"
                    >
                        Clear
                    </v-btn>
                    </v-card-actions>
                    </v-container>
                </v-card>
                </v-dialog>
                </div>
            </v-row>
            
        </v-toolbar> 
        <v-toolbar class="hidden-md-and-up">
            <v-spacer></v-spacer>
            <v-btn
            outlined
            class="ma-2"
            color="#012169"
            dark
            @click="overlay = !overlay"
            >
                <v-icon
                dark
                left
                >mdi-chevron-up
                </v-icon>
                Browse Courses
            </v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>
        
        <v-toolbar class="hidden-md-and-up">
            <v-spacer></v-spacer>
            <v-btn
                class="ma-2"
                outlined
                color="#c8102e">
                Login
            </v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>
        
        <v-toolbar class="hidden-md-and-up">
            <v-spacer></v-spacer>
            <v-btn
                outlined
                color="#012169">
                Signup
            </v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>
    </div>
</template>
<script>
import Dropdown from './dropdown';
export default {
      components: {
            Dropdown
        },
    data () {
        
      return {items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            overlay: false,
            dialog: false,
            dialog1: false,

            show4: false,
        fName: '',
        lName: '',
        email: '',
        accept:false,
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
          
        },
      }
    },
}
</script>
<style scoped>
.text1{
    font-family: 'Bungee Outline', cursive;
  }
.styleText1{
    font-family: 'Pacifico', cursive;
}  
  .mobile-popup-overlay {
  position: fixed;
  opacity: 1.0;
  margin-top: 80px;
  margin-left: 80px;

  height: 50vh;
  width: 50vw;
}
.text2{
    text-align: center;
}



</style>
