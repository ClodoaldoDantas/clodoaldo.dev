describe("Markdown preview", () => {
  it("toggles between Markdown source and rendered preview", () => {
    cy.visit("/docs/about");

    cy.get('[data-testid="markdown-source"]').should("be.visible");
    cy.get('[data-testid="active-tab"] button[aria-label="Abrir preview"]')
      .should("have.attr", "aria-pressed", "false")
      .and("contain.text", "Preview")
      .click();

    cy.get('[data-testid="markdown-preview"]')
      .contains("h2", "Sobre")
      .should("be.visible");
    cy.get('[data-testid="markdown-source"]').should("not.exist");
    cy.get('[data-testid="markdown-preview"] a')
      .contains("Github")
      .should("have.attr", "href", "https://github.com/clodoaldodantas");

    cy.get('[data-testid="active-tab"] button[aria-label="Ver código"]')
      .should("have.attr", "aria-pressed", "true")
      .and("contain.text", "Código")
      .click();
    cy.get('[data-testid="markdown-source"]').should(
      "contain.text",
      "## Sobre",
    );
    cy.get('[data-testid="markdown-preview"]').should("not.exist");
  });
});
