import GlobalStatusBar from './GlobalStatusBar';

describe('EquipmentContainer.cy.js', () => {
  it('renders', () => {
    cy.mount(<GlobalStatusBar />)
      .get('[data-test="global-status-bar"]')
      .should('be.visible');
  });

  it('opens the menu when menu button is clicked', () => {
    cy.mount(<GlobalStatusBar />)
      .get('[data-test="global-status-menu-btn"]')
      .click({ position: 'top' })
      .get('[data-test="global-status-menu"]')
      .should('be.visible');
  });
});
