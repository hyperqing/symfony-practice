import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import App from './App.vue';

import AddRuleDialog from './component/AddRuleDialog.vue'


Vue.use(ElementUI);
Vue.component('add-rule-dialog',  AddRuleDialog )
window.Vue = Vue;