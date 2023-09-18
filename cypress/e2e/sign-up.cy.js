const { generateRandomString, generateRandomEmail } = require('./helpers');

beforeEach(() => {
  cy.visit("http://localhost:3000/sign-up");
});

describe("Sign up", () => {
  let randomUser;

  it("Should successfully sign up with random data", () => {
    randomUser = {
      fullName: generateRandomString(1, 10),
      email: generateRandomEmail(),
      password: generateRandomString(1, 20),
    };

    cy.get('[name="fullName"]').type(randomUser.fullName);
    cy.get('[name="email"]').type(randomUser.email);
    cy.get('[name="password"]').type(randomUser.password, { log: false });
    cy.contains("Sign up").click();

    cy.url().should('eq', 'http://localhost:3000/sign-up/survey');
  });

  it("Should prevent registration with duplicate data", () => {

    cy.get('[name="fullName"]').type(randomUser.fullName);
    cy.get('[name="email"]').type(randomUser.email);
    cy.get('[name="password"]').type(randomUser.password, { log: false });
    cy.contains("Sign up").click();

    cy.contains("User already exists.").should('be.visible');

    cy.url().should('eq', 'http://localhost:3000/sign-up');
  });

  it("Should prevent registration with invalid email", () => {

    cy.get('[name="fullName"]').type(randomUser.fullName);
    cy.get('[name="email"]').type(randomUser.fullName);
    cy.get('[name="password"]').type(randomUser.password, { log: false });
    cy.contains("Sign up").click();

    cy.contains("Email is wrong.").should('be.visible');

    cy.url().should('eq', 'http://localhost:3000/sign-up');
  });

  it("Check required fields", () => {

    cy.contains("Sign up").click();

    cy.contains("Name is required.").should('be.visible');
    cy.contains("Email is required.").should('be.visible');
    cy.contains("Password is required.").should('be.visible');

    cy.url().should('eq', 'http://localhost:3000/sign-up');
  });
});
