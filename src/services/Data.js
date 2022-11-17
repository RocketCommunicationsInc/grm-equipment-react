import { randInt } from '../util/util';
import { genManyEquipment } from './Equipment';
import { getWorstStatus } from '../util/util';
import { Service } from './Service';

function generateComponents(changeCallback, num, eqPrefix, numDigits) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let components = [];

  for (let i = 0; i < num; i++) {
    const label = `Component ${alphabet[i]}`;
    const eq = genManyEquipment(
      changeCallback,
      randInt(2, 5),
      eqPrefix,
      numDigits
    );

    components.push({
      id: label.toLowerCase(),
      label: label,
      children: eq,
    });
  }

  return components;
}

export function calcCategoryStatus(category) {
  let statuses = [];
  category &&
    category.children.forEach((component) => {
      component.children.forEach((equipment) => {
        statuses.push(equipment.calcEquipmentStatus());
      });
    });

  return getWorstStatus(statuses);
}

export function getCategoryAlerts(category) {
  let alerts = [];
  category &&
    category.children.forEach((component) => {
      component.children.forEach((equipment) => {
        alerts = alerts.concat(equipment.data.alerts.data);
      });
    });

  return alerts;
}

export class DataService extends Service {
  static isStatic = false;

  constructor() {
    super();

    const ncWrapper = () => {
      this.notifyChange();
    };

    this.data = {
      categories: [
        {
          id: 'comms',
          label: 'Comms',
          payload: null,
          icon: 'antenna-receive',
          children: generateComponents(ncWrapper, randInt(2, 5), 'E', 4),
        },
        {
          id: 'digital',
          label: 'Digital',
          payload: null,
          icon: 'processor-alt',
          children: generateComponents(ncWrapper, randInt(2, 5), 'E', 3),
        },
        {
          id: 'facilities',
          label: 'Facilities',
          payload: null,
          icon: 'antenna-off',
          children: generateComponents(ncWrapper, randInt(2, 5), 'E', 5),
        },
        {
          id: 'rf',
          label: 'RF',
          payload: null,
          icon: 'antenna',
          children: [
            {
              id: 'Black FEP',
              label: 'Black FEP',
              children: genManyEquipment(
                ncWrapper,
                randInt(2, 5),
                'Black FEP ',
                4
              ),
            },
            {
              id: 'Red FEP',
              label: 'Red FEP',
              children: genManyEquipment(
                ncWrapper,
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

  onChange(cb) {
    this.onChangeCallbacks.push(cb);
  }

  notifyChange() {
    this.onChangeCallbacks.forEach((cb) => {
      cb(this.data);
    });
  }
}
