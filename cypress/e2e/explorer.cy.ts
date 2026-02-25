describe("Explorer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render explorer with title and folder structure", () => {
    cy.get("aside").should("be.visible");
    cy.contains("Explorer").should("be.visible");

    cy.contains("button", "profile").should("be.visible");
    cy.contains("button", "work").should("be.visible");
    cy.contains("button", "education").should("be.visible");
  });

  it("should render profile folder opened by default", () => {
    cy.contains("button", "profile").should(
      "have.attr",
      "aria-expanded",
      "true",
    );
  });

  it("should expand and collapse work folder when clicked", () => {
    const button = cy.contains("button", "work");
    button.should("have.attr", "aria-expanded", "false");

    button.click();
    button.should("have.attr", "aria-expanded", "true");

    button.click();
    button.should("have.attr", "aria-expanded", "false");
  });

  it("should expand and collapse education folder when clicked", () => {
    const button = cy.contains("button", "education");
    button.should("have.attr", "aria-expanded", "false");

    button.click();
    button.should("have.attr", "aria-expanded", "true");

    button.click();
    button.should("have.attr", "aria-expanded", "false");
  });

  it("should display correct files when folders are expanded", () => {
    cy.contains("a", "about.md").should("be.visible");

    cy.contains("button", "work").click();
    cy.contains("a", "experiences.md").should("be.visible");

    cy.contains("button", "education").click();
    cy.contains("a", "qualifications.md").should("be.visible");
    cy.contains("a", "courses.md").should("be.visible");
  });

  it("should navigate to correct page when file is clicked", () => {
    cy.contains("a", "about.md").click();
    cy.url().should("include", "/docs/about");

    cy.contains("button", "work").click();
    cy.contains("a", "experiences.md").click();
    cy.url().should("include", "/docs/experiences");

    cy.contains("button", "education").click();

    cy.contains("a", "qualifications.md").click();
    cy.url().should("include", "/docs/qualifications");

    cy.contains("a", "courses.md").click();
    cy.url().should("include", "/docs/courses");
  });

  it("should display correct filename in active tab", () => {
    cy.contains("a", "about.md").click();
    cy.get("div[data-testid='active-tab'] span").should("contain", "about.md");
  });

  it("should close active tab when close button is clicked", () => {
    cy.contains("a", "about.md").click();
    cy.get("div[data-testid='active-tab']").should("be.visible");

    cy.get("div[data-testid='active-tab'] a").click();
    cy.get("div[data-testid='active-tab']").should("not.exist");
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });
});
