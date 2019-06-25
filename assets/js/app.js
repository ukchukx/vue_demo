import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import Example from '@/components/Example';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component(Example.name, Example);

const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

new Vue({ el: '#app' });
