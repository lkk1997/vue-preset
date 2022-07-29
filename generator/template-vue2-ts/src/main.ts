import Vue from 'vue'
import App from './App.vue'
import './services/request'
import store from './store'

<%_ if (options['ui-framework'] === 'element-ui') { _%>
import './services/element';
<%_ } else if (options['ui-framework'] === 'ant') { _%>
import './services/ant';
<%_ } else if (options['ui-framework'] === 'view') { _%>
import './services/view';
<%_ } _%>

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
