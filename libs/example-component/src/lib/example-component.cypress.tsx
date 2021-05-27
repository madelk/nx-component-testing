import { mount } from '@cypress/react';
import App from './example-component';

it('ExampleComponent', () => {
  mount(<App />);
  cy.get('div').contains('Welcome to example-component!');
});
