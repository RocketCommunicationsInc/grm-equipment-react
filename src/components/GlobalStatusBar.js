import {
  RuxClock,
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
  RuxPopUpMenu,
  RuxMenuItem,
  RuxMenuItemDivider,
  RuxIcon,
} from '@astrouxds/react';

const GlobalStatusBar = () => {
  return (
    <>
      <RuxGlobalStatusBar
        include-icon="true"
        app-domain="GRM"
        app-name="Equipment Manager"
        app-version=""
        username="J. Smith"
        app-state-color=""
        app-state=""
      >
        <div slot="left-side">
          <RuxIcon icon="apps" aria-controls="grm-popup-menu"></RuxIcon>
        </div>
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
      <RuxPopUpMenu id="grm-popup-menu">
        <RuxMenuItem>GRM Dashboard</RuxMenuItem>
        <RuxMenuItem>GRM Equipment Manager</RuxMenuItem>
        <RuxMenuItem>GRM Schedule</RuxMenuItem>
        <RuxMenuItemDivider></RuxMenuItemDivider>
        <RuxMenuItem>Preferences...</RuxMenuItem>
        <RuxMenuItem>Sign Out...</RuxMenuItem>
      </RuxPopUpMenu>
    </>
  );
};

export default GlobalStatusBar;
