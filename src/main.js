import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import store from './store/index';
import BaseCard from './components/basecomponents/BasecCard.vue';
import BaseBadge from './components/basecomponents/BaseBadge.vue';
import BaseButton from './components/basecomponents/BaseButton.vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);

app.mount('#app');
