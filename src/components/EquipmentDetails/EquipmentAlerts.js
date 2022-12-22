import { useEffect, useState, useCallback } from 'react';
import { RuxButton, RuxOption, RuxSelect } from '@astrouxds/react';
import './EquipmentAlerts.scss';
import EquipmentAlert from './EquipmentAlert';

const EquipmentAlerts = ({ alertsService }) => {
  const [alerts, setAlerts] = useState(alertsService.data || []);
  const [filteredAlerts, setFilteredAlerts] = useState(
    alertsService.data || []
  );
  const [filters, setFilters] = useState({
    status: 'all',
    category: 'all',
  });
  const [buttonsEnabled, setButtonsEnabled] = useState(evalAnySelected());

  function switchFilters({ status, category }) {
    setFilters({
      status,
      category,
    });
    evalButtons();
  }

  const runFilters = useCallback(() => {
    setFilteredAlerts(
      alertsService.data.filter((alert) => {
        return (
          (alert.errorSeverity === filters.status ||
            filters.status === 'all') &&
          (alert.errorCategory === filters.category ||
            filters.category === 'all')
        );
      })
    );
  }, [alertsService.data, filters]);

  function evalAnySelected() {
    return filteredAlerts.filter((alert) => {
      return alert.selected;
    }).length;
  }

  function evalAllSelected() {
    return evalAnySelected() === filteredAlerts.length;
  }

  function evalButtons() {
    return setButtonsEnabled(evalAnySelected());
  }

  function toggleSelectFiltered() {
    selectFiltered(!evalAllSelected());
    evalButtons();
  }

  function selectFiltered(selected) {
    filteredAlerts.forEach((alert) => {
      alert.selected = selected;
    });

    setAlerts([...alerts]);
  }

  function selectAll(selected) {
    for (let i = 0; i < alerts.length; i++) {
      alerts[i].selected = selected;
    }

    setAlerts([...alerts]);
  }

  function dismissAlerts() {
    const ids = [];
    filteredAlerts.forEach((alert) => {
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
      runFilters();
    }
    alertsService.onChange(onAlertsChange);

    return () => {
      alertsService.removeOnChange(onAlertsChange);
    };
  }, [alertsService]);

  useEffect(() => {
    runFilters();
  }, [filters, runFilters]);

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
                    switchFilters({
                      status: e.target.value,
                      category: filters.category,
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
                    switchFilters({
                      status: filters.status,
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
                  onClick={() => toggleSelectFiltered()}
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
                filteredAlerts.map((alert) => {
                  return (
                    <EquipmentAlert
                      key={alert.id}
                      alert={alert}
                      onChange={() => {
                        evalButtons();
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
