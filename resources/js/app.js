require('./bootstrap');
window.Vue = require('vue')
    //External Libraries
    //Vuetify Library
import vuetify from './vuetify'
//Vue-Router Library
import router from './router'
import main_app from './components/main'
const app = new Vue({
    el: '#app',
    vuetify,

    router,

    components: {
        'main-app': main_app
    }
})