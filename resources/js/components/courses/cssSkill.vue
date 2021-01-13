<template>
    <div>
        <v-row class="mx-1">
                <v-col cols="7" align="right" class="hidden-sm-and-down my-auto">
                    <v-img
                        class="ml-4"    
                        height="90%"
                        width="80%"
                        src="/images/55.jpg">
                    </v-img>
                </v-col>
                <v-col cols="5" align="center" class="my-auto">
                    <h1 class="hStyle font-weight-light red--text text--darken-3 mb-2"> <b>
                        Writing skills for CSS
                        </b> 
                    </h1>
                    <br>
                    <h5 class="hStyle">Easiest solution to pass CSS English exam in first attempt.</h5>
                    <v-row class="mt-5">
                        <v-col>
                            <v-btn
                                dark
                                color="#012169">
                                 Enroll Yourself 
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
        </v-row>
        <v-container>
        <v-row>
                <v-card flat>
                    <v-card-text align="center" class="blue--text text--darken-3">
                    <h5 class="hStyle">This course is perfect for those who wish to develop effective written communication skills.</h5>
                    </v-card-text>
                    <v-row>
                        <v-col cols="12">
                        <v-card-text>
                    <h4 class="red--text hStyle"><v-icon class="red--text">mdi-alert-circle</v-icon> Requirement for this Course</h4>
                    <p>
                       <v-icon class="blue--text text--darken-3">mdi-forward</v-icon>	Basic proficiency in English is a necessary prerequisite for this course.
                       <br>
                       <v-icon class="blue--text text--darken-3">mdi-forward</v-icon>	SEB’S Assessment Test is a must.
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
                    <br>
                    <v-container>
                    <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h4 class="blue--text hStyle text--darken-3" >
                                    <v-icon color="#c8102e" left>mdi-numeric-1-box-multiple</v-icon>
                                <b>Description/overview/about</b>
                                </h4>
                                </v-card-title>
                                <v-card-text>
                                    <p class="black--text text--darken-3">
                     This course is intended for those CSS Aspirants who are facing difficulty in English grammar and composition especially tenses, sentence structure, paragraphing and writing style. <br><br> It teaches how to write for a variety of purposes (argumentative, analytical, persuasive) and how to analyze different kinds of text for doing their translation and précis. Particularly, the course focuses on helping learners become skilled readers and writers for their varied Academic Requirements.  </p>
                                </v-card-text>
                    </v-card>
                    </v-container>
                    <v-card-text>
    
                    <br>
                    <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h4 class="blue--text hStyle text--darken-3" >
                                    <v-icon color="#c8102e" left>mdi-numeric-2-box-multiple</v-icon>
                                <b>What you will learn</b>
                                </h4>
                                </v-card-title>
                    </v-card>
                    <v-timeline
                                            align-top
                                            dense
                                        >
                                            <v-timeline-item
                                                v-for="(task, i) in tasks"
                                                :key="i"
                                                :color="task.color"
                                                :icon="task.icon"
                                                fill-dot
                                                small
                                            >
                                            <v-row>
                                                <v-col cols="6">
                                                <strong> <h5 class="hStyle"><b>{{task.content}}</b></h5> 	</strong>
                                                </v-col>
                                            </v-row>
                                            </v-timeline-item>
                                        </v-timeline>
                    </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
        </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
      tasks: [
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Parts of speech –Basic to Advanced '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Verb Tenses '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Conjunctions: Compound and Complex Sentences'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Punctuation'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Parallel Structure'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Sentence Variety'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Modals'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Word formation (Prefix/suffixes) '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Adverb and Adverb Phrases'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Adjectives and Adjective Phrases'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Conditionals '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Narration'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Active and passive voice '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Sentence correction '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Precise writing'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Paragraphing '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Cohesion '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Translation (Urdu to English and English to Urdu)'
        },
      ]

    }),
}
</script>
<style scoped>
  h1{
    font-family: "Pacifico", cursive;
  }
.pStyle, p{
  font-family:webFont1;
  font-size: 20px;
}
.hStyle, h6{
  font-family: webFont2;
}
</style>