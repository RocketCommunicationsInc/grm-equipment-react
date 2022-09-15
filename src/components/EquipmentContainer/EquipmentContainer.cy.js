import EquipmentContainer from './EquipmentContainer';

describe('EquipmentContainer.cy.js', () => {
  it('renders', () => {
    cy.mount(<EquipmentContainer></EquipmentContainer>)
      .get('[data-test="equipment-container"]')
      .should('be.visible');
  });
});
