import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import Icon from './index';

Vue.component('Icon', Icon);

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => ({
  template: `
    <div>
      <Icon />
    </div>`
}));

stories.add('Size', () => ({
  template: `
    <div>
      <Icon size="4rem" />
    </div>`
}));
