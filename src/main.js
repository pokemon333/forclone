import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ApiService from './ApiService'
import './tailwind.css'
// import animation from './animation.js'

const app = createApp(App)
ApiService.init(app);
app.use(router)
// app.use(animation)
app.mount('#app')
