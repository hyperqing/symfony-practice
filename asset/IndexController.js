// 导入 Vue
import Vue from 'vue';
// 导入 Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入 iView
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// 导入自己的Vue组件
import AddRuleDialog from './component/AddRuleDialog.vue'


Vue.use(ElementUI);
Vue.use(iView);
Vue.component('add-rule-dialog',  AddRuleDialog );


window.Vue = Vue;