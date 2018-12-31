import 'vuetify/dist/vuetify.css';

import { configure } from '@storybook/vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors'
import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.darken1,
    secondary: colors.blue.darken2,
    accent: colors.teal.accent4,
    error: colors.red.darken3,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.lightGreen.accent4
  },
  customProperties: true,
  iconfont: 'md'
})

const req = require.context('./stories', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
