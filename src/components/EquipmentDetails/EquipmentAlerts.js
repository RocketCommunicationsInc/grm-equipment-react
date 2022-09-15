import { RuxOption, RuxSelect } from '@astrouxds/react';

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
        </div>
      </div>
    </>
  );
};

export default EquipmentAlerts;
