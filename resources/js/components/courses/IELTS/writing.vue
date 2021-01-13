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
                                <b>Facts about the Writing Test</b>
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
                                <b>Introduction to Writing Task 1 </b>
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
                                <b>Introduction to Writing Task 2 </b>
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
                                <b>Writing the Introduction </b>
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
                                <b>Writing body paragraph </b>
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
                                                v-for="(paragraph, i) in paragraphs"
                                                :key="i"
                                                :color="paragraph.color"
                                                :icon="paragraph.icon"
                                                fill-dot
                                                small
                                            >
                                            <v-row>
                                                <v-col cols="6">
                                                <strong> <h5><b>{{paragraph.content}}</b></h5> 	</strong>
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
                                <b>Writing the consclusion</b>
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
                                <b>Writing Complex Sentences with variety </b>
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
                                <b>Vocabulary for IELTS Task 2</b>
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
                                
                                <h5 class="grey--text text--darken-6" >
                                    <v-icon
                                    color="grey"
                                    left
                                    >mdi-airballoon
                                    </v-icon>
                                <b>Do’s and Don’ts of IELTS Writing Exam</b>
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
          content: 'Question Types '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Bands criteria/ Assessment criteria'
        }
      ],
      listening : [
          {
          color: 'grey lighten-2',
          icon: '',
          content: 'Types of question'
        },
        {
         color: 'grey lighten-2',
          icon: '',
          content: 'Format'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Assessment criterion'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Understanding Task Graphs/charts/maps/process diagrams '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Analyzing and Describing Key Features'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Selecting and Grouping Information'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Grammar and vocabulary for Describing Datar'
        }
      ],
      tasks: [
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Types of question'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Format '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Assessment criterion'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Question Analysis '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Brainstorming  '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Planning  '
        },
      ],
      introductions: [
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Paragraph Structure'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Thesis writing'
        }
      ],
      paragraphs: [
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Topic sentences'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Supporting details'
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Conclusion '
        },
        {
          color: 'grey lighten-2',
          icon: '',
          content: 'Coherence and Cohesion '
        },
      ],

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