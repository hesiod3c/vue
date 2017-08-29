import Vue from 'vue';
import Vuex from 'vuex';
import { configure } from '@storybook/vue';

Vue.use(Vuex);

function loadStories() {
  const req = require.context('../../source/', true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

