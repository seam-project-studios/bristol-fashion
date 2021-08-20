import './commands';
import 'cypress-jest-adapter';
import '@cypress/vue/dist/support';
import '@cypress/code-coverage/support';

before(() => {
  cy.visit('/');
});
