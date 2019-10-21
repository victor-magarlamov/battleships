// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("getCellByIndex", (index) => {
  return cy.get('.board > .cell.field').eq(index);
})

Cypress.Commands.add("cellShouldBeInactive", (index) => {
  return cy.getCellByIndex(index).should('have.class', 'cell--inactive');
});

Cypress.Commands.add("cellShouldBeActive", (index) => {
  return cy.getCellByIndex(index).should('not.have.class', 'cell--inactive');
});

Cypress.Commands.add("moveShipToBoard", (row, shipIndex, cellIndex) => {
  cy.get('.ship-list__row').eq(row).within(() => {
    cy.get('.ship--horizontal')
      .eq(shipIndex)
      .trigger('mousedown');
  });
  
  cy.getCellByIndex(cellIndex).click();
});
