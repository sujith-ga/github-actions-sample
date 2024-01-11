/// <reference types="cypress"/>

describe("Test main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("should have a title", () => {
    cy.get(".title").should('be.visible');
  });
  it("should have submit button", () => {
    cy.get("#submit-button").should("be.visible");
  });
  it("should have a joke line", () => {
    cy.get(".joke-block").should("be.visible");
  });
  it("should change the submit button on first click", () => {
    cy.get("#submit-button").should("have.text", "Surprise me!");
    cy.get("#submit-button").click();
    cy.get("#submit-button").should("have.text", "Try another");
  });
  it("should get a joke", () => {
    cy.get("#submit-button").click();
    cy.get("#joke-line").should("not.be.empty");
    console.log("#joke-line");
  });
  it("should have its joke changed on click", () => {
    cy.get("#submit-button").click();
    cy.get("#joke-line").then(($joke) => {
      const jokeText = $joke.text();
      cy.get("#submit-button").click();
      cy.get("#joke-line").should(($joke2) => {
        expect($joke2.text()).not.to.eq(jokeText);
      });
    });
});
});
