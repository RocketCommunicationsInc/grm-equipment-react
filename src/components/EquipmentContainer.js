import {
  RuxTabs,
  RuxTab,
  RuxTabPanels,
  RuxTabPanel,
  RuxIcon,
  RuxStatus,
} from '@astrouxds/react';
import '../css/EquipmentContainer.scss';

const EquipmentContainer = () => {
  return (
    <div className="EquipmentContainer">
      <RuxTabs id="EquipmentContainerTabs" small>
        <RuxTab id="tab-inoperable">Inoperable</RuxTab>
        <RuxTab id="tab-id-2">Test</RuxTab>
      </RuxTabs>
      <RuxTabPanels className="tabPanels" aria-labelledby="tab-set-id-1">
        <RuxTabPanel
          className="tab-inoperable"
          aria-labelledby="tab-inoperable"
        >
          <h2>Inoperable Equipment</h2>
          <div className="equipment-inoperable">
            <h3>Comms</h3>
            <ul>
              <li>
                <RuxStatus status="critical"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="critical"
                  size="large"
                ></RuxIcon>
                <p>Equipment 1247</p>
              </li>
              <li>
                <RuxStatus status="serious"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="serious"
                  size="large"
                ></RuxIcon>
                <p>Equipment 1364</p>
              </li>
              <li>
                <RuxStatus status="serious"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="serious"
                  size="large"
                ></RuxIcon>
                <p>Equipment 1543</p>
              </li>
              <li>
                <RuxStatus status="critical"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="critical"
                  size="large"
                ></RuxIcon>
                <p>Equipment 2126</p>
              </li>
              <li>
                <RuxStatus status="critical"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="critical"
                  size="large"
                ></RuxIcon>
                <p>Equipment 2364</p>
              </li>
              <li>
                <RuxStatus status="serious"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="serious"
                  size="large"
                ></RuxIcon>
                <p>Equipment 2375</p>
              </li>
              <li>
                <RuxStatus status="serious"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="serious"
                  size="large"
                ></RuxIcon>
                <p>Equipment 2374</p>
              </li>
              <li>
                <RuxStatus status="critical"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="critical"
                  size="large"
                ></RuxIcon>
                <p>Equipment 3267</p>
              </li>
              <li>
                <RuxStatus status="critical"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="critical"
                  size="large"
                ></RuxIcon>
                <p>Equipment 3653</p>
              </li>
              <li>
                <RuxStatus status="critical"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="critical"
                  size="large"
                ></RuxIcon>
                <p>Equipment 3734</p>
              </li>
              <li>
                <RuxStatus status="serious"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="serious"
                  size="large"
                ></RuxIcon>
                <p>Equipment 4782</p>
              </li>
              <li>
                <RuxStatus status="serious"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="serious"
                  size="large"
                ></RuxIcon>
                <p>Equipment 5782</p>
              </li>
              <li>
                <RuxStatus status="serious"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="serious"
                  size="large"
                ></RuxIcon>
                <p>Equipment 6757</p>
              </li>
              <li>
                <RuxStatus status="serious"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="serious"
                  size="large"
                ></RuxIcon>
                <p>Equipment 7342</p>
              </li>
              <li>
                <RuxStatus status="critical"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="critical"
                  size="large"
                ></RuxIcon>
                <p>Equipment 9433</p>
              </li>
              <li>
                <RuxStatus status="critical"></RuxStatus>
                <RuxIcon
                  icon="antenna-receive"
                  className="critical"
                  size="large"
                ></RuxIcon>
                <p>Equipment 9623</p>
              </li>
            </ul>
          </div>
        </RuxTabPanel>
        <RuxTabPanel aria-labelledby="tab-id-2">Tab 2 HTML content</RuxTabPanel>
      </RuxTabPanels>
    </div>
  );
};

export default EquipmentContainer;
