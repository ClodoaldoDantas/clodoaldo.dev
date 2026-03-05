describe("CommandMenu", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const openCommandMenuViaButton = () => {
    cy.get("aside button[aria-label='Abrir menu de comandos']").click();
  };

  const openCommandMenuViaKeyboard = () => {
    cy.get("body").type("{meta}p");
  };

  const dialogShouldBeVisible = () => {
    cy.get("[role='dialog']").should("be.visible");
  };

  const dialogShouldNotBeVisible = () => {
    cy.get("[role='dialog']").should("not.exist");
  };

  describe("Opening and Closing", () => {
    it("should open command menu when button is clicked", () => {
      dialogShouldNotBeVisible();
      openCommandMenuViaButton();
      dialogShouldBeVisible();
    });

    it("should open command menu with Cmd+P keyboard shortcut", () => {
      dialogShouldNotBeVisible();
      openCommandMenuViaKeyboard();
      dialogShouldBeVisible();
    });

    it("should close command menu when Escape key is pressed", () => {
      openCommandMenuViaButton();
      dialogShouldBeVisible();

      cy.get("body").type("{esc}");
      dialogShouldNotBeVisible();
    });

    it("should close command menu when overlay is clicked", () => {
      openCommandMenuViaButton();
      dialogShouldBeVisible();

      cy.get(".dialog-overlay").click({ force: true });
      dialogShouldNotBeVisible();
    });

    it("should toggle command menu when Cmd+P is pressed again", () => {
      openCommandMenuViaKeyboard();
      dialogShouldBeVisible();

      openCommandMenuViaKeyboard();
      dialogShouldNotBeVisible();
    });
  });

  describe("Search and Filtering", () => {
    it("should display all files when search is empty", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.contains("about.md").should("be.visible");
        cy.contains("courses.md").should("be.visible");
        cy.contains("experiences.md").should("be.visible");
        cy.contains("qualifications.md").should("be.visible");
      });
    });

    it("should filter results when typing in search input", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("input[type='text']").type("about");

        cy.contains("about.md").should("be.visible");
        cy.contains("courses.md").should("not.exist");
        cy.contains("experiences.md").should("not.exist");
        cy.contains("qualifications.md").should("not.exist");
      });
    });

    it("should perform case-insensitive search", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("input[type='text']").type("ABOUT");

        cy.contains("about.md").should("be.visible");
        cy.contains("courses.md").should("not.exist");
      });
    });

    it("should display empty state message when no results match", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("input[type='text']").type("nonexistent");

        cy.contains("Nenhum resultado encontrado.").should("be.visible");
        cy.contains("about.md").should("not.exist");
      });
    });

    it("should filter partial matches correctly", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("input[type='text']").type("exp");

        cy.contains("experiences.md").should("be.visible");
        cy.contains("about.md").should("not.exist");
        cy.contains("courses.md").should("not.exist");
      });
    });
  });

  describe("Keyboard Navigation", () => {
    it("should move selection down with ArrowDown key", () => {
      openCommandMenuViaButton();
      cy.get("body").type("{downArrow}");

      cy.get("[role='dialog']").within(() => {
        cy.get("button")
          .eq(1)
          .invoke("attr", "class")
          .should("include", "selected");
      });
    });

    it("should move selection up with ArrowUp key", () => {
      openCommandMenuViaButton();

      cy.get("body").type("{downArrow}");
      cy.get("body").type("{upArrow}");

      cy.get("[role='dialog']").within(() => {
        cy.get("button")
          .first()
          .invoke("attr", "class")
          .should("include", "selected");
      });
    });

    it("should wrap to first item when pressing ArrowDown on last item", () => {
      openCommandMenuViaButton();

      cy.get("body").type("{downArrow}{downArrow}{downArrow}");

      cy.get("[role='dialog']").within(() => {
        cy.get("button")
          .eq(3)
          .invoke("attr", "class")
          .should("include", "selected");
      });

      cy.get("body").type("{downArrow}");

      cy.get("[role='dialog']").within(() => {
        cy.get("button")
          .first()
          .invoke("attr", "class")
          .should("include", "selected");
      });
    });

    it("should wrap to last item when pressing ArrowUp on first item", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("button")
          .first()
          .invoke("attr", "class")
          .should("include", "selected");
      });

      cy.get("body").type("{upArrow}");

      cy.get("[role='dialog']").within(() => {
        cy.get("button")
          .eq(3)
          .invoke("attr", "class")
          .should("include", "selected");
      });
    });

    it("should navigate to selected file when Enter is pressed", () => {
      openCommandMenuViaButton();

      cy.get("body").type("{downArrow}");
      cy.get("body").type("{enter}");

      cy.url().should("include", "/docs/");
      dialogShouldNotBeVisible();
    });

    it("should do nothing when Enter is pressed with no results", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("input[type='text']").type("nonexistent");
        cy.contains("Nenhum resultado encontrado.").should("be.visible");
      });

      cy.get("body").type("{enter}");

      dialogShouldBeVisible();
      cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    });
  });

  describe("Mouse Interaction", () => {
    it("should navigate to file when clicking on result item", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.contains("button", "about.md").click();
      });

      cy.url().should("include", "/docs/about");
      dialogShouldNotBeVisible();
    });

    it("should navigate to correct slug for each file", () => {
      openCommandMenuViaButton();
      cy.get("[role='dialog']").within(() => {
        cy.contains("button", "about.md").click();
      });
      cy.url().should("include", "/docs/about");

      openCommandMenuViaButton();
      cy.get("[role='dialog']").within(() => {
        cy.contains("button", "experiences.md").click();
      });
      cy.url().should("include", "/docs/experiences");

      openCommandMenuViaButton();
      cy.get("[role='dialog']").within(() => {
        cy.contains("button", "courses.md").click();
      });
      cy.url().should("include", "/docs/courses");

      openCommandMenuViaButton();
      cy.get("[role='dialog']").within(() => {
        cy.contains("button", "qualifications.md").click();
      });
      cy.url().should("include", "/docs/qualifications");
    });

    it("should close dialog after clicking on item", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.contains("button", "about.md").click();
      });

      dialogShouldNotBeVisible();
    });
  });

  describe("State Reset", () => {
    it("should reset search term when dialog is closed", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("input[type='text']").type("about");
        cy.get("input[type='text']").should("have.value", "about");
      });

      cy.get("body").type("{esc}");
      dialogShouldNotBeVisible();

      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("input[type='text']").should("have.value", "");
        cy.contains("about.md").should("be.visible");
        cy.contains("courses.md").should("be.visible");
        cy.contains("experiences.md").should("be.visible");
        cy.contains("qualifications.md").should("be.visible");
      });
    });

    it("should reset selection to first item when dialog is closed", () => {
      openCommandMenuViaButton();

      cy.get("body").type("{downArrow}{downArrow}");

      cy.get("[role='dialog']").within(() => {
        cy.get("button")
          .eq(2)
          .invoke("attr", "class")
          .should("include", "selected");
      });

      cy.get("body").type("{esc}");
      dialogShouldNotBeVisible();
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("button")
          .first()
          .invoke("attr", "class")
          .should("include", "selected");
      });
    });

    it("should reset state after navigation", () => {
      openCommandMenuViaButton();

      cy.get("[role='dialog'] input[type='text']").type("about");
      cy.get("body").type("{downArrow}");

      cy.get("[role='dialog']").within(() => {
        cy.contains("button", "about.md").click();
      });

      cy.visit("/");
      openCommandMenuViaButton();

      cy.get("[role='dialog']").within(() => {
        cy.get("input[type='text']").should("have.value", "");
        cy.get("button")
          .first()
          .invoke("attr", "class")
          .should("include", "selected");

        cy.contains("about.md").should("be.visible");
        cy.contains("courses.md").should("be.visible");
        cy.contains("experiences.md").should("be.visible");
        cy.contains("qualifications.md").should("be.visible");
      });
    });
  });
});
