import { createApp } from 'vue'
import 'semantic-ui-css/semantic.min.css';
import './style.scss'
import App from './App.vue'
import $ from 'jquery';
import 'semantic-ui-css/semantic.min.js';
import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';


const app = createApp(App);
app.mount('#app')

