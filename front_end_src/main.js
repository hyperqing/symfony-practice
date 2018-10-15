import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

Vue.use(ElementUI);
Vue.component('app-item', App);
Vue.config.productionTip = false;

window.Vue = Vue;
