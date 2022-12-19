import { useEffect, useState } from 'react';
import { RuxButton, RuxOption, RuxSelect } from '@astrouxds/react';
import './EquipmentAlerts.scss';
import EquipmentAlert from './EquipmentAlert';

const EquipmentAlerts = (props) => {
  const [alerts, setAlerts] = useState(props.alerts.data || []);
  // eslint-disable-next-line no-unused-vars
  const [alertsService, setAlertsService] = useState(props.alerts);
  const [activeFilters, setActiveFilters] = useState({
    status: 'all',
    category: 'all',
  });
  const [buttonsEnabled, setButtonsEnabled] = useState(evalAnySelected());

  /* Upon switching a filter to "Critical", "Caution", etc, the previously enabled "Select All"
  state should be disabled */
  function switchFilterAndUnselectAll(activeFilterSettings) {
    setActiveFilters({
      status: activeFilterSettings.status,
      category: activeFilterSettings.category,
    });

    setSelectAll(false);
  }

  function evalAnySelected() {
    return alerts.filter((alert) => {
      return alert.selected;
    }).length;
  }

  function evalAllSelected() {
    return evalAnySelected() === alerts.length;
  }

  function evalButtons() {
    return setButtonsEnabled(evalAnySelected());
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

  function toggleSelectAll() {
    setSelectAll(!evalAllSelected());
  }

  function setSelectAll(selected) {
    for (let i = 0; i < alerts.length; i++) {
      alerts[i].selected = selected;
    }

    setAlerts([...alerts]);
  }

  function dismissAlerts() {
    const ids = [];
    alerts.forEach((alert) => {
      if (alert.selected) {
        ids.push(alert.id);
      }
    });

    alertsService.removeItemsById(ids);
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
                  onClick={() => toggleSelectAll()}
                  className="alert-log__event__select"
                >
                  {evalAllSelected() ? 'Select None' : 'Select All'}
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
                    <div key={alert.id}>
                      <EquipmentAlert
                        key={alert.id}
                        alert={alert}
                        onChange={() => {
                          evalButtons();
                        }}
                      />
                    </div>
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
