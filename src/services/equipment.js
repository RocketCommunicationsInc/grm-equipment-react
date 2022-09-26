import { loremIpsum, uniqueInt, randInt } from '../util/util';
import { genAlert, genAlerts } from './alerts';
import { getWorstStatus } from '../util/util';

export function getTaxonomy() {
  return [
    {
      _id: 'comms',
      label: 'Comms',
      payload: null,
      children: [
        {
          label: 'Component A',
          children: [
            {
              id: 'E1247',
              label: 'Equipment 1247',
              status: 'critical',
            },
            {
              id: 'E2375',
              label: 'Equipment 2375',
              status: 'serious',
            },
            {
              id: 'E3267',
              label: 'Equipment 3267',
              status: 'critical',
            },
            {
              id: 'E6757',
              label: 'Equipment 6757',
              status: 'serious',
            },
          ],
        },
        {
          label: 'Component B',
          children: [
            {
              id: 'E1543',
              label: 'Equipment 1543',
              status: 'serious',
            },
            {
              id: 'E2126',
              label: 'Equipment 2126',
              status: 'critical',
            },
            {
              id: 'E3653',
              label: 'Equipment 3653',
              status: 'critical',
            },
            {
              id: 'E7342',
              label: 'Equipment 7342',
              status: 'serious',
            },
          ],
        },
        {
          label: 'Component C',
          children: [
            {
              id: 'E1364',
              label: 'Equipment 1364',
              status: 'serious',
            },
            {
              id: 'E2734',
              label: 'Equipment 2734',
              status: 'serious',
            },
            {
              id: 'E4782',
              label: 'Equipment 4782',
              status: 'serious',
            },
            {
              id: 'E9433',
              label: 'Equipment 9433',
              status: 'critical',
            },
          ],
        },
        {
          label: 'Component D',
          children: [
            {
              id: 'E2364',
              label: 'Equipment 2364',
              status: 'critical',
            },
            {
              id: 'E3734',
              label: 'Equipment 3734',
              status: 'critical',
            },
            {
              id: 'E5782',
              label: 'Equipment 5782',
              status: 'serious',
            },
            {
              id: 'E9623',
              label: 'Equipment 9623',
              status: 'critical',
            },
          ],
        },
      ],
    },
    {
      _id: 'digital',
      label: 'Digital',
      payload: null,
      children: [
        {
          label: 'Component A',
          children: [
            {
              id: 'E247',
              label: 'Equipment 247',
              status: 'serious',
            },
            {
              id: 'E345',
              label: 'Equipment 345',
              status: 'critical',
            },
            {
              id: 'E267',
              label: 'Equipment 267',
              status: 'critical',
            },
            {
              id: 'E757',
              label: 'Equipment 757',
              status: 'serious',
            },
          ],
        },
        {
          label: 'Component B',
          children: [
            {
              id: 'E543',
              label: 'Equipment 543',
              status: 'critical',
            },
            {
              id: 'E345',
              label: 'Equipment 345',
              status: 'serious',
            },
            {
              id: 'E653',
              label: 'Equipment 653',
              status: 'critical',
            },
            {
              id: 'E342',
              label: 'Equipment 342',
              status: 'serious',
            },
          ],
        },
        {
          label: 'Component C',
          children: [
            {
              id: 'E364',
              label: 'Equipment 364',
              status: 'critical',
            },
            {
              id: 'E734',
              label: 'Equipment 734',
              status: 'critical',
            },
            {
              id: 'E782',
              label: 'Equipment 782',
              status: 'serious',
            },
            {
              id: 'E433',
              label: 'Equipment 433',
              status: 'serious',
            },
          ],
        },
      ],
    },
    {
      _id: 'facilities',
      label: 'Facilities',
      payload: null,
      children: [
        {
          label: 'Component A',
          children: [
            {
              id: 'E12247',
              label: 'Equipment 12247',
              status: 'serious',
            },
            {
              id: 'E21345',
              label: 'Equipment 21345',
              status: 'critical',
            },
            {
              id: 'E32267',
              label: 'Equipment 32267',
              status: 'serious',
            },
            {
              id: 'E63757',
              label: 'Equipment 63757',
              status: 'critical',
            },
          ],
        },
        {
          label: 'Component B',
          children: [
            {
              id: 'E11543',
              label: 'Equipment 11543',
              status: 'serious',
            },
            {
              id: 'E27345',
              label: 'Equipment 27345',
              status: 'serious',
            },
            {
              id: 'E35653',
              label: 'Equipment 35653',
              status: 'critical',
            },
            {
              id: 'E76342',
              label: 'Equipment 76342',
              status: 'serious',
            },
          ],
        },
        {
          label: 'Component C',
          children: [
            {
              id: 'E10364',
              label: 'Equipment 10364',
              status: 'critical',
            },
            {
              id: 'E23734',
              label: 'Equipment 23734',
              status: 'serious',
            },
            {
              id: 'E46782',
              label: 'Equipment 46782',
              status: 'serious',
            },
            {
              id: 'E91433',
              label: 'Equipment 91433',
              status: 'critical',
            },
          ],
        },
      ],
    },
    {
      _id: 'rf',
      label: 'RF',
      payload: null,
      children: [
        {
          label: 'Black FEP',
          children: [
            {
              id: 'Black F1247',
              label: 'Black FEP 1247',
              status: 'critical',
            },
            {
              id: 'Black F2461',
              label: 'Black FEP 2461',
              status: 'critical',
            },
            {
              id: 'Black F3267',
              label: 'Black FEP 3267',
              status: 'serious',
            },
            {
              id: 'Black F6757',
              label: 'Black FEP 6757',
              status: 'critical',
            },
          ],
        },
        {
          label: 'Red FEP',
          children: [
            {
              id: 'Red F1543',
              label: 'Red FEP 1543',
              status: 'serious',
            },
            {
              id: 'Red F3164',
              label: 'Red FEP 3164',
              status: 'serious',
            },
            {
              id: 'Red F3653',
              label: 'Red FEP 3653',
              status: 'critical',
            },
            {
              id: 'Red F7342',
              label: 'Red FEP 7342',
              status: 'serious',
            },
          ],
        },
      ],
    },
  ];
}

export function getOne() {
  return {
    description: loremIpsum(),
    maintenanceJobs: [
      {
        id: '00006',
        type: 1,
        createdTime: 1572141252364,
        startTime: 1572134265725,
        endTime: 1572134912791,
        progressStep: 2,
        description: loremIpsum(),
        technician: 'Ahmet Ducat',
        isFollowing: true,
      },
      {
        id: '00007',
        type: 2,
        createdTime: 1572141252364,
        startTime: 1572144265725,
        endTime: 1572148912791,
        progressStep: 3,
        description: loremIpsum(),
        technician: 'Cristofer Sandoval',
        isFollowing: true,
      },
      {
        id: '00008',
        type: 1,
        createdTime: 1572141252364,
        startTime: 1572134265725,
        endTime: 1572134912791,
        progressStep: 2,
        description: loremIpsum(),
        technician: 'Andie Spatzig',
        isFollowing: true,
      },
      {
        id: '00009',
        type: 2,
        createdTime: 1582141252364,
        startTime: 1582144265725,
        endTime: 1582148912791,
        progressStep: 3,
        description: loremIpsum(),
        technician: 'Ahmet Ducat',
        isFollowing: true,
      },
      {
        id: '00010',
        type: 2,
        createdTime: 1582141252364,
        startTime: 1582144265725,
        endTime: 1582148912791,
        progressStep: 3,
        description: loremIpsum(),
        technician: 'Lara Pazzi',
        isFollowing: true,
      },
    ],
    maintenanceLog: [
      {
        id: '00001',
        type: 1,
        createdTime: 1572141252364,
        startTime: 1572134265725,
        endTime: 1572134912791,
        progressStep: 2,
        description: loremIpsum(),
        technician: 'Ahmet Ducat',
        isFollowing: true,
      },
      {
        id: '00002',
        type: 2,
        createdTime: 1572141252364,
        startTime: 1572144265725,
        endTime: 1572148912791,
        progressStep: 3,
        description: loremIpsum(),
        technician: 'Ahmet Ducat',
        isFollowing: true,
      },
      {
        id: '00003',
        type: 1,
        createdTime: 1572141252364,
        startTime: 1572134265725,
        endTime: 1572134912791,
        progressStep: 2,
        description: loremIpsum(),
        technician: 'Cristofer Sandoval',
        isFollowing: true,
      },
      {
        id: '00004',
        type: 2,
        createdTime: 1572141252364,
        startTime: 1572144265725,
        endTime: 1572148912791,
        progressStep: 3,
        description: loremIpsum(),
        technician: 'Lara Pazzi',
        isFollowing: true,
      },
      {
        id: '00005',
        type: 2,
        createdTime: 1572141252364,
        startTime: 1572144265725,
        endTime: 1572148912791,
        progressStep: 3,
        description: loremIpsum(),
        technician: 'Ahmet Ducat',
        isFollowing: true,
      },
    ],
  };
}

export function genManyEquipment(num, eqPrefix, numDigits) {
  const equipment = [];

  for (let i = 0; i < num; i++) {
    equipment.push(genEquipment(eqPrefix, numDigits));
  }

  return equipment;
}

export function genEquipment(prefix, numDigits) {
  const eNum = uniqueInt(numDigits);

  const equipment = {
    id: `${prefix}${eNum}`,
    label: `${prefix} ${eNum}`,
    status: 'normal',
    events: [],
    alerts: genAlerts(randInt(2, 5), this),
    contacts: [],
    jobs: [
      {
        id: '0001',
      },
    ],
  };

  genFutureAlert(equipment, 1000, 60000);

  return equipment;
}

function genFutureAlert(equipment, minTime, maxTime) {
  setTimeout(() => {
    equipment.alerts.push(genAlert());
    calcEquipmentStatus(equipment);
    // console.log(equipment);
    genFutureAlert(equipment, minTime, maxTime);
  }, randInt(minTime, maxTime));
}

export function calcEquipmentStatus(equipment) {
  const statuses = equipment.alerts.map((alert) => alert.errorSeverity);

  equipment.status = getWorstStatus(statuses);

  return equipment;
}
