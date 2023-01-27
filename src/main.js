import axios from 'axios'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import ApiService from './ApiService'
import './tailwind.css'
import { createPinia } from 'pinia'

// import axios from 'axios';

const app = createApp(App)

app.use(createPinia())
app.use(router)
ApiService.init(app);


app.mount('#app')
