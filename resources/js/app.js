
require('./bootstrap');

window.Vue = require('vue');

//import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */




//-----------


import {routes} from './routes';

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})



const app = new Vue({
	el: '#app',
  	router
}).$mount('#app')

