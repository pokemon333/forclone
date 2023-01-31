import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ApiService from './ApiService'
import './tailwind.css'

import { createPinia } from 'pinia'



const app = createApp(App)

app.use(createPinia())
app.use(router)

ApiService.init(app);


app.mount('#app')
