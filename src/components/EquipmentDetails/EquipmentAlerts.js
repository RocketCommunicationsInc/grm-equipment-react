import { RuxCheckbox, RuxOption, RuxSelect, RuxStatus } from '@astrouxds/react';
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
        <div className="alert-log__event__timestamp">{timestamp}</div>
      </li>
      <div className="alert-log__detail">
        <div></div>
      </div>
    </>
  );
};

const EquipmentAlerts = () => {
  return (
    <>
      <div className="grid-zone grid-zone--equipment-alerts grid-zone--fixed">
        <div className="grid-zone__label">Alerts</div>
        <div className="grid-zone__content">
          <div className="alert-bin-header">
            <div className="alert-summary">
              <span className="alert-count"> 12 </span> Active Alerts
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
              <Alert
                selected={true}
                status="critical"
                message="Antenna DGS 2 - Weak signal"
                category="Hardware"
                timestamp="17:58:37"
              />
              <Alert
                selected={false}
                status="critical"
                message="USA-177 - Solar panel misalignment"
                category="Spacecraft"
                timestamp="17:58:32"
              />
              <Alert
                selected={false}
                status="critical"
                message="Black FEP 121 - Offline"
                category="Software"
                timestamp="17:58:28"
              />
              <Alert
                selected={false}
                status="serious"
                message="Workstation 134 - Offline"
                category="Hardware"
                timestamp="17:58:17"
              />
              <Alert
                selected={false}
                status="serious"
                message="Antenna DGS 2 - Offline"
                category="Hardware"
                timestamp="17:58:12"
              />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentAlerts;
