import { randInt } from '../util/util';
// import { getOne as getOneAlert } from './alerts';
import { genManyEquipment, calcEquipmentStatus } from './equipment';

// let data;

// export function createDataObject() {
//   console.log('what is data?', data);
//   if (data) return data;

//   data = { foo: Date.now() };

//   setInterval(() => {
//     console.log('wut');
//     data = { foo: Date.now() };
//   }, 1000);

//   return data;
// }

export var mainData = {
  notifiyUpdate: function () {},
  categories: [
    {
      id: 'comms',
      label: 'Comms',
      payload: null,
      icon: 'antenna-receive',
      children: generateComponents(randInt(2, 5), 'E', 4),
    },
    {
      id: 'digital',
      label: 'Digital',
      payload: null,
      icon: 'processor-alt',
      children: generateComponents(randInt(2, 5), 'E', 3),
    },
    {
      id: 'facilities',
      label: 'Facilities',
      payload: null,
      icon: 'antenna-off',
      children: generateComponents(randInt(2, 5), 'E', 5),
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
          children: genManyEquipment(randInt(2, 5), 'Black FEP ', 4),
        },
        {
          id: 'Red FEP',
          label: 'Red FEP',
          children: genManyEquipment(randInt(2, 5), 'Red FEP ', 4),
        },
      ],
    },
  ],
};

function generateComponents(num, eqPrefix, numDigits) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let components = [];

  for (let i = 0; i < num; i++) {
    const label = `Component ${alphabet[i]}`;

    components.push({
      id: label.toLowerCase(),
      label: label,
      children: genManyEquipment(randInt(2, 5), eqPrefix, numDigits),
    });
  }

  return components;
}

export function calcCategoryStatus(category) {
  let status = '';
  category &&
    category.children.forEach((component) => {
      component.children.forEach((equipment) => {
        status = calcEquipmentStatus(equipment).status;
      });
    });

  return status;
}

export function getCategoryAlerts(category) {
  let alerts = [];

  category &&
    category.children.forEach((component) => {
      component.children.forEach((equipment) => {
        alerts = alerts.concat(equipment.alerts);
      });
    });

  return alerts;
}
