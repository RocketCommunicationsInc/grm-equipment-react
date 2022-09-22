import {
  RuxClock,
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
  RuxPopUpMenu,
  RuxMenuItem,
  RuxMenuItemDivider,
  RuxIcon,
} from '@astrouxds/react';
import './GlobalStatusBar.scss';
import { getAll } from '../../services/log';
import { useEffect, useState } from 'react';

const GlobalStatusBar = () => {
  const [data, setData] = useState(getAll());

  useEffect(() => {
    const dataInterval = setInterval(() => {
      setData(getAll());
    }, 5000);
    return () => clearInterval(dataInterval);
  }, []);

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
        data-test="global-status-bar"
      >
        <div slot="left-side">
          <RuxIcon
            className="global-status-menu-icon"
            icon="apps"
            aria-controls="grm-popup-menu"
            data-test="global-status-menu-btn"
          ></RuxIcon>
        </div>
        <RuxClock />
        <div className="status-indicators" slot="right-side">
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna"
            label="RF"
            status={data.rfStatus.worstStatus}
            notifications={data.rfStatus.numMessages}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="processor-alt"
            label="Digital"
            status={data.digitalStatus.worstStatus}
            notifications={data.digitalStatus.numMessages}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna-transmit"
            label="Comms"
            status={data.commsStatus.worstStatus}
            notifications={data.commsStatus.numMessages}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna-receive"
            label="Facilities"
            status={data.facilitiesStatus.worstStatus}
            notifications={data.facilitiesStatus.numMessages}
          />
        </div>
      </RuxGlobalStatusBar>
      <RuxPopUpMenu id="grm-popup-menu" data-test="global-status-menu">
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
