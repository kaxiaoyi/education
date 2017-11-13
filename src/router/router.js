import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import  routers from './router.config';

var router = new VueRouter({
    routes: routers
})
export default router