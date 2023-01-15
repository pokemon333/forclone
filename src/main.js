import axios from 'axios'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import ApiService from './ApiService'
import './tailwind.css'

// import axios from 'axios';

const app = createApp(App)
ApiService.init(app);
app.use(router)

app.mount('#app')
