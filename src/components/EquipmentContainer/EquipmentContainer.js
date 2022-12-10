import {
  RuxTabs,
  RuxTab,
  RuxTabPanels,
  RuxTabPanel,
  RuxMonitoringIcon,
  RuxIcon,
} from '@astrouxds/react';
import './EquipmentContainer.scss';
import EquipmentMaintenance from '../EquipmentMaintenance/EquipmentMaintenance';
import EquipmentDetails from '../EquipmentDetails/EquipmentDetails';
import { useEffect, useRef } from 'react';

let selectedTabId;

const EquipmentContainer = ({
  data,
  changeView,
  setCurrentJob,
  currentEq,
  selectEquip,
  openEqs,
  removeTab,
}) => {
  let formattedData = [];
  let tabRefs = useRef([]);

  useEffect(() => {
    if (!currentEq) {
      tabRefs.current['inoperable'].click();
      return;
    }

    // eslint-disable-next-line eqeqeq
    if (selectedTabId != currentEq.data.id) {
      if (tabRefs.current[currentEq.data.id]) {
        tabRefs.current[currentEq.data.id].click();
      }
    }
  }, [currentEq, openEqs]);

  function onTabSelect(e) {
    selectedTabId = e.detail.getAttribute('data-key');
    const eq = openEqs.find((openEq) => {
      // eslint-disable-next-line eqeqeq
      return openEq.data.id == e.detail.getAttribute('data-key');
    });
    selectEquip(eq);
  }

  // gather equipment from category components
  for (const category of data.categories) {
    let equipObject = {};
    equipObject.id = category.label;
    equipObject.label = category.label;
    equipObject.icon = category.icon;
    equipObject.children = [];

    for (const component of category.components) {
      for (const equipment of component.equipment) {
        equipObject.children.push(equipment);
      }
    }

    formattedData.push(equipObject);
  }

  return (
    <div className="equipment-container" data-test="equipment-container">
      <RuxTabs id="tab-set-id-1" small onRuxselected={onTabSelect}>
        <RuxTab
          id="tab-inoperable"
          data-test="tab-inoperable"
          ref={(el) => (tabRefs.current['inoperable'] = el)}
          data-key="inoperable"
        >
          Inoperable
        </RuxTab>
        {openEqs.map((openEq) => (
          <RuxTab
            id={`tab-id-${openEq.data.id}`}
            data-test={`tab-id-${openEq.data.id}`}
            key={openEq.data.id}
            data-key={openEq.data.id}
            ref={(el) => (tabRefs.current[openEq.data.id] = el)}
          >
            {openEq.data.label}
            <RuxIcon
              icon="close"
              size="small"
              onClick={() => removeTab(openEq)}
            ></RuxIcon>
          </RuxTab>
        ))}
      </RuxTabs>

      <RuxTabPanels className="tab-panels" aria-labelledby="tab-set-id-1">
        <RuxTabPanel
          className="tab-inoperable"
          aria-labelledby="tab-inoperable"
          data-test="panel-inoperable"
        >
          <h2>Inoperable Equipment</h2>
          <div className="equipment-inoperable">
            {formattedData.length > 0 ? (
              <div>
                {formattedData.map((equipmentList) => {
                  return (
                    <div
                      key={equipmentList.id}
                      className={`equipment-${equipmentList.label.toLowerCase()}`}
                    >
                      <h3>
                        {equipmentList.label} ({equipmentList.children.length})
                      </h3>
                      <ul className="equipment-list">
                        {equipmentList.children.map((equipment) => {
                          return (
                            <li key={equipment.data.id}>
                              <RuxMonitoringIcon
                                icon={equipmentList.icon}
                                className={equipment.data.status}
                                status={equipment.data.status}
                                label={equipment.data.label}
                                onClick={() => {
                                  selectEquip(equipment);
                                }}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>No Equipment found.</p>
            )}
          </div>
        </RuxTabPanel>
        {openEqs.map((openEq) => (
          <RuxTabPanel
            key={openEq.data.id}
            aria-labelledby={`tab-id-${openEq.data.id}`}
            data-test={`panel-id-${openEq.data.id}`}
          >
            <EquipmentDetails equipment={openEq} />
            <EquipmentMaintenance
              changeView={changeView}
              setCurrentJob={setCurrentJob}
              equipment={openEq}
            />
          </RuxTabPanel>
        ))}
      </RuxTabPanels>
    </div>
  );
};

export default EquipmentContainer;
