it("passes", () => {
  cy.visit("/rooms");
  // Check if url matches
  cy.url().should("match", /\/rooms/);

  //Create
  cy.findByText("Add cabins").should("be.exist");
  cy.findByText("Add cabins").click();

  cy.url().should("match", /\/create/);

  cy.findByLabelText("Title").should("be.exist");
  cy.findByLabelText("Title").type("A new cabin").should("have.value", "A new cabin");

  cy.findByLabelText("Description").should("be.exist");
  cy.findByLabelText("Description").type("A very cosy cabin, newly renovated").should("have.value", "A very cosy cabin, newly renovated");

  cy.findByLabelText("Hero image Url").should("be.exist");
  cy.findByLabelText("Hero image Url").type("test url").should("have.value", "test url");

  cy.findByLabelText("Featured").should("be.exist");
  cy.findByLabelText("Featured").should("not.be.checked");

  cy.findByLabelText("Featured").click();
  cy.findByLabelText("Featured").should("be.checked");

  cy.findByRole("button", { name: "Add cabin" }).should("be.exist");
  cy.findByRole("button", { name: "Add cabin" }).click();

  cy.findByText("Invalid data received, please check if your image url is correct.").should("be.exist");

  cy.findByLabelText("Hero image Url").clear();
  cy.findByLabelText("Hero image Url").should("be.empty");
  cy.findByLabelText("Hero image Url").type("https://c.pxhere.com/photos/5f/c8/galleon_ship_moored_sail_vessel_nautical_transportation_boat-553557.jpg!d").should("have.value", "https://c.pxhere.com/photos/5f/c8/galleon_ship_moored_sail_vessel_nautical_transportation_boat-553557.jpg!d");

  cy.findByRole("button", { name: "Add cabin" }).click();

  cy.url().should("match", /\/rooms/);
  cy.findByText("A new cabin").should("be.exist");
  cy.findByText("A very cosy cabin, newly renovated").should("be.exist");
});

export { };