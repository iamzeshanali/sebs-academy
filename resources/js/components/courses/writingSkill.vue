<template>
    <div>
      <v-layout row wrap mx-9 my-8>
        <v-flex xs12 md7 lg7 class="hidden-sm-and-down">
              <v-card flat align="center">
                    <v-img
                           
                        height="100%"
                        width="60%"
                        src="/images/office hand writing file1.jpg">
                    </v-img>
              </v-card>      
        </v-flex>
        <v-flex xs12 md5 lg5>
            <h1 class="hStyle font-weight-light red--text text--darken-3 mb-2 mt-9"> <b>
                        General Writing Skills 
                        </b> 
                    </h1>
                    <br>
                    <h5 class="hStyle">SEBS Institute is bringing the English Classroom to your home with online English classes.</h5>
                    <v-row class="mt-5">
                        <v-col>
                            <v-btn
                                dark
                                color="#012169">
                                 Enroll Yourself 
                            </v-btn>
                        </v-col>
                    </v-row>
        </v-flex>
      </v-layout>
    <v-container>
      <p class="px-8 py-9">
         <b>Our Spoken English course ensures that students study English in the learning environment that is best for them. Spoken English Course has different levels, from Beginner to Advanced. These courses are designed to suit learners with different levels of language proficiency.</b>   
      </p>
    
  <v-card flat>
    <v-toolbar flat
      color="white red--text text--darken-3"
      
    >
        <v-row>
            <v-col cols="12" align="center">
                  
                <h4 class="hStyle">
                We offer two levels of General Writing Skills</h4>
            </v-col>
        </v-row>
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab>
            Level 1
          </v-tab>
          <v-tab>
            Level 2
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
           <h5 class="hStyle">This course is perfect for those who wish to develop effective written communication skills.</h5>
          </v-card-text>
          <v-row>
            <v-col cols="12">
              <v-card-text>
           <h5 class="red--text hStyle"><v-icon class="red--text">mdi-alert-circle</v-icon> Requirement for this Course</h5>
           <p>
             You will have to take SEB’S Assessment test which will familiarize us with your shortcomings and areas to be improved. Moreover, it will help us recommend you the suitable level for you.
           </p>
           <v-btn
                   class="blue--text hStyle"
                    text
            >
                                            	Take Assessment Test 
                                            <v-icon
                                                dark
                                                right
                                                >mdi-fast-forward-outline
                                            </v-icon>
                                            
                                        </v-btn>
          </v-card-text>
            </v-col>
          </v-row>
          
           <!-- Timeline Component  -->
            <v-container>
               <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h4 class="blue--text hStyle text--darken-3" >
                                    <v-icon color="#c8102e" left>mdi-numeric-1-box-multiple</v-icon>
                                <b>Description/overview/about</b>
                                </h4>
                                </v-card-title>
                                <v-card-text class="black--text pStyle text--darken-3">
                                   <p>
                     <strong>Do you need to review English grammar? Have you forgotten the grammar you once studied?</strong><br>
                      If so, this course is perfect for you. The course is designed for those who have a basic understanding of English grammar but who want to learn more and improve their skills for everyday speaking or writing, as well as for academics. </p><p>The first level of writing skills series is a refresher on some tools needed for accurate writing. It will prepare you for level two and three as well as for other courses just like IELTS (Academic and General Training). 
After gaining the foundation of verb, tenses, modals, punctuation and the like, you will be able to write short stories and applications or letters. </p><p> Not only this, the course will help you build and expand your vocabulary facilitating you to read and write texts of mixed difficulty with greater ease. 
Writing is a skill and to learn a skill well, you need to practice. That is the reason; the teacher will take you through a series of guided and unguided practice sheets and assignments during class and after class to help you become confident writer. </p><p> Moreover, it includes additional handouts in case you want to study the topic in detail. 
                    </p>
                      </v-card-text>
              </v-card>
              <v-card flat>
                  <v-card-title class="#c8102e" outline>
                    <h4 class="blue--text text--darken-3">
                      <v-icon color="#c8102e" left>mdi-numeric-2-box-multiple</v-icon>
                      <b>Course includes</b>
                    </h4>
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                      <v-btn
                        class="ma-2"
                        outlined
                        large
                        fab
                        color="red lighten-2"
                      >
                        <v-icon>mdi-history</v-icon>
                      </v-btn>
                      <b class="black--text">
                        40 to 50 hours of Targeted teaching
                      </b>                      
                   </div>
                      </v-col>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                        <v-btn
                          class="ma-2"
                          outlined
                          large
                          fab
                          color="red lighten-2"
                        >
                          <v-icon>mdi-download</v-icon>
                          
                        </v-btn>
                        <b class="black--text">
                            Easily downloadable handouts
                        </b>                      
                    </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                      <v-btn
                        class="ma-2"
                        outlined
                        large
                        fab
                        color="red lighten-2"
                      >
                        <v-icon>mdi-note</v-icon>
                      </v-btn>
                      <b class="black--text">
                        Daily practice sheets 
                      </b>                      
                   </div>
                      </v-col>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                      <v-btn
                        class="ma-2"
                        outlined
                        large
                        fab
                        color="red lighten-2"
                      >
                        <v-icon>mdi-spellcheck</v-icon>
                      </v-btn>
                      <b class="black--text">
                        	Feedback on submitted homework
                      </b>                      
                   </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                      <v-btn
                        class="ma-2"
                        outlined
                        large
                        fab
                        color="red lighten-2"
                      >
                        <v-icon>mdi-receipt</v-icon>
                      </v-btn>
                      <b class="black--text">
                        Certificate
                      </b>                      
                   </div>
                      </v-col>
                    </v-row> 
                  </v-card-text>
                </v-card>   
                <br>
                <v-card flat>
                  <v-card-title class="#c8102e" outline>
                    <h4 class="blue--text hStyle text--darken-3">
                      <v-icon color="#c8102e" left>mdi-numeric-3-box-multiple</v-icon>
                      <b>Who is this course for?</b>
                    </h4>
                  </v-card-title>
                  <v-card-text>
                    <b class="black--text text--darken-3">
                     <v-icon class="blue--text text--darken-3">mdi-forward</v-icon>  Whether you are a student at school or college or you are struggling with small tasks at workplace, this is for you.
                      <br><v-icon class="blue--text text--darken-3">mdi-forward</v-icon> Anyone who wishes to build confidence in writing to pass school, college university exams as well as placements tests like NTS, PPSC etc. can take this coursebr
                    </b>
                  </v-card-text>
                </v-card >
               
              <br>
              <v-layout row wrap>
                <v-flex sm12 md12 lg12>
                  <v-card flat>
                    <v-card-title class="#c8102e" outline>
                      <h4 class="blue--text text--darken-3">
                        <v-icon color="#c8102e" left>mdi-numeric-4-box-multiple</v-icon>
                        <b>What you will learn</b>
                      </h4>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
              

                <v-timeline 
                dense
                 >

                <v-timeline-item
                color="#c8102e"
                fill-dot
                right
                >
                <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                      <v-card flat>
                    <v-card-title class="#c8102e" outline>
                    
                    <h4 class="red--text hStyle text--darken-4" >
                        <v-icon
                        
                        left
                        >mdi-menu
                        </v-icon>
                       <b>GRAMMAR </b>
                    </h4>
                    </v-card-title>
                    <v-layout row wrap>
                      <v-flex xs12 md12 lg12>
                        <!-- Inner Timeline -->
                        <v-card flat
                        >
                            
                            <v-card-text class="py-0">
                            <v-timeline
                                align-top
                                dense
                            >
                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Parts of speech</b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Verb Tenses </b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>
                                
                                <v-timeline-item
                                color="red lighten-3"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong><h5 class="hStyle"><b> Active and Passive   voice </b></h5></strong>
                                    </v-col>
                                    <v-col>
                                    <h6 class="hStyle">Conjunctions: Compound and Complex Sentences</h6>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>

                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Punctuation</b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>

                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Parallel Structure </b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>

                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Modals</b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>

                                <v-timeline-item
                                color="red lighten-3"
                                small
                                >
                                <v-row class="pt-1">
                                    <v-col cols="12">
                                    <strong><h5 class="hStyle"><b> Word formation </b></h5></strong>
                                    </v-col>
                                    <v-col>
                                    <h6 class="hStyle">Prefix/suffixes</h6>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Conditionals</b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>

                                <v-timeline-item
                                color="red lighten-3"
                                small
                                >
                                <v-row class="pt-1">
                                    <v-col cols="12">
                                    <strong><h5 class="hStyle"><b> Narration</b></h5></strong>
                                    </v-col>
                                    <v-col>
                                    <h6 class="hStyle">Direct and Indirect</h6>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>


                          
                            </v-timeline>
                            </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                    <v-row>
                        <v-col
                        cols="12"
                        md="10"
                        >
                        
                        </v-col>
                        <v-col
                        class="hidden-sm-and-down text-right"
                        md="2"
                        >
                        <v-icon size="64">
                            mdi-calendar-text
                        </v-icon>
                        </v-col>
                    </v-row>
                    
                </v-card>
                  </v-flex>
                </v-layout>
                
                </v-timeline-item>

                <v-timeline-item
                color="royal blue darken-6"
                fill-dot
                right
                >
                <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                <v-card flat>
                    <v-card-title class="#c8102e" outline>
                    
                    <h4 class="blue--text hStyle text--darken-6" >
                        <v-icon
                        
                        left
                        >mdi-menu
                        </v-icon>
                       <b>SELF-WRITING </b>
                    </h4>
                    </v-card-title>
                    <v-layout row wrap>
                      <v-flex xs12 md12 lg12>
                          <!-- Inner Timeline -->
                        <v-card flat
                        >
                            
                            <v-card-text class="py-0">
                            <v-timeline
                                align-top
                                dense
                            >
                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Story writing</b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>	Application writing </b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>
                                
                                <v-timeline-item
                                color="red lighten-3"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong><h5 class="hStyle"><b> Translation</b></h5></strong>
                                    </v-col>
                                    <v-col>
                                    <h6 class="hStyle">Sentence level</h6>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>

                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Comprehension passages</b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>

                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Paraphrasing </b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>


                          
                            </v-timeline>
                            </v-card-text>
                        </v-card>
                      </v-flex>
                      </v-layout>   
                </v-card>
                </v-flex>
                </v-layout>
                </v-timeline-item>

                <v-timeline-item
                color="cyan lighten-1"
                fill-dot
                right
                >
                <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                <v-card flat>
                    <v-card-title outline>
                    
                    <h4 class="cyan--text hStyle" >
                        <v-icon
                        
                        left
                        >mdi-menu
                        </v-icon>
                       <b>VOCABULARY </b>
                    </h4>
                    </v-card-title>
                    
                        <!-- Inner Timeline -->
                        <v-card flat
                        >
                            
                            <v-card-text class="py-0">
                            <v-timeline
                                align-top
                                dense
                            >
                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Synonym Antonym </b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>	Pair of words</b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>
                                

                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Phrasal verbs</b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>

                                <v-timeline-item
                                color="#D9D9D9"
                                small
                                >
                                <v-row>
                                    <v-col cols="12">
                                    <strong> <h5 class="hStyle"><b>Idioms</b></h5> 	</strong>
                                    </v-col>
                                </v-row>
                                </v-timeline-item>


                          
                            </v-timeline>
                            </v-card-text>
                        </v-card>
                      
                </v-card>
                </v-flex>
                </v-layout>
                </v-timeline-item>

                   </v-timeline>

              
            </v-container>

        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text class="px-5">
           <h5 class="hStyle">Transform Your Writing Skills by knowing the grammatical principles, word usage, writing style, punctuation, sentence and paragraph structure. </h5>
          </v-card-text>
          <v-row>
            <v-col cols="8">
              <v-card-text>
           <h5 class="red--text hStyle"><v-icon class="red--text">mdi-alert-circle</v-icon> Requirement for this Course</h5>
           <p>
             You will have to take SEB’S Assessment test which will familiarize us with your shortcomings and areas to be improved. Moreover, it will help us recommend you the suitable level for you.
           </p>
           <v-btn
                   class="blue--text hStyle"
                    text
            >
                                            	Take Assessment Test 
                                            <v-icon
                                                dark
                                                right
                                                >mdi-fast-forward-outline
                                            </v-icon>
                                            
                                        </v-btn>
          </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-img
                        width="300px"
                        contain    
                       
                        src="/images/office hand writing file_3152793.jpg">
              </v-img>     
            </v-col>
          </v-row>
          
           <!-- Timeline Component  -->
            <v-container>
              <v-container class="pa-5">
                
      
              <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h4 class="blue--text hStyle text--darken-3" >
                                    <v-icon color="#c8102e" left>mdi-numeric-1-box-multiple</v-icon>
                                <b>Description/overview/about</b>
                                </h4>
                                </v-card-title>
                                <v-card-text class="black--text pStyle text--darken-3">
                                   <p>
                      <p>
                      Whether you dream of becoming a professional writer, or just want to improve your English Writing for Academics, this course can be of a great help. </p><p>This is the second level in the Writing Skills Series. In this course, you will learn about all those concepts of grammar you need to know for writing accurately and fluently. You will learn different ways to join ideas to make more complex and concise sentences.  </p>
                   
                   <p>
                      With a series of practice-based lectures, the course will guide you through the most important English writing tasks: Paragraph Writing and Essay Writing. Not just this, the course works on improving grammatical correctness (sentence correction), vocabulary development (increasing vocabulary), and planning and editing skills (brainstorming, mind mapping, outlining and rechecking) for Academic Tasks.</p><p> In this course, you will have the opportunity to write on several different topics and ideas along with feedback on each assignment. This will help you to express yourself clearly and effectively in short and long Writing Tasks.
                      </p>
                      </v-card-text>
              </v-card>
              
              <v-card flat>
                  <v-card-title class="#c8102e" outline>
                    <h4 class="blue--text text--darken-3">
                      <v-icon color="#c8102e" left>mdi-numeric-2-box-multiple</v-icon>
                      <b>Course includes</b>
                    </h4>
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                      <v-btn
                        class="ma-2"
                        outlined
                        large
                        fab
                        color="red lighten-2"
                      >
                        <v-icon>mdi-history</v-icon>
                      </v-btn>
                      <b class="black--text">
                        40 to 50 hours of Targeted teaching
                      </b>                      
                   </div>
                      </v-col>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                        <v-btn
                          class="ma-2"
                          outlined
                          large
                          fab
                          color="red lighten-2"
                        >
                          <v-icon>mdi-download</v-icon>
                          
                        </v-btn>
                        <b class="black--text">
                            Easily downloadable handouts
                        </b>                      
                    </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                      <v-btn
                        class="ma-2"
                        outlined
                        large
                        fab
                        color="red lighten-2"
                      >
                        <v-icon>mdi-note</v-icon>
                      </v-btn>
                      <b class="black--text">
                        Daily practice sheets 
                      </b>                      
                   </div>
                      </v-col>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                      <v-btn
                        class="ma-2"
                        outlined
                        large
                        fab
                        color="red lighten-2"
                      >
                        <v-icon>mdi-spellcheck</v-icon>
                      </v-btn>
                      <b class="black--text">
                        	Feedback on submitted homework
                      </b>                      
                   </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <div class="text-left hStyle red--text text--darken-3">
                      <v-btn
                        class="ma-2"
                        outlined
                        large
                        fab
                        color="red lighten-2"
                      >
                        <v-icon>mdi-receipt</v-icon>
                      </v-btn>
                      <b class="black--text">
                        Certificate
                      </b>                      
                   </div>
                      </v-col>
                    </v-row> 
                  </v-card-text>
                </v-card>

               <v-card flat>
                  <v-card-title class="#c8102e" outline>
                    <h4 class="blue--text hStyle text--darken-3">
                      <v-icon color="#c8102e" left>mdi-numeric-3-box-multiple</v-icon>
                      <b>Who is this course for?</b>
                    </h4>
                  </v-card-title>
                  <v-card-text>
                    <b class="black--text text--darken-3">
                     <v-icon class="blue--text text--darken-3">mdi-forward</v-icon>  those who wish to build a strong foundation of Grammar and sentence structure for Academic and Professional purposes. 
                      <br><v-icon class="blue--text text--darken-3">mdi-forward</v-icon> the course is a must for CSS Aspirants since it provides a strong base of English Precise and composition.
                      <br><v-icon class="blue--text text--darken-3">mdi-forward</v-icon> Whether you are a college or university student or planning to join, this course will be a great help to meet your English Language requirements for Academic World

                      
                    </b>
                  </v-card-text>
                </v-card >
              <v-layout row wrap>
                <v-flex sm12 md12 lg12>
              <v-card flat>
                  <v-card-title class="#c8102e" outline>
                    <h4 class="blue--text text--darken-3">
                      <v-icon color="#c8102e" left>mdi-numeric-4-box-multiple</v-icon>
                      <b>What you will learn</b>
                    </h4>
                  </v-card-title>
                </v-card>
                </v-flex>
              </v-layout>
                   <v-timeline 
                    dense
                    >

                    <v-timeline-item
                    color="#c8102e"
                    fill-dot
                    right
                    >
                    <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                    <v-card flat>
                        <v-card-title class="#c8102e" outline>
                        
                        <h2 class="red--text hStyle text--darken-4" >
                            <v-icon
                            
                            left
                            >mdi-menu
                            </v-icon>
                          <b>GRAMMAR </b>
                        </h2>
                        </v-card-title>
                        
                            <!-- Inner Timeline -->
                            <v-card flat
                            >
                                
                                <v-card-text class="py-0">
                                <v-timeline
                                    align-top
                                    dense
                                >
                                    <v-timeline-item
                                    color="red lighten-3"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong><h5 class="hStyle"><b> Advance parts of speech and word classes </b></h5></strong>
                                        </v-col>
                                        <v-col class="hStyle">
                                        <strong>•	Infinitives</strong>  <br><br>
                                        <strong>•	Participles</strong>  <br><br>
                                        <strong>•	Gerunds</strong>  <br><br>
                                        <strong>•	Complex preposition</strong>  <br><br>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>               
                                </v-timeline>
                                </v-card-text>
                            </v-card>
                            
                            
                    </v-card>
                  </v-flex></v-layout>
                    </v-timeline-item>

                    <v-timeline-item
                    color="royal blue darken-6"
                    fill-dot
                    right
                    >
                    <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                    <v-card flat>
                        <v-card-title class="#c8102e" outline>
                        
                        <h2 class="blue--text hStyle text--darken-6" >
                            <v-icon
                            
                            left
                            >mdi-menu
                            </v-icon>
                          <b>Structure of sentences</b>
                        </h2>
                        </v-card-title>
                        
                            <!-- Inner Timeline -->
                            <v-card flat
                            >
                                
                                <v-card-text class="py-0">
                                <v-timeline
                                    align-top
                                    dense
                                >
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Simple sentence</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Compound sentence</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Complex sentence </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Tenses </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Voice of verbs </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Punctuation marks and their uses </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                              
                                </v-timeline>
                                </v-card-text>
                            </v-card>
                            
                    </v-card>
                    </v-flex>
                </v-layout>
                    </v-timeline-item>

                    <v-timeline-item
                    color="cyan lighten-1"
                    fill-dot
                    right
                    >
                    <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                    <v-card flat>
                        <v-card-title outline>
                        
                        <h2 class="cyan--text hStyle" >
                            <v-icon
                            
                            left
                            >mdi-menu
                            </v-icon>
                          <b>Structure of phrases </b>
                        </h2>
                        </v-card-title>
                        
                            <!-- Inner Timeline -->
                            <v-card flat
                            >
                                
                                <v-card-text class="py-0">
                                <v-timeline
                                    align-top
                                    dense
                                >
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Noun phrase</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Adjective phrase</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Appositive phrase</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Verb phrase  </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Adverb phrase </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                </v-timeline>
                                </v-card-text>
                            </v-card>
                            
                    </v-card>
                    </v-flex>
                </v-layout>
                    </v-timeline-item>
                    <v-timeline-item
                    color="green lighten-1"
                    fill-dot
                    right
                    >
                    <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                    <v-card flat>
                        <v-card-title outline>
                        
                        <h2 class="green--text hStyle" >
                            <v-icon
                            
                            left
                            >mdi-menu
                            </v-icon>
                          <b>Structure of clauses  </b>
                        </h2>
                        </v-card-title>
                        
                            <!-- Inner Timeline -->
                            <v-card flat
                            >
                                
                                <v-card-text class="py-0">
                                <v-timeline
                                    align-top
                                    dense
                                >
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Dependent clause </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Independent clause</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Relative clauses</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                              
                                </v-timeline>
                                </v-card-text>
                            </v-card>
                            
                    </v-card>
                    </v-flex>
                </v-layout>
                    </v-timeline-item>
                    <v-timeline-item
                    color="blue lighten-1"
                    fill-dot
                    right
                    >
                    <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                    <v-card flat>
                        <v-card-title outline>
                        
                        <h2 class="blue--text hStyle">
                            <v-icon
                            
                            left
                            >mdi-menu
                            </v-icon>
                          <b>Common sentence-level problems </b>
                        </h2>
                        </v-card-title>
                        
                            <!-- Inner Timeline -->
                            <v-card flat
                            >
                                
                                <v-card-text class="py-0">
                                <v-timeline
                                    align-top
                                    dense
                                >
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Run-on sentences </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Fragments</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                              
                                </v-timeline>
                                </v-card-text>
                            </v-card>
                            
                    </v-card>
                    </v-flex>
                </v-layout>
                    </v-timeline-item>
                    <v-timeline-item
                    color="green lighten-1"
                    fill-dot
                    right
                    >
                    <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                    <v-card flat>
                        <v-card-title outline>
                        
                        <h2 class="green--text hStyle">
                            <v-icon
                            
                            left
                            >mdi-menu
                            </v-icon>
                          <b>Writing skills </b>
                        </h2>
                        </v-card-title>
                        
                            <!-- Inner Timeline -->
                            <v-card flat
                            >
                                
                                <v-card-text class="py-0">
                                <v-timeline
                                    align-top
                                    dense
                                >
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Paragraph writing </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Essay writing (250-300 words)</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Common types of academic writing  </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>The format of long and short writing tasks  </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>The features of academic writing  </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Language of discussion</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Language of comparison and contrast</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Language of cause and effect</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Describing visual information </b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                              
                                </v-timeline>
                                </v-card-text>
                            </v-card>
                            
                    </v-card>
                  </v-flex>
                </v-layout>
                    </v-timeline-item>
                    <v-timeline-item
                    color="green lighten-1"
                    fill-dot
                    right
                    >
                    <v-layout row wrap>
                  <v-flex xs12 md12 lg12>
                    <v-card flat>
                        <v-card-title outline>
                        
                        <h2 class="green--text hStyle">
                            <v-icon
                            
                            left
                            >mdi-menu
                            </v-icon>
                          <b>Vocabulary   </b>
                        </h2>
                        </v-card-title>
                        
                            <!-- Inner Timeline -->
                            <v-card flat
                            >
                                
                                <v-card-text class="py-0">
                                <v-timeline
                                    align-top
                                    dense
                                >
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Synonym antonym</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Word formation</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                    

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Phrasal verbs</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>

                                    <v-timeline-item
                                    color="#D9D9D9"
                                    small
                                    >
                                    <v-row>
                                        <v-col cols="12">
                                        <strong> <h5 class="hStyle"><b>Proverbs</b></h5> 	</strong>
                                        </v-col>
                                    </v-row>
                                    </v-timeline-item>
                                </v-timeline>
                                </v-card-text>
                            </v-card>
                            
                            
                    </v-card>
                    </v-flex>
                </v-layout>
                    </v-timeline-item>

                   </v-timeline>
                  
                   
              </v-container>
            </v-container>

        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </v-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        panel: [0,1,2,3],
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
<style scoped>
.text1{
  font-family: 'Pacifico', cursive;
}
.pStyle, p{
  font-family:webFont1;
  font-size: 20px;
}
.hStyle, h6{
  font-family: webFont2;
}
</style>