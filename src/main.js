import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/index.scss'
import element3 from './plugins/element3'


createApp(App).use(element3).use(store).use(router).mount('#app')
