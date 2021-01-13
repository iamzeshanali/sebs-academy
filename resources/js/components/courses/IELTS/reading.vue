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
                                <b>Facts about the Reading Test</b>
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
                                <b>Tips and strategies for all question’s types</b>
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
                                                <v-col cols="6">
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
                                <b>Reading Skills and Strategies</b>
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
                                <b>Do’s and Don’ts of IELTS Reading Exam</b>
                                </h5>
                                </v-card-title>
                                
                            </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>
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
          content: 'Question Types '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Transferring answers on Transfer sheets'
        }
      ],
      listening : [
          {
          color: 'grey lighten-2',
          icon: '',
          content: 'Sentence Completion'
        },
        {
         color: 'grey lighten-2',
          icon: '',
          content: 'Short Answer Questions'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Classification & Matching'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Classification'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Matching'
        },
        {
         color: 'grey lighten-2',
          icon: '',
          content: 'Identifying Information, Views, and Claims'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'True, False, Not Given'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Yes, No, Not Given'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Locating Information and Multiple Choice'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Labeling a Diagram'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Summary Tasks: Notes/Table/Flow Chart Completion'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Headings and Multiple Choice'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Choosing Headings'
        }
      ],
      tasks: [
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Skimming and Scanning'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Identifying Paraphrase'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Identifying Reference'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Locating Information'
        }
      ]

    }),
}
</script>