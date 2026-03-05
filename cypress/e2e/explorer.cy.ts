describe("Explorer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const expandFolder = (folderName: string) => {
    cy.contains("button", folderName).click();
  };

  const folderShouldBeExpanded = (folderName: string) => {
    cy.contains("button", folderName).should(
      "have.attr",
      "aria-expanded",
      "true",
    );
  };

  const folderShouldBeCollapsed = (folderName: string) => {
    cy.contains("button", folderName).should(
      "have.attr",
      "aria-expanded",
      "false",
    );
  };

  const fileShouldBeVisible = (fileName: string) => {
    cy.contains("a", fileName).should("be.visible");
  };

  const navigateToFile = (fileName: string) => {
    cy.contains("a", fileName).click();
  };

  const activeTabShouldContain = (fileName: string) => {
    cy.get("div[data-testid='active-tab'] span").should("contain", fileName);
  };

  const activeTabShouldNotExist = () => {
    cy.get("div[data-testid='active-tab']").should("not.exist");
  };

  const closeActiveTab = () => {
    cy.get("div[data-testid='active-tab'] a").click();
  };

  describe("Rendering", () => {
    it("should render explorer with title and folder structure", () => {
      cy.get("aside").should("be.visible");
      cy.contains("Explorer").should("be.visible");

      fileShouldBeVisible("about.md");
      folderShouldBeCollapsed("work");
      folderShouldBeCollapsed("education");
    });

    it("should render profile folder opened by default", () => {
      folderShouldBeExpanded("profile");
    });
  });

  describe("Folder Interactions", () => {
    it("should expand and collapse work folder when clicked", () => {
      folderShouldBeCollapsed("work");

      expandFolder("work");
      folderShouldBeExpanded("work");

      expandFolder("work");
      folderShouldBeCollapsed("work");
    });

    it("should expand and collapse education folder when clicked", () => {
      folderShouldBeCollapsed("education");

      expandFolder("education");
      folderShouldBeExpanded("education");

      expandFolder("education");
      folderShouldBeCollapsed("education");
    });
  });

  describe("File Display", () => {
    it("should display correct files when folders are expanded", () => {
      fileShouldBeVisible("about.md");

      expandFolder("work");
      fileShouldBeVisible("experiences.md");

      expandFolder("education");
      fileShouldBeVisible("qualifications.md");
      fileShouldBeVisible("courses.md");
    });
  });

  describe("Navigation", () => {
    it("should navigate to correct page when file is clicked", () => {
      navigateToFile("about.md");
      cy.url().should("include", "/docs/about");

      expandFolder("work");
      navigateToFile("experiences.md");
      cy.url().should("include", "/docs/experiences");

      expandFolder("education");
      navigateToFile("qualifications.md");
      cy.url().should("include", "/docs/qualifications");

      navigateToFile("courses.md");
      cy.url().should("include", "/docs/courses");
    });
  });

  describe("Active Tab", () => {
    it("should display correct filename in active tab", () => {
      navigateToFile("about.md");
      activeTabShouldContain("about.md");
    });

    it("should close active tab when close button is clicked", () => {
      navigateToFile("about.md");
      cy.get("div[data-testid='active-tab']").should("be.visible");

      closeActiveTab();
      activeTabShouldNotExist();
      cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    });
  });
});
