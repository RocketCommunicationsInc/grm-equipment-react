import { RuxCheckbox, RuxOption, RuxSelect, RuxStatus } from '@astrouxds/react';
import { formatReadableTime } from '../../util/util';
import './EquipmentAlerts.scss';

const Alert = ({ selected, status, message, category, timestamp }) => {
  return (
    <>
      <li className="alert-log__event alert-log--collapsed">
        <div className="alert-log__event__select">
          <RuxCheckbox className="rux-checkbox" checked={selected} />
        </div>
        <div className="alert-log__event__status">
          <RuxStatus status={status} />
        </div>
        <div className="alert-log__event__message">{message}</div>
        <div className="alert-log__event__category">{category}</div>
        <div className="alert-log__event__timestamp">
          {formatReadableTime(timestamp)}
        </div>
      </li>
      <div className="alert-log__detail">
        <div></div>
      </div>
    </>
  );
};

const alerts = [
  {
    errorId: '6d76630e-e99f-5615-9bd8-331a0fc4b955',
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
    errorId: '20a96646-abbc-5195-9b20-cff2e99f2ada',
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
    errorId: 'e7d304c2-17ef-5426-ac70-4431fa580409',
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
    errorId: '47e8c77b-227e-5606-8718-7fafb67f8f8b',
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
    errorId: '55282589-4b4b-5ac2-b6c9-97b0bf06dfad',
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
    errorId: 'f35ff6e5-ea12-572b-8a27-ecae8b716ae2',
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
    errorId: '5ca28dca-fbd2-5328-9123-7dfa1a5f0ad9',
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
    errorId: '576d94af-206a-5281-a86a-027ee8d13ec3',
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
    errorId: 'de220699-9b65-5eea-ab06-a1eeb5bd5e23',
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
    errorId: 'c9c1060c-03f5-5669-b0d4-c2f89ba9d0e1',
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
    errorId: '53334558-f2ff-5def-89a4-2e1aacda6e3d',
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
    errorId: '9615b023-e556-592f-8358-01775dd125f7',
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

const EquipmentAlerts = () => {
  return (
    <>
      <div className="grid-zone grid-zone--equipment-alerts grid-zone--fixed">
        <div className="grid-zone__label">Alerts</div>
        <div className="grid-zone__content">
          <div className="alert-bin-header">
            <div className="alert-summary">
              <span className="alert-count"> {alerts.length} </span>
              Active Alerts
            </div>

            <div className="alert-filters">
              <div className="alert-filter">
                <label htmlFor="statusFilter">Severity</label>
                <RuxSelect
                  input-id="statusFilter"
                  className="rux-select"
                  required={false}
                  value="all"
                >
                  <RuxOption value="all" label="All" />
                  <RuxOption value="critical" label="Critical" />
                  <RuxOption value="serious" label="Serious" />
                  <RuxOption value="caution" label="Caution" />
                </RuxSelect>
              </div>

              <div className="alert-filter">
                <label htmlFor="categoryFilter">Category</label>
                <RuxSelect
                  input-id="categoryFilter"
                  className="rux-select"
                  required={false}
                  value="all"
                >
                  <RuxOption value="all" label="All" />
                  <RuxOption value="hardware" label="Hardware" />
                  <RuxOption value="software" label="Software" />
                  <RuxOption value="spacecraft" label="Spacecraft" />
                </RuxSelect>
              </div>
            </div>
          </div>
          <div className="alert-log">
            <header className="alert-log-header">
              <div className="alert-log__header-labels">
                <div className="alert-log__event__select">Select All</div>
                <div className="alert-log__event__status"></div>
                <div className="alert-log__event__message">Message</div>
                <div className="alert-log__event__category">Category</div>
                <div className="alert-log__event__timestamp">Time</div>
              </div>
            </header>

            <ol className="alert-log__events">
              {alerts.map((alert) => {
                return (
                  <Alert
                    key={alert.errorId}
                    selected={alert.selected}
                    status={alert.errorSeverity}
                    message={alert.errorMessage}
                    category={alert.errorCategory}
                    timestamp={alert.errorTime}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentAlerts;
