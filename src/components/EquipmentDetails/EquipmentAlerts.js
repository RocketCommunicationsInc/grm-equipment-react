import { useState } from 'react';
import classNames from 'classnames';
import {
  RuxButton,
  RuxCheckbox,
  RuxOption,
  RuxSelect,
  RuxStatus,
} from '@astrouxds/react';
import { getAll } from '../../services/alerts';
import { formatReadableTime } from '../../util/util';
import './EquipmentAlerts.scss';

const Alert = ({
  selected,
  expanded,
  status,
  message,
  category,
  timestamp,
  details,
}) => {
  const [expand, setExpand] = useState(expanded);
  return (
    <>
      <li
        className={classNames('alert-log__event', {
          'alert-log--collapsed': !expand,
          'alert-log--expanded': expand,
        })}
        onClick={() => setExpand(!expand)}
      >
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
        <div>{details}</div>
      </div>
    </>
  );
};

const alerts = getAll() || [];

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
                    expanded={alert.expanded}
                    status={alert.errorSeverity}
                    message={alert.errorMessage}
                    category={alert.errorCategory}
                    timestamp={alert.errorTime}
                    details={alert.longMessage}
                  />
                );
              })}
            </ol>
            <div className="alert-log__actions">
              <RuxButton
                className="rux-button"
                onClick={() => {
                  alert('This feature is not implemented, yet.');
                }}
              >
                Dismiss
              </RuxButton>
              <RuxButton
                className="rux-button"
                onClick={() => {
                  alert('This feature is not implemented, yet.');
                }}
              >
                Acknowledge
              </RuxButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentAlerts;
