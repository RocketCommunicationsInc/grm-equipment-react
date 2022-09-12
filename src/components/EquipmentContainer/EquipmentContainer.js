import {
  RuxTabs,
  RuxTab,
  RuxTabPanels,
  RuxTabPanel,
  RuxIcon,
  RuxStatus,
} from '@astrouxds/react';
import './EquipmentContainer.scss';
import EquipmentDetails from '../EquipmentDetails/EquipmentDetails';

const EquipmentContainer = () => {
  return (
    <div className="equipment-container" data-test="equipment-container">
      <RuxTabs id="equipment-container-tabs" small>
        <RuxTab id="tab-inoperable">Inoperable</RuxTab>
        <RuxTab id="tab-id-2">Test</RuxTab>
      </RuxTabs>
      <RuxTabPanels className="tab-panels" aria-labelledby="tab-set-id-1">
        <RuxTabPanel
          className="tab-inoperable"
          aria-labelledby="tab-inoperable"
        >
          <h2>Inoperable Equipment</h2>
          <div className="equipment-inoperable">
            <div className="equipment-comms">
              <h3>Comms (16)</h3>
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
            <div className="equipment-digital">
              <h3>Digital (12)</h3>
              <ul>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 247</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 267</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 342</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 345</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 346</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 364</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 433</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 543</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 653</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 734</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 757</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="processor-alt"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 782</p>
                </li>
              </ul>
            </div>
            <div className="equipment-facilities">
              <h3>Facilities (12)</h3>
              <ul>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 10364</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 11543</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 12247</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 21345</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 23734</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 27345</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 32267</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 35653</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 46782</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 63757</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 76342</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="antenna-off"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Equipment 91433</p>
                </li>
              </ul>
            </div>
            <div className="equipment-rf">
              <h3>RF (8)</h3>
              <ul>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="antenna"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Black FEP 1247</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="antenna"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Black FEP 2461</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Black FEP 3267</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="antenna"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Black FEP 6757</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Black FEP 1543</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Black FEP 3164</p>
                </li>
                <li>
                  <RuxStatus status="critical"></RuxStatus>
                  <RuxIcon
                    icon="antenna"
                    className="critical"
                    size="large"
                  ></RuxIcon>
                  <p>Black FEP 3653</p>
                </li>
                <li>
                  <RuxStatus status="serious"></RuxStatus>
                  <RuxIcon
                    icon="antenna"
                    className="serious"
                    size="large"
                  ></RuxIcon>
                  <p>Black FEP 7342</p>
                </li>
              </ul>
            </div>
          </div>
        </RuxTabPanel>
        <RuxTabPanel aria-labelledby="tab-id-2">
          <EquipmentDetails />
        </RuxTabPanel>
      </RuxTabPanels>
    </div>
  );
};

export default EquipmentContainer;
