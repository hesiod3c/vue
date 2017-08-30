import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import FormActions from './index';

Vue.component('FormActions', FormActions);

const stories = storiesOf('FormActions', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => ({
  template: `
    <div>
    </div>`
}));
