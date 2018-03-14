// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTextField,
  VSubHeader,
  VCard,
  VDatePicker,
  VMenu,
  transitions,
} from 'vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';

import App from './App';
import '../node_modules/vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    VSubHeader,
    VCard,
    VDatePicker,
    VMenu,
    transitions,
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
});

Vue.use(VueAxios, axios);

Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyAwY-el22P4vA_ciSF3ND7BbK2VKj88YC0',
});

Vue.config.productionTip = false;
Vue.config.devtools = true;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
