<template>
    <v-container>
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
                                <b>Facts about the Listening Test</b>
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
                                                <v-col cols="3">
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
                                <b>Listening Strategies</b>
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
                                                <v-col cols="8">
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
                                <b>Listening for the Main Idea</b>
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
                                <b>Listening for Factual Information</b>
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
                                <b>Understanding the Question</b>
                                </h5>
                                </v-card-title>
                                
                            </v-card>
            </v-timeline-item>
            <v-timeline-item
                        color="grey lighten-2"
                            fill-dot
                            right
                            >
                            <v-card flat>
                                <v-card-title class="#c8102e" outline>
                                
                                <h5 class="grey--text" >
                                    <v-icon
                                    color="grey"
                                    left
                                    >mdi-airballoon
                                    </v-icon>
                                <b>Do’s and Don’ts of IELTS Listening Exam</b>
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
          color: 'red lighten-2',
          icon: 'mdi-account-question-outline',
          content: 'Format'
        },
        {
          color: 'red lighten-2',
          icon: 'mdi-comment-arrow-left',
          content: 'Question Types '
        },
        {
          color: 'red lighten-2',
          icon: 'mdi-comment',
          content: 'Transferring answers on Transfer sheets'
        }
      ],
      listening : [
          {
          color: 'grey lighten-2',
          icon: '',
          content: 'Before Listening: Using Audio Instructions and Predicting'
        },
        {
         color: 'grey lighten-2',
          icon: '',
          content: 'While Listening: Being Ready to Hear and Listening While Reading'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'After Listening: Checking and Transferring Answers'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Identifying Paraphrases'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Recognizing Opinion and Attitude'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Listening for Signpost Language'
        },
        {
          color: 'grey lighten-2',
          icon: 'mdi-crosshairs-question',
          content: 'Predicting the Type of Answer'
        }
      ]
    }),
}
</script>
<style>
    .pStyle, p{
  font-family:webFont1;
  font-size: 20px;
}
.hStyle, h2,h3,h4,h5,h6{
  font-family: webFont2;
}
</style>