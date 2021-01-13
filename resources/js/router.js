import Vue from 'vue'
import Router from 'vue-router'

import sebs from './components/home'
import about from './components/about'
import gallery from './components/gallery'

import signup from './components/signup'
import testimonials from './components/testimonials'
import writingSkill from './components/courses/writingSkill'
import ielts from './components/courses/ielts'
import cssSkill from './components/courses/cssSkill'
import englishForAll from './components/courses/englishForAll'
import englishForProfessionals from './components/courses/englishForProfessionals'




Vue.use(Router)
const routes = [
    { path: '/', component: sebs, meta: { hideVanta: false } },
    { path: '/about', component: about, meta: { hideVanta: true } },
    { path: '/signup', component: signup, meta: { hideVanta: true } },
    { path: '/gallery', component: gallery, meta: { hideVanta: true } },
    { path: '/testimonials', component: testimonials, meta: { hideVanta: true } },
    { path: '/writingSkill', component: writingSkill, meta: { hideVanta: true } },
    { path: '/ielts', component: ielts, meta: { hideVanta: true } },
    { path: '/cssSkill', component: cssSkill, meta: { hideVanta: true } },
    { path: '/englishForAll', component: englishForAll, meta: { hideVanta: true } },
    { path: '/englishForProfessionals', component: englishForProfessionals, meta: { hideVanta: true } },
];
export default new Router({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});