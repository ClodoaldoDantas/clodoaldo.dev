describe("StatusBar", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit("/");
  });

  const openThemeMenu = () => {
    cy.get("button[aria-label='Alternar tema']").click();
  };

  const openFontMenu = () => {
    cy.get("button[aria-label='Trocar fonte']").click();
  };

  const selectTheme = (label: "Light" | "Dark") => {
    cy.contains(".popover-radio-item", label).click();
  };

  const selectFont = (label: "Space Mono" | "JetBrains Mono") => {
    cy.contains(".popover-radio-item", label).click();
  };

  describe("Theme toggle", () => {
    it("should switch between light and dark themes", () => {
      openThemeMenu();
      selectTheme("Light");
      cy.get("html").should("have.attr", "data-theme", "light");

      openThemeMenu();
      selectTheme("Dark");
      cy.get("html").should("have.attr", "data-theme", "dark");
    });
  });

  describe("Font toggle", () => {
    it("should switch between Space Mono and JetBrains Mono fonts", () => {
      openFontMenu();
      selectFont("Space Mono");
      cy.get("body").should("have.attr", "data-font", "space-mono");

      openFontMenu();
      selectFont("JetBrains Mono");
      cy.get("body").should("have.attr", "data-font", "jetbrains-mono");
    });
  });
});
