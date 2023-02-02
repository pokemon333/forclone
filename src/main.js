import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ApiService from './ApiService'
import AOS from 'aos'
import { createPinia } from 'pinia'

import './tailwind.css'
import 'aos/dist/aos.css'
// import '@coreui/coreui/dist/css/coreui.min.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
AOS.init();
ApiService.init(app);


app.mount('#app')
