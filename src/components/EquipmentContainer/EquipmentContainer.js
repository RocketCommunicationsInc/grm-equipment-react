import {
  RuxTabs,
  RuxTab,
  RuxTabPanels,
  RuxTabPanel,
  RuxMonitoringIcon,
} from '@astrouxds/react';
import { useState } from 'react';
import './EquipmentContainer.scss';
import EquipmentMaintenance from '../EquipmentMaintenance/EquipmentMaintenance';
import EquipmentDetails from '../EquipmentDetails/EquipmentDetails';

const EquipmentContainer = (props) => {
  let equipmentData = props.data;
  let formattedData = [];
  var defaultTabs = [
    {
      id: 'inoperable',
      label: 'Inoperable',
    },
    {
      id: 'id-2',
      label: 'Test',
    },
  ];
  let [tabs, setTabs] = useState(defaultTabs);

  for (const category of equipmentData) {
    let equipObject = {};
    equipObject.label = category.label;
    equipObject.icon = category.icon;
    equipObject.children = [];

    for (const categoryChildren of category.children) {
      for (const equipment of categoryChildren.children) {
        equipObject.children.push(equipment);
      }
    }

    formattedData.push(equipObject);

    var addTab = (e) => {
      e.preventDefault();
      const addTabId = e.target.label;

      let checkTabsToAdd = (element) => element.label === addTabId;
      let checkTabs = tabs.some(checkTabsToAdd);

      if (!checkTabs) {
        let newTab = {
          id: e.target.label,
          label: e.target.label,
        };
        setTabs([...tabs, newTab]);
      }
    };
  }

  return (
    <div className="equipment-container" data-test="equipment-container">
      <RuxTabs id="equipment-container-tabs" small>
        {tabs.map((tab) => {
          return (
            <RuxTab key={tab.id} id={`tab-${tab.id}`} data-test={tab.id}>
              {tab.label}
            </RuxTab>
          );
        })}
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
                      key={equipmentList.label}
                      className={`equipment-${equipmentList.label.toLowerCase()}`}
                    >
                      <h3>
                        {equipmentList.label} ({equipmentList.children.length})
                      </h3>
                      <ul className="equipment-list">
                        {equipmentList.children.map((equipment) => {
                          return (
                            <li key={equipment.id} onClick={addTab}>
                              <RuxMonitoringIcon
                                icon={equipmentList.icon}
                                className={equipment.status}
                                status={equipment.status}
                                label={equipment.id}
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
        <RuxTabPanel aria-labelledby="tab-id-2" data-test="panel-id-2">
          <EquipmentDetails />
          <EquipmentMaintenance
            changeView={props.changeView}
            setCurrentJob={props.setCurrentJob}
          />
        </RuxTabPanel>
      </RuxTabPanels>
    </div>
  );
};

export default EquipmentContainer;
