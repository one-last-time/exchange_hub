import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router/index.js'
import store from './store'

library.add(faStar)

const app = createApp(App);
// app.component("font-awesome-icon", FontAwesomeIcon);
console.log(router)
app.use(router)
app.use(store)
app.mount('#app')