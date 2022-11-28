import { randInt } from '../util/util';
import { getWorstStatus } from '../util/util';
import { EquipmentService } from './Equipment';
import { Service } from './Service';
export class DataService extends Service {
  static isStatic = false;

  constructor() {
    super();

    this.data = {
      categories: [
        {
          id: 'comms',
          label: 'Comms',
          payload: null,
          icon: 'antenna-receive',
          components: generateComponents(
            this.notifyChange.bind(this),
            randInt(2, 5),
            'E',
            4
          ),
        },
        {
          id: 'digital',
          label: 'Digital',
          payload: null,
          icon: 'processor-alt',
          components: generateComponents(
            this.notifyChange.bind(this),
            randInt(2, 5),
            'E',
            3
          ),
        },
        {
          id: 'facilities',
          label: 'Facilities',
          payload: null,
          icon: 'antenna-off',
          components: generateComponents(
            this.notifyChange.bind(this),
            randInt(2, 5),
            'E',
            5
          ),
        },
        {
          id: 'rf',
          label: 'RF',
          payload: null,
          icon: 'antenna',
          components: [
            {
              id: 'Black FEP',
              label: 'Black FEP',
              equipment: DataService.genManyEquipment(
                this.notifyChange.bind(this),
                randInt(2, 5),
                'Black FEP ',
                4
              ),
            },
            {
              id: 'Red FEP',
              label: 'Red FEP',
              equipment: DataService.genManyEquipment(
                this.notifyChange.bind(this),
                randInt(2, 5),
                'Red FEP ',
                4
              ),
            },
          ],
        },
      ],
    };
  }

  static genManyEquipment(changeCallback, num, eqPrefix, numDigits) {
    const equipments = [];

    for (let i = 0; i < num; i++) {
      const equipment = new EquipmentService(eqPrefix, numDigits);
      equipment.onChange(changeCallback);
      equipments.push(equipment);
    }

    return equipments;
  }
}

function generateComponents(changeCallback, num, eqPrefix, numDigits) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let components = [];

  for (let i = 0; i < num; i++) {
    const label = `Component ${alphabet[i]}`;
    const eq = DataService.genManyEquipment(
      changeCallback,
      randInt(2, 5),
      eqPrefix,
      numDigits
    );

    components.push({
      id: label.toLowerCase(),
      label: label,
      equipment: eq,
    });
  }

  return components;
}

export function calcCategoryStatus(category) {
  let statuses = [];
  category &&
    category.components.forEach((component) => {
      component.equipment.forEach((equipment) => {
        statuses.push(equipment.calcEquipmentStatus());
      });
    });

  return getWorstStatus(statuses);
}

export function getCategoryAlerts(category) {
  let alerts = [];
  category &&
    category.components.forEach((component) => {
      component.equipment.forEach((equipment) => {
        alerts = alerts.concat(equipment.data.alerts.data);
      });
    });

  return alerts;
}
