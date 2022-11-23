import { useEffect, useState } from 'react';
import classNames from 'classnames';
import {
  RuxButton,
  RuxCheckbox,
  RuxOption,
  RuxSelect,
  RuxStatus,
} from '@astrouxds/react';
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
  onChange,
}) => {
  const [expand, setExpand] = useState(expanded);

  const handleChange = (e) => {
    onChange(e.target.checked);
  };

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
          <RuxCheckbox className="rux-checkbox" onRuxchange={handleChange} />
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

const EquipmentAlerts = (props) => {
  const [alerts, setAlerts] = useState(props.alerts.data || []);
  // eslint-disable-next-line no-unused-vars
  const [alertsService, setAlertsService] = useState(props.alerts);
  const [selectedAll, setSelectedAll] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    status: 'all',
    category: 'all',
  });

  /* Upon switching a filter to "Critical", "Caution", etc, the previously enabled "Select All"
  state should be disabled */
  function switchFilterAndUnselectAll(activeFilterSettings) {
    setActiveFilters({
      status: activeFilterSettings.status,
      category: activeFilterSettings.category,
    });

    if (selectedAll) {
      // If all alerts are selected before filter applied, deselect/toggle the selections.
      selectAll();
    }
  }

  function alertsSelected() {
    return alerts.filter((alert) => alert.selected).length > 0;
  }

  const [buttonsEnabled, setButtonsEnabled] = useState(alertsSelected());

  function enableButtons() {
    return setButtonsEnabled(alertsSelected());
  }

  function filteredByStatusAndCategory() {
    return alerts.filter(
      (alert) =>
        (alert.errorSeverity === activeFilters.status ||
          activeFilters.status === 'all') &&
        (alert.errorCategory === activeFilters.category ||
          activeFilters.category === 'all')
    );
  }

  function selectAll() {
    let i = 0;
    const alertCheckboxes = document.getElementsByClassName('rux-checkbox');

    for (i = 0; i < alertCheckboxes.length; i++) {
      alertCheckboxes[i].checked = !selectedAll;
      alerts[i].selected = !selectedAll;
    }

    setSelectedAll(!selectedAll);
    setAlerts(alerts);
    enableButtons();
  }

  function dismissAlerts() {
    const ids = [];
    alerts.forEach((alert) => {
      if (alert.selected) {
        ids.push(alert.errorId);
      }
    });

    alertsService.remove(ids);
    setButtonsEnabled(false);
  }

  useEffect(() => {
    function onAlertsChange(newAlerts) {
      setAlerts([...newAlerts]);
    }

    alertsService.onChange(onAlertsChange);

    return () => {
      alertsService.removeOnChange(onAlertsChange);
    };
  }, [alertsService]);

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
                  onRuxchange={(e) =>
                    switchFilterAndUnselectAll({
                      status: e.target.value,
                      category: activeFilters.category,
                    })
                  }
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
                  onRuxchange={(e) =>
                    switchFilterAndUnselectAll({
                      status: activeFilters.status,
                      category: e.target.value,
                    })
                  }
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
                <div
                  onClick={() => selectAll()}
                  className="alert-log__event__select"
                >
                  {selectedAll ? 'Select None' : 'Select All'}
                </div>
                <div className="alert-log__event__status"></div>
                <div className="alert-log__event__message">Message</div>
                <div className="alert-log__event__category">Category</div>
                <div className="alert-log__event__timestamp">Time</div>
              </div>
            </header>

            <ol className="alert-log__events">
              {alerts.length > 0 ? (
                filteredByStatusAndCategory().map((alert) => {
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
                      onChange={(selected) => {
                        alert.selected = selected;
                        enableButtons();
                      }}
                    />
                  );
                })
              ) : (
                <div>No new alerts. Please wait for more.</div>
              )}
            </ol>
            <div className="alert-log__actions">
              <RuxButton
                className="rux-button"
                disabled={!buttonsEnabled}
                onClick={() => dismissAlerts()}
              >
                Dismiss
              </RuxButton>
              <RuxButton
                className="rux-button"
                disabled={!buttonsEnabled}
                onClick={() => dismissAlerts()}
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
