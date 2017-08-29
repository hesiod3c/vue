import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';

import UiButton from './index';

const stories = storiesOf('Button', module);

stories.add('Style', () => ({
  component: { UiButton },
  template: '<ui-button style="default">Test</ui-button>',
}));
