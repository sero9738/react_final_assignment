it("passes", () => {
    cy.visit("/rooms");

    // Check if url matches
    cy.url().should("match", /\/rooms/);

    //Pagination Test
    cy.findAllByText("Page: 1 from 3 : Total Elements 20").should("be.exist");
    cy.findByRole("button", {name: "previous page"}).should("be.disabled");
  
    cy.findByRole("button", {name: "next page"}).click();
  
    cy.findAllByText("Page: 1 from 3 : Total Elements 20").should("not.be.exist");
    cy.findAllByText("Page: 2 from 3 : Total Elements 20").should("be.exist");
    cy.url().should("match", /\/rooms\?page=2/);
  
    cy.findByRole("button", {name: "next page"}).click();
  
    cy.findAllByText("Page: 3 from 3 : Total Elements 20").should("be.exist");
    cy.url().should("match", /\/rooms\?page=3/);
    cy.findByRole("button", {name: "next page"}).should("be.disabled");

    cy.findByRole("button", {name: "previous page"}).click();

    cy.findAllByText("Page: 2 from 3 : Total Elements 20").should("be.exist");
    cy.url().should("match", /\/rooms\?page=2/);

    cy.findByRole("button", {name: "previous page"}).click();

    cy.findAllByText("Page: 1 from 3 : Total Elements 20").should("be.exist");
    cy.url().should("match", /\/rooms\?page=1/);
    cy.findByRole("button", {name: "previous page"}).should("be.disabled");

    // Starring rooms
    cy.findAllByText("Susan Taylor").should("be.exist");
    cy.findAllByText("1 starred cabin").should("be.exist");

    cy.findAllByRole("button", {name: "starred button"}).should("be.exist");
    cy.findAllByRole("button", {name: "starred button"}).should("not.be.disabled");
    cy.findAllByRole("button", {name: "starred button"}).first().click();

    cy.findAllByText("1 starred cabin").should("not.be.exist");
    cy.findAllByText("2 starred cabin").should("be.exist");

  });
  
  export {};