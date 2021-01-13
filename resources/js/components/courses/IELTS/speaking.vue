<template>
    <v-container class="pa-5">
        <v-timeline dense>
            <v-timeline-item
                        color="blue lighten-1"
                            fill-dot
                            right
                            >
                            <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h4 class="blue--text text--darken-6" >
                                    <v-icon
                                    color="blue"
                                    left
                                    >mdi-book-variant
                                    </v-icon>
                                <b>Facts about the Speaking exam</b>
                                </h4>
                                </v-card-title>
                                <v-container>
                                <v-row>
                                    <v-col
                                    cols="12"
                                    md="10"
                                    >
                                    <!-- Inner Timeline -->
                                    <v-card flat>
                                        <v-card-text class="py-0">
                                        <v-timeline
                                            align-top
                                            dense
                                        >
                                            <v-timeline-item
                                                v-for="(fact, i) in facts"
                                                :key="i"
                                                :color="fact.color"
                                                :icon="fact.icon"
                                                fill-dot
                                                small
                                            >
                                            <v-row>
                                                <v-col cols="6">
                                                <strong> <h5><b>{{fact.content}}</b></h5> 	</strong>
                                                </v-col>
                                            </v-row>
                                            </v-timeline-item>
                                        </v-timeline>
                                        </v-card-text>
                                    </v-card>
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
                                </v-container>
                            </v-card>
            </v-timeline-item>
            <v-timeline-item
                        color="green lighten-1"
                            fill-dot
                            right
                            >
                            <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h4 class="green--text text--darken-6" >
                                    <v-icon
                                    color="green"
                                    left
                                    >mdi-book-variant
                                    </v-icon>
                                <b>Length of answer/How to Extend Answers</b>
                                </h4>
                                </v-card-title>
                                <v-container>
                                <v-row>
                                    <v-col
                                    cols="12"
                                    md="10"
                                    >
                                    <!-- Inner Timeline -->
                                    <v-card flat>
                                        <v-card-text class="py-0">
                                        <v-timeline
                                            align-top
                                            dense
                                        >
                                            <v-timeline-item
                                                v-for="(listen, i) in listening"
                                                :key="i"
                                                :color="listen.color"
                                                :icon="listen.icon"
                                                fill-dot
                                                small
                                            >
                                            <v-row>
                                                <v-col cols="3">
                                                <strong> <h5><b>{{listen.content}}</b></h5> 	</strong>
                                                </v-col>
                                            </v-row>
                                            </v-timeline-item>
                                        </v-timeline>
                                        </v-card-text>
                                    </v-card>
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
                                </v-container>
                            </v-card>
            </v-timeline-item>
            <v-timeline-item
                        color="green lighten-1"
                            fill-dot
                            right
                            >
                            <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h4 class="green--text text--darken-6" >
                                    <v-icon
                                    color="green"
                                    left
                                    >mdi-book-variant
                                    </v-icon>
                                <b>How to show Range of vocabulary </b>
                                </h4>
                                </v-card-title>
                                <v-container>
                                <v-row>
                                    <v-col
                                    cols="12"
                                    md="10"
                                    >
                                    <!-- Inner Timeline -->
                                    <v-card flat>
                                        <v-card-text class="py-0">
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
                                                <strong> <h5><b>{{task.content}}</b></h5> 	</strong>
                                                </v-col>
                                            </v-row>
                                            </v-timeline-item>
                                        </v-timeline>
                                        </v-card-text>
                                    </v-card>
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
                                </v-container>
                            </v-card>
            </v-timeline-item>
            <v-timeline-item
                        color="green lighten-1"
                            fill-dot
                            right
                            >
                            <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h4 class="green--text text--darken-6" >
                                    <v-icon
                                    color="green"
                                    left
                                    >mdi-book-variant
                                    </v-icon>
                                <b>How to show Range of Grammar</b>
                                </h4>
                                </v-card-title>
                                <v-container>
                                <v-row>
                                    <v-col
                                    cols="12"
                                    md="10"
                                    >
                                    <!-- Inner Timeline -->
                                    <v-card flat>
                                        <v-card-text class="py-0">
                                        <v-timeline
                                            align-top
                                            dense
                                        >
                                            <v-timeline-item
                                                v-for="(introduction, i) in introductions"
                                                :key="i"
                                                :color="introduction.color"
                                                :icon="introduction.icon"
                                                fill-dot
                                                small
                                            >
                                            <v-row>
                                                <v-col cols="6">
                                                <strong> <h5><b>{{introduction.content}}</b></h5> 	</strong>
                                                </v-col>
                                            </v-row>
                                            </v-timeline-item>
                                        </v-timeline>
                                        </v-card-text>
                                    </v-card>
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
                                </v-container>
                            </v-card>
            </v-timeline-item>
            
            <v-timeline-item
                        color="grey lighten-1"
                            fill-dot
                            right
                            >
                            <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h5 class="grey--text text--darken-6" >
                                    <v-icon
                                    color="grey"
                                    left
                                    >mdi-book-variant
                                    </v-icon>
                                <b>How to make Notes for Cue Card</b>
                                </h5>
                                </v-card-title>
                                
                            </v-card>
            </v-timeline-item>
            <v-timeline-item
                        color="grey lighten-1"
                            fill-dot
                            right
                            >
                            <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h5 class="grey--text text--darken-6" >
                                    <v-icon
                                    color="grey"
                                    left
                                    >mdi-book-variant
                                    </v-icon>
                                <b>Essential aspect of Pronunciation</b>
                                </h5>
                                </v-card-title>
                                
                            </v-card>
            </v-timeline-item>
            <v-timeline-item
                        color="grey lighten-1"
                            fill-dot
                            right
                            >
                            <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h5 class="grey--text text--darken-6" >
                                    <v-icon
                                    color="grey"
                                    left
                                    >mdi-book-variant
                                    </v-icon>
                                <b>Do’s and Don’ts of IELTS Speaking Exam</b>
                                </h5>
                                </v-card-title>
                                
                            </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>
<script>
export default {
    data: () => ({
      facts: [
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Format'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Assessment criteria'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Most Common Topics'
        }
      ],
      listening : [
          {
          color: 'grey lighten-2',
          icon: '',
          content: 'In part 1'
        },
        {
         color: 'grey lighten-2',
          icon: '',
          content: 'Format'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'In Part 2'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'In Part 3'
        }
      ],
      tasks: [
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Paraphrasing '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Collocation'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Phrasal verbs'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Idiomatic expressions'
        }
      ],
      introductions: [
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Simple sentences'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Compound sentences'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Complex sentences'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Conditionals'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Use of modals'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Rhetoric questions '
        }
      ]

    }),
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
.hStyle, h2,h3,h4,h5,h6{
  font-family: webFont2;
}
</style>