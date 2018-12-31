import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { addonNotes } from '@storybook/addon-notes';
import { withKnobs, addonKnobs, text, number, boolean, array, select, color, date } from '@storybook/addon-knobs';
import LoginForm from '../../components/auth/LoginForm.vue';

const stories = storiesOf('Login Form', module);

stories.addDecorator(withKnobs);

  // Works if Vue.component is called in the config.js in .storybook
  stories.add('Current slot', () => ({
    components: { LoginForm },
    template: `
    <v-app>
      <login-form>
        <v-btn
          dark
          depressed
          color="light-green darken-1">
          <span class="mr-2">Login</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </login-form>
    </v-app>
    `
  }));

  stories.add('Default slot', () => ({
    components: { LoginForm },
    template: `<v-app><login-form>${text('Label', 'Hello Storybook')}</login-form></v-app>`
  }))
  ;
