import {
  RuxClock,
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
  RuxPopUp,
  RuxMenuItem,
  RuxMenuItemDivider,
  RuxIcon,
} from '@astrouxds/react';

import { useAppContext } from '../../provider/AppProvider';
import './GlobalStatusBar.scss';

const GlobalStatusBar = () => {
  const { state } = useAppContext();

  return (
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
        <RuxPopUp
          id="grm-popup-menu"
          data-test="global-status-menu"
          placement="bottom-start"
        >
          <RuxIcon
            className="global-status-menu-icon"
            icon="apps"
            aria-controls="grm-popup-menu"
            data-test="global-status-menu-btn"
            slot="trigger"
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
      <div className="status-indicators" slot="right-side">
        {state.statusIcons.map((icon) => (
          <RuxMonitoringIcon
            className="status-indicators__indicator"
            key={icon.label}
            icon={icon.icon}
            label={icon.label}
            status={icon.status}
            notifications={icon.notifications}
          />
        ))}
      </div>
    </RuxGlobalStatusBar>
  );
};

export default GlobalStatusBar;
