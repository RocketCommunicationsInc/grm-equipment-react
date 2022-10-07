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
import { calcCategoryStatus, getCategoryAlerts } from '../../services/Data';
import { useEffect, useState } from 'react';

const GlobalStatusBar = ({ data }) => {
  const [rfStatus, setRfStatus] = useState(
    calcCategoryStatus(data.categories[3])
  );
  const [rfAlerts, setRfAlerts] = useState(
    getCategoryAlerts(data.categories[3]).length
  );

  useEffect(() => {
    setRfStatus(calcCategoryStatus(data.categories[3]));
    setRfAlerts(getCategoryAlerts(data.categories[3]).length);
  }, [data]);

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
            status={rfStatus}
            notifications={rfAlerts}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="processor-alt"
            label="Digital"
            status={calcCategoryStatus(data.categories[2])}
            notifications={getCategoryAlerts(data.categories[2]).length}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna-transmit"
            label="Comms"
            status={calcCategoryStatus(data.categories[1])}
            notifications={getCategoryAlerts(data.categories[1]).length}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna-receive"
            label="Facilities"
            status={calcCategoryStatus(data.categories[0])}
            notifications={getCategoryAlerts(data.categories[0]).length}
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
