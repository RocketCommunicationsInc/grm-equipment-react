import { DataService } from '../../services/Data';
import EquipmentDetails from './EquipmentDetails';

describe('Equipment Details', () => {
  beforeEach(() => {
    DataService.isStatic = true;
    const data = new DataService().data;
    const equipment = data.categories[0].components[0].equipment[0];
    cy.mount(<EquipmentDetails equipment={equipment} />);
  });

  it('shows the panel label', () => {
    cy.getByData('panel-label').contains('Equipment Details');
  });

  context('status buttons', () => {
    it('changes to offline when Offline is clicked', () => {
      /* ensure the proper state when starting */
      cy.getByData('online-offline')
        .invoke('prop', 'selected')
        .should('eq', 'Online');

      cy.get('[for=offline]')
        .click()
        .getByData('online-offline')
        .invoke('prop', 'selected')
        .should('eq', 'Offline');
    });

    it('changes to deconsidered when Deconsidered is clicked', () => {
      /* ensure the proper state when starting */
      cy.getByData('considered-deconsidered')
        .invoke('prop', 'selected')
        .should('eq', 'Considered');

      cy.get('[for=deconsidered]')
        .click()
        .getByData('considered-deconsidered')
        .invoke('prop', 'selected')
        .should('eq', 'Deconsidered');
    });
  });
});
