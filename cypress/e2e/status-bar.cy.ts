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

  const selectFont = (
    label: "Space Mono" | "JetBrains Mono" | "Source Code Pro",
  ) => {
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
      cy.get("body").should("have.attr", "data-font", "jetbrains-mono");
      selectFont("Space Mono");
      cy.get("body").should("have.attr", "data-font", "space-mono");

      openFontMenu();
      selectFont("JetBrains Mono");
      cy.get("body").should("have.attr", "data-font", "jetbrains-mono");

      openFontMenu();
      selectFont("Source Code Pro");
      cy.get("body").should("have.attr", "data-font", "source-code-pro");
    });
  });

  describe("Mobile controls", () => {
    beforeEach(() => {
      cy.viewport(390, 844);
      cy.visit("/");
    });

    it("shows theme and font menus in a usable mobile status bar", () => {
      cy.get("button[aria-label='Alternar tema']").should("be.visible");
      cy.get("button[aria-label='Trocar fonte']").should("be.visible");
      cy.contains("button", "Tema").should("be.visible");
      cy.contains("button", "Fonte").should("be.visible");

      openThemeMenu();
      selectTheme("Dark");
      cy.get("html").should("have.attr", "data-theme", "dark");

      openFontMenu();
      cy.get("body").should("have.attr", "data-font", "jetbrains-mono");
      selectFont("Source Code Pro");
      cy.get("body").should("have.attr", "data-font", "source-code-pro");
    });
  });
});
