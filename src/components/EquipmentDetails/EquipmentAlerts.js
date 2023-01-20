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
      <div className='Equipment-alerts'>
        <div className='Equipment-alerts__header-container'>
          <p className='Equipment-alerts__header-title'>Alerts</p>

          <div className='Equipment-alerts__main-header'>
            <div className='Equipment-alerts__summary'>
              <span className='Equipment-alerts__count'> {alerts.length} </span>
              Active Alerts
            </div>

            <div className='Equipment-alerts__filters'>
              <div className='Equipment-alerts__filter'>
                <label htmlFor='statusFilter'>Severity</label>
                <RuxSelect
                  input-id='statusFilter'
                  className='rux-select'
                  required={false}
                  onRuxchange={(e) =>
                    switchFilters({
                      status: e.target.value,
                      category: filters.category,
                    })
                  }
                >
                  <RuxOption value='all' label='All' />
                  <RuxOption value='critical' label='Critical' />
                  <RuxOption value='serious' label='Serious' />
                  <RuxOption value='caution' label='Caution' />
                </RuxSelect>
              </div>

              <div className='Equipment-alerts__filter'>
                <label htmlFor='categoryFilter'>Category</label>
                <RuxSelect
                  input-id='categoryFilter'
                  className='rux-select'
                  required={false}
                  onRuxchange={(e) =>
                    switchFilters({
                      status: filters.status,
                      category: e.target.value,
                    })
                  }
                >
                  <RuxOption value='all' label='All' />
                  <RuxOption value='hardware' label='Hardware' />
                  <RuxOption value='software' label='Software' />
                  <RuxOption value='spacecraft' label='Spacecraft' />
                </RuxSelect>
              </div>
            </div>
          </div>
        </div>
        <div className='Equipment-alerts__log'>
          <header className='Equipment-alerts__log-header'>
            <div className='Equipment-alerts__log-header-labels'>
              <div
                onClick={() => toggleSelectFiltered()}
                className='Equipment-alerts__select-alert'
              >
                {evalAllSelected() ? 'Select None' : 'Select All'}
              </div>
              <div className='Equipment-alerts__log-status'></div>
              <div className='Equipment-alerts__log-message'>Message</div>
              <div className='Equipment-alerts__log-category'>Category</div>
              <div className='Equipment-alerts__log-timestamp'>Time</div>
            </div>
          </header>
          <ol className='Equipment-alerts__events-container'>
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
          <div className='Equipment-alerts__log-actions'>
            <RuxButton
              className='rux-button'
              disabled={!buttonsEnabled}
              onClick={() => dismissAlerts()}
            >
              Dismiss
            </RuxButton>
            <RuxButton
              className='rux-button'
              disabled={!buttonsEnabled}
              onClick={() => dismissAlerts()}
            >
              Acknowledge
            </RuxButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentAlerts;
