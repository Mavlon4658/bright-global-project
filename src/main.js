import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/fonts/CenturyGothic/font.css'
import './assets/style/style.scss'
import components from '@/components/UI'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component);
})

app.use(router).mount('#app')