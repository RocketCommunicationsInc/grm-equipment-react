import EquipmentContainer from './EquipmentContainer';

describe('EquipmentContainer.cy.js', () => {
  beforeEach(() => {
    cy.mount(<EquipmentContainer />);
  });

  it('renders', () => {
    cy.getByData('equipment-container').should('be.visible');
  });

  it('shows the second panel when second tab is selected', () => {
    cy.getByData('tab-inoperable')
      .invoke('prop', 'selected')
      .should('eq', true);

    /* { force: true } because cypress said the element had no width or
     * height and was therefore not visible so it couldn't click it
     */
    cy.getByData('tab-id-2').click({ force: true });
    cy.getByData('panel-id-2').should('be.visible');
  });
});
