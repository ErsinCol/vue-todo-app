import { createApp } from 'vue';
import {createPinia} from "pinia";
import i18n from "./locales/index.js";
import './style.css';
import App from './App.vue';

const pinia = createPinia();

createApp(App).use(pinia).use(i18n).mount('#app');
