Cypress.Commands.add('isVisible', { prevSubject: 'element'}, (subject, text) => {
    cy.log(text + ' isVisible')
    cy.wrap(subject).should('be.visible')
 })