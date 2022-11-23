import { loremIpsum, randIntDigits } from '../util/util';
import { AlertsService } from './Alerts';
import { getWorstStatus } from '../util/util';
import { Service } from './Service';
import { ContactsService } from './Contacts';

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

export class EquipmentService extends Service {
  static equipmentId = 1;

  constructor(prefix, numDigits) {
    super();

    const eNum = randIntDigits(numDigits);

    this.data = {
      id: EquipmentService.equipmentId++,
      label: `${prefix} ${eNum}`,
      status: 'normal',
      events: [],
      contacts: new ContactsService(),
      jobs: [
        {
          id: '0001',
        },
      ],
    };

    const alerts = new AlertsService(this.data);
    this.data.alerts = alerts;
    alerts.onChange(() => {
      this.calcEquipmentStatus(this.data);
      this.notifyChange();
    });
    this.calcEquipmentStatus(this.data);
  }

  calcEquipmentStatus() {
    const statuses = this.data.alerts.data.map((alert) => alert.errorSeverity);
    this.data.status = getWorstStatus(statuses);
    return this.data.status;
  }
}
