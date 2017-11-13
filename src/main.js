import Vue from 'vue';
import axios from 'axios';
import app from './app.vue';
import router from './router/router';
import "./css/reset.css";
import stroe from "./vuex/vuex";

let query = {
    install: function (v) {
        v.prototype.$http = axios;
    }
}
Vue.use(query);


new Vue({
    el: ".container",
    render: function (createElement) {
        return createElement(app)
    },
    router: router,
    mounted: function () {},
    store:stroe
})



if (module.hot) {
    module.hot.accept()
}