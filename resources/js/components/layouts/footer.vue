<template>
    <div>
         <v-footer
            padless
        >
            <v-card
            flat
            tile
            class="grey lighten-4 black--text text-center"
            >
            <v-card-text class="mt-7">
           <v-btn
                class="mx-4 indigo--text text--darken-3"
                icon
                >
                <img width="130px" src="/images/SEBS-Logo-Prototype-3.jpg" alt="Vaxon." class="img-fluid">
                </v-btn>
            </v-card-text>
            <v-card-text>
           
           <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 indigo--text text--darken-3"
                icon
                >
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
                </v-btn>
            </v-card-text>
            <v-card-text class="red--text text--darken-3 pt-0">
                <h5>Quick Links</h5>
                <v-chip v-for="(title, idx) in shorLinks"
                :key="'A'+idx"
                class="ma-2"
                color="indigo"
                outlined
                small
                exact-active-class
                draggable
                link
                :to="title.link"
               >
               
               <b>
                {{title.name}}</b>
               </v-chip>
        
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="red--text text--darken-3">
               <b> © 2021  All Rights Reserved. </b> | 
               <b>Terms & Conditions </b> | 
               <b> Website Developed by </b><b class="indigo--text text--darken-3"><a href="https://devticstech.com/">Devtics Technologies</a></b>

            </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>
<style scoped>
a{
    text-decoration: none;

}
a:hover{
    color: red;
}
.text1{
    font-family: 'Pacifico', cursive;
  }
.hStyle{
  font-family: webFont2;
}
</style>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      shorLinks: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About",
          link: "/about"
        },{
          name: "Contact Us",
          link: "/about"
        },{
          name: "Gallery",
          link: "/gallery"
        },
        {
          name: "General Writing Skill",
          link: "/writingSkill"
        },
        {
          name: "IELTS Listening",
          link: "/ielts"
        },{
          name: "IELTS Speaking",
          link: "/ielts"
        },{
          name: "IELTS Reading",
          link: "/ielts"
        },
        {
          name: "IELTS Writing",
          link: "/ielts"
        },
        {
          name: "Writing Skills for CSS",
          link: "/cssSkill"
        },{
          name: "Spoken English for All",
          link: "/englishForAll"
        },{
          name: "English for Professionals",
          link: "/englishForProfessionals"
        },
        {
          name: "Assessment Test",
          link: "/englishForProfessionals"
        },
        {
          name: "Certification",
          link: "/englishForProfessionals"
        },
        {
          name: "About",
          link: "/about"
        },
      ],
    }),
  }
</script>