import { createSSRApp } from 'vue'
import App from './App.vue'
import './styles.css'

const initialLocale = window.location.pathname.startsWith('/en') ? 'en' : 'pt-BR'

createSSRApp(App, { initialLocale }).mount('#app')
