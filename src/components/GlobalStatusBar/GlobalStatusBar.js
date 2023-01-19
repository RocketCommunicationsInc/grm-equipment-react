import {
  RuxClock,
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
  RuxPopUp,
  RuxMenuItem,
  RuxMenuItemDivider,
  RuxIcon,
} from '@astrouxds/react';
import './GlobalStatusBar.scss';
import { calcCategoryStatus, getCategoryAlerts } from '../../services/Data';
import { useEffect, useState } from 'react';

const GlobalStatusBar = ({ data }) => {
  const [rfStatus, setRfStatus] = useState('');
  const [rfAlerts, setRfAlerts] = useState(0);
  const [digitalStatus, setDigitalStatus] = useState('');
  const [digitalAlerts, setDigitalAlerts] = useState(0);
  const [commsStatus, setCommsStatus] = useState('');
  const [commsAlerts, setCommsAlerts] = useState(0);
  const [facilitiesStatus, setFacilitiesStatus] = useState('');
  const [facilitiesAlerts, setFacilitiesAlerts] = useState(0);

  useEffect(() => {
    if (data) {
      setRfStatus(calcCategoryStatus(data.categories[3]));
      setRfAlerts(getCategoryAlerts(data.categories[3]).length);
      setDigitalStatus(calcCategoryStatus(data.categories[2]));
      setDigitalAlerts(getCategoryAlerts(data.categories[2]).length);
      setCommsStatus(calcCategoryStatus(data.categories[1]));
      setCommsAlerts(getCategoryAlerts(data.categories[1]).length);
      setFacilitiesStatus(calcCategoryStatus(data.categories[0]));
      setFacilitiesAlerts(getCategoryAlerts(data.categories[0]).length);
    }
  }, [data]);

  return (
    <>
      <RuxGlobalStatusBar
        include-icon='true'
        app-domain='GRM'
        app-name='Equipment Manager'
        app-version=''
        username='J. Smith'
        app-state-color=''
        app-state=''
        data-test='global-status-bar'
      >
        <div slot='left-side'>
          <RuxPopUp
            id='grm-popup-menu'
            data-test='global-status-menu'
            placement='bottom-start'
          >
            <RuxIcon
              className='global-status-menu-icon'
              icon='apps'
              aria-controls='grm-popup-menu'
              data-test='global-status-menu-btn'
              slot='trigger'
            />
            <RuxMenuItem>GRM Dashboard</RuxMenuItem>
            <RuxMenuItem>GRM Equipment Manager</RuxMenuItem>
            <RuxMenuItem>GRM Schedule</RuxMenuItem>
            <RuxMenuItemDivider></RuxMenuItemDivider>
            <RuxMenuItem>Preferences...</RuxMenuItem>
            <RuxMenuItem>Sign Out...</RuxMenuItem>
          </RuxPopUp>
        </div>
        <RuxClock />
        <div className='status-indicators' slot='right-side'>
          <RuxMonitoringIcon
            className='status-indicators__indicator'
            icon='antenna'
            label='RF'
            status={rfStatus}
            notifications={rfAlerts}
          />
          <RuxMonitoringIcon
            className='status-indicators__indicator'
            icon='processor-alt'
            label='Digital'
            status={digitalStatus}
            notifications={digitalAlerts}
          />
          <RuxMonitoringIcon
            className='status-indicators__indicator'
            icon='antenna-transmit'
            label='Comms'
            status={commsStatus}
            notifications={commsAlerts}
          />
          <RuxMonitoringIcon
            className='status-indicators__indicator'
            icon='antenna-receive'
            label='Facilities'
            status={facilitiesStatus}
            notifications={facilitiesAlerts}
          />
        </div>
      </RuxGlobalStatusBar>
    </>
  );
};

export default GlobalStatusBar;
