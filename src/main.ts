import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueVirtualScroller from 'vue-virtual-scroller'

const app = createApp(App)

app.use(createPinia())
app.use(VueVirtualScroller)

app.mount('#app')
