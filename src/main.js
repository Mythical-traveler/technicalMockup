import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
console.log(" main.js loaded — Vue app starting");

createApp(App).use(router).mount('#app')
