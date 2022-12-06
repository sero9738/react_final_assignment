it("passes", () => {
  cy.visit("/rooms");

  cy.url().should("match", /\/rooms/);
  
  cy.findAllByText("Page 1 of 3 (20 results in total)").should("be.exist");

  cy.findByRole("button", {name: "Previous page"}).should("be.disabled");

  cy.findByRole("button", {name: "Next page"}).click();

  cy.findAllByText("Page 1 of 3 (20 results in total)").should("not.be.exist");
  cy.findAllByText("Page 2 of 3 (20 results in total)").should("be.exist");

  cy.findByRole("button", {name: "Next page"}).click();

  cy.findAllByText("Page 3 of 3 (20 results in total)").should("be.exist");

  cy.findByRole("button", {name: "Next page"}).should("be.disabled");

  cy.findByText("Add cabin").should("be.exist");

  cy.findByText("Add cabin").click();

  cy.url().should("match", /\/create/);

  cy.findByLabelText("Title").should("be.exist");
  cy.findByLabelText("Title").type("A new cabin").should("have.value", "A new cabin");

  cy.findByLabelText("Description").should("be.exist");
  cy.findByLabelText("Description").type("A very cosy cabin, newly renovated").should("have.value", "A very cosy cabin, newly renovated");

  cy.findByLabelText("Hero image URL").should("be.exist");
  cy.findByLabelText("Hero image URL").type("test url").should("have.value", "test url");

  //cy.findByLabelText("Featured").should("be.exist");
  //cy.findByLabelText("Featured").should("not.be.checked");

  //cy.findByLabelText("Featured").click();
  //cy.findByLabelText("Featured").should("be.checked");

  cy.findByRole("button", {name: "Add cabin"}).should("be.exist");
  cy.findByRole("button", {name: "Add cabin"}).click();

  cy.findByText("Invalid data received, please verify your input.").should("be.exist");

  cy.findByLabelText("Hero image URL").clear();
  cy.findByLabelText("Hero image URL").should("be.empty");
  cy.findByLabelText("Hero image URL").type("https://i.pravatar.cc/300?img=35").should("have.value", "https://i.pravatar.cc/300?img=35");

  cy.findByRole("button", {name: "Add cabin"}).click();
});

export {};