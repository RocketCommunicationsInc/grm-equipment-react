import {
  RuxClock,
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
} from '@astrouxds/react';

const GlobalStatusBar = () => {
  return (
    <>
      <RuxGlobalStatusBar
        include-icon="true"
        app-domain="GRM"
        app-name="Equipment Manager"
        app-version=""
        menu-icon="apps"
        username=""
        app-state-color=""
        app-state=""
      >
        <RuxClock />
        <div className="status-indicators" slot="right-side">
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna"
            label="RF"
            status="critical"
            notifications={23}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="processor-alt"
            label="Digital"
            status="serious"
            notifications={42}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna-transmit"
            label="Comms"
            status="caution"
            notifications={11}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna-receive"
            label="Facilities"
            status="normal"
            notifications={2}
          />
        </div>
      </RuxGlobalStatusBar>
    </>
  );
};

export default GlobalStatusBar;
