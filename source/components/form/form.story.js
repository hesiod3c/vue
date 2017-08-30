import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import Form from './index';
import FormGroup from '../form-group';
import FormLabel from '../form-label';
import FormControl from '../form-control';
import FormActions from '../form-actions';
import Button from '../button';

Vue.component('Form', Form);

const stories = storiesOf('Form', module);

stories.addDecorator(withKnobs);

const nop = () => {};

stories.add('Normal', () => ({
  template: `
    <Form onSubmit="${nop}">
      <FormGroup>
        <FormLabel>Example of label</FormLabel>
        <FormControl placeholder="Form, FormGroup and input" />
      </FormGroup>
      <FormActions>
        <Button>Cancelar</Button>
        <Button type="primary">Enviar</Button>
      </FormActions>
    </Form>`
}));
