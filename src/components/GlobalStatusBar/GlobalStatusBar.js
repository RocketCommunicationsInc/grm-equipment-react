import {
  RuxClock,
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
  RuxPopUpMenu,
  RuxMenuItem,
  RuxMenuItemDivider,
  RuxIcon,
  RuxButton,
} from '@astrouxds/react';
import './GlobalStatusBar.scss';
import { getAll } from '../../services/log';
import { useEffect, useState, useContext } from 'react';
import { calcCategoryStatus, getCategoryAlerts } from '../../services/data';
import { DataContext } from '../../DataContext';

const GlobalStatusBar = ({ data, num }) => {
  // const [data, setData] = useState(getAll());
  const dataContext = useContext(DataContext);

  console.log(dataContext);

  // useEffect(() => {

  // }, [data]);

  function changeNum() {
    console.log(num);
    num++;
  }

  console.log(data);

  return (
    <>
      <RuxButton className="rux-button" onClick={dataContext.setData}>
        Child
      </RuxButton>
      <p>{num}</p>
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
            status={calcCategoryStatus(dataContext.data[3])}
            notifications={getCategoryAlerts(dataContext.data[3]).length}
          />
          {/* <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="processor-alt"
            label="Digital"
            status={calcCategoryStatus(data[2])}
            notifications={getCategoryAlerts(data[2]).length}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna-transmit"
            label="Comms"
            status={calcCategoryStatus(data[1])}
            notifications={getCategoryAlerts(data[1]).length}
          />
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            icon="antenna-receive"
            label="Facilities"
            status={calcCategoryStatus(data[0])}
            notifications={getCategoryAlerts(data[0]).length}
          /> */}
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
