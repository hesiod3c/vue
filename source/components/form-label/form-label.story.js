import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import FormLabel from './index';

Vue.component('FormLabel', FormLabel);

const stories = storiesOf('FormLabel', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => ({
  template: `
    <div>
    </div>`
}));
