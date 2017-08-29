import Vue from 'vue';
import Vuex from 'vuex';
import { configure } from '@storybook/vue';

Vue.use(Vuex);

function loadStories() {
  require('../../source/.stories');
}

configure(loadStories, module);

