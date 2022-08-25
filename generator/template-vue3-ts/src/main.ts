import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './services/request'

<%_ if (options['ui-framework'] === 'element-ui') { _%>
import './services/element';
<%_ } else if (options['ui-framework'] === 'ant') { _%>
import './services/ant';
<%_ } else if (options['ui-framework'] === 'view') { _%>
import './services/view';
<%_ } _%>
createApp(App).use(store).mount('#app')
