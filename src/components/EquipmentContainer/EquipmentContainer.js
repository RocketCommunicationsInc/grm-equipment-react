import {
  RuxTabs,
  RuxTab,
  RuxTabPanels,
  RuxTabPanel,
  RuxMonitoringIcon,
} from '@astrouxds/react';
import './EquipmentContainer.scss';
import EquipmentMaintenance from '../EquipmentMaintenance/EquipmentMaintenance';
import EquipmentDetails from '../EquipmentDetails/EquipmentDetails';
import { DataContext } from '../../DataContext';
import { useContext } from 'react';

const EquipmentContainer = (props) => {
  let equipmentData = useContext(DataContext).data;
  let formattedData = [];

  for (const category of equipmentData.categories) {
    let equipObject = {};
    equipObject.id = category.label;
    equipObject.label = category.label;
    equipObject.icon = category.icon;
    equipObject.children = [];

    for (const categoryChildren of category.children) {
      for (const equipment of categoryChildren.children) {
        equipObject.children.push(equipment);
      }
    }

    formattedData.push(equipObject);
  }

  return (
    <div className="equipment-container" data-test="equipment-container">
      <RuxTabs id="equipment-container-tabs" small>
        <RuxTab id="tab-inoperable" data-test="tab-inoperable">
          Inoperable
        </RuxTab>
        <RuxTab id="tab-id-2" data-test="tab-id-2">
          Test
        </RuxTab>
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
                            <li key={equipment.id}>
                              <RuxMonitoringIcon
                                icon={equipmentList.icon}
                                className={equipment.status}
                                status={equipment.status}
                                label={equipment.label}
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
          <EquipmentMaintenance />
        </RuxTabPanel>
      </RuxTabPanels>
    </div>
  );
};

export default EquipmentContainer;
