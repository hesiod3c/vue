import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import FormControl from './index';

Vue.component('FormControl', FormControl);

const stories = storiesOf('FormControl', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => ({
  template: `
    <div>
    </div>`
}));
