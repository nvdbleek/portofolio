import { cy, expect, it } from 'local-cypress'

describe('Navigation', () => {
   it('should should contain name', () => {
    // Start from the index page
    cy.visit('/');

    cy.get('h1').contains('Nick Van den Bleeken');
  });

  it('should auto play video', () => {
    cy.visit('/');
    cy.get('video')
        .should('have.prop', 'paused', false)
        .and('have.prop', 'ended', false)
  });

  it('should contain skills', () => {
    // Start from the index page
    cy.visit('/');

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="skills"]').click()

    const skillsSection = cy.get('#skills');
    skillsSection.find('h1').contains('My Technical Skills');
    cy.get('#skills').find('img:not([alt=""])').should('have.length', 18);
  });

  it('should navigate to the about section', () => {
    // Start from the index page
    cy.visit('/');

    cy.window().then(($window) => {
        expect($window.scrollY).to.be.closeTo(0, 100);
    });
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    cy.get('#about').then(div => {
        cy.window().then(($window) => {
            expect($window.scrollY).to.be.closeTo(div.position().top, 100);
        });
    });
  })

  it('should navigate to the skills section', () => {
    // Start from the index page
    cy.visit('/');

    cy.window().then(($window) => {
        expect($window.scrollY).to.be.closeTo(0, 100);
    });
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="skills"]').click();

    cy.get('#skills').then(div => {
        cy.window().then(($window) => {
            expect($window.scrollY).to.be.closeTo(div.position().top, 100);
        });
    });
  })
})