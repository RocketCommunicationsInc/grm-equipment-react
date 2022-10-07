import { randInt } from '../util/util';
import { DataService } from './Data';
import { Service } from './Service';

export class AlertsService extends Service {
  static alerts = [
    {
      errorSeverity: 'caution',
      errorCategory: 'software',
      errorMessage: 'Red FEP 121 - Offline',
      longMessage: 'Red FEP 121 is offline at 18:37:45',
      errorTime: 1572134265725,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'critical',
      errorCategory: 'spacecraft',
      errorMessage: 'USA-168 - Power degradation',
      longMessage: 'USA-168 suffered power degradation at 18:37:54',
      errorTime: 1572134274738,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'critical',
      errorCategory: 'software',
      errorMessage: 'Black FEP 121 - Degraded',
      longMessage: 'Black FEP 121 is degraded at 18:37:57',
      errorTime: 1572134277742,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'caution',
      errorCategory: 'spacecraft',
      errorMessage: 'USA-150 - Solar panel misalignment',
      longMessage: 'USA-150 experienced solar panel misalignment at 18:38:00',
      errorTime: 1572134280747,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'critical',
      errorCategory: 'hardware',
      errorMessage: 'Antenna DGS 1 - Offline',
      longMessage: 'Antenna DGS 1 went offline at 18:38:09',
      errorTime: 1572134289757,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'serious',
      errorCategory: 'software',
      errorMessage: 'Red FEP 201 - Degraded',
      longMessage: 'Red FEP 201 is degraded at 18:38:16',
      errorTime: 1572134296767,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'caution',
      errorCategory: 'software',
      errorMessage: 'Red FEP 301 - Degraded',
      longMessage: 'Red FEP 301 is degraded at 18:38:17',
      errorTime: 1572134297768,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'serious',
      errorCategory: 'hardware',
      errorMessage: 'Antenna DGS 2 - Offline',
      longMessage: 'Antenna DGS 2 went offline at 18:38:23',
      errorTime: 1572134303776,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'serious',
      errorCategory: 'hardware',
      errorMessage: 'Workstation 134 - Offline',
      longMessage: 'Workstation 134 is offline at 18:38:24',
      errorTime: 1572134304777,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'critical',
      errorCategory: 'software',
      errorMessage: 'Black FEP 121 - Offline',
      longMessage: 'Black FEP 121 is offline at 18:38:27',
      errorTime: 1572134307782,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'critical',
      errorCategory: 'spacecraft',
      errorMessage: 'USA-177 - Solar panel misalignment',
      longMessage: 'USA-177 experienced solar panel misalignment at 18:38:32',
      errorTime: 1572134312791,
      selected: false,
      new: false,
      expanded: false,
    },
    {
      errorSeverity: 'critical',
      errorCategory: 'hardware',
      errorMessage: 'Antenna DGS 2 - Weak signal',
      longMessage: 'Antenna DGS 2 has weak signal at 18:38:37',
      errorTime: 1572134317799,
      selected: false,
      new: false,
      expanded: false,
    },
  ];
  static uniqueAlertId = 1;
  data = [];
  constructor() {
    super();
    // this.data = this.genAlerts(randInt(2, 3));
    if (!DataService.isStatic) {
      this.genFutureAlert(10000, 60000);
    }
  }

  genAlert() {
    const blueprint =
      AlertsService.alerts[randInt(0, AlertsService.alerts.length - 1)];
    const alert = { ...blueprint };
    alert.errorId = AlertsService.uniqueAlertId++;
    return alert;
  }

  genAlerts(num) {
    let alerts = [];
    for (let i = 0; i < num; i++) {
      alerts.push(this.genAlert());
    }
    return alerts;
  }

  getAll() {
    return this.data;
  }

  genFutureAlert(minTime, maxTime) {
    setTimeout(() => {
      this.data.push(this.genAlert());
      this.genFutureAlert(minTime, maxTime);
      this.notifyChange();
    }, randInt(minTime, maxTime));
  }

  remove(ids) {
    this.data = this.data.filter((alert) => !ids.includes(alert.errorId));
    this.notifyChange();
  }
}
