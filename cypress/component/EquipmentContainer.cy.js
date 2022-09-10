import EquipmentContainer from '../../src/components/EquipmentContainer/EquipmentContainer';

describe('EquipmentContainer.cy.js', () => {
  it('renders', () => {
    cy.mount(<EquipmentContainer></EquipmentContainer>);

    // cy.get('[data-test="equipment-container"]').should('be.visible');
  });
});
