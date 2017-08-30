import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import FormGroup from './index';

Vue.component('FormGroup', FormGroup);

const stories = storiesOf('FormGroup', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => ({
  template: `
    <div>
    </div>`
}));
