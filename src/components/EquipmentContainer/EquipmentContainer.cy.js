import { DataService } from '../../services/Data';
import EquipmentContainer from './EquipmentContainer';

describe('EquipmentContainer.cy.js', () => {
  beforeEach(() => {
    DataService.isStatic = true;
    const data = new DataService().data;
    let currentEq = data.categories[0].components[0].equipment[0];
    function selectEquip(e) {
      currentEq = e;
    }

    cy.mount(
      <EquipmentContainer
        data={data}
        currentEq={currentEq}
        selectEquip={selectEquip}
      />
    );
  });

  it('renders', () => {
    cy.getByData('equipment-container').should('be.visible');
  });

  it.only('opens a panel when equipment is selected', () => {
    /* { force: true } because cypress said the element had no width or
     * height and was therefore not visible so it couldn't click it
     */
    cy.getByData('equipment-0-0')
      .click({ force: true })
      .getByData('panel-id-1')
      .should('be.visible');
  });
});
