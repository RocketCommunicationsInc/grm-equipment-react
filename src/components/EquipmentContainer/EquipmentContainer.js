import { useEffect, useRef, useState } from 'react';
import {
  RuxTabs,
  RuxTab,
  RuxTabPanels,
  RuxTabPanel,
  RuxMonitoringIcon,
  RuxIcon,
  RuxContainer,
} from '@astrouxds/react';
import { PanelSubContainer } from '../../common/Panel/PanelSubContainer/PanelSubContainer';
import EquipmentMaintenance from '../EquipmentMaintenance/EquipmentMaintenance';
import EquipmentDetails from '../EquipmentDetails/EquipmentDetails';
import './EquipmentContainer.scss';

let selectedTabId;
let lastEq;

const EquipmentContainer = ({
  data,
  changeView,
  setCurrentJob,
  currentEq,
  selectEquip,
}) => {
  let formattedData = [];
  let tabRefs = useRef([]);
  let [openEqs, setOpenEqs] = useState([]);

  useEffect(() => {
    function addTab(eq) {
      setOpenEqs([...openEqs, eq]);
    }

    if (currentEq && !hasTab(currentEq) && openEqs.length >= 5) {
      alert(
        'This demo constrains the number of tabs to 5. This is not a recommended UX pattern.'
      );
      selectEquip(lastEq);
      return;
    }

    if (currentEq && !hasTab(currentEq)) {
      addTab(currentEq);
    }

    if (!currentEq) {
      tabRefs.current['inoperable'].click();
      return;
    }

    // eslint-disable-next-line eqeqeq
    if (selectedTabId != currentEq.data.id) {
      if (tabRefs.current[currentEq.data.id]) {
        // adding a 100ms delay to allow rux-tabs to initialize
        setTimeout(() => {
          tabRefs.current[currentEq.data.id].click();
        }, 100);
      }
    }

    lastEq = currentEq;
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEq, openEqs]);

  function onTabSelect(e) {
    selectedTabId = e.detail.getAttribute('data-key');
    const eq = openEqs.find((openEq) => {
      // eslint-disable-next-line eqeqeq
      return openEq.data.id == e.detail.getAttribute('data-key');
    });
    selectEquip(eq);
  }
  function hasTab(eq) {
    return openEqs.includes(eq);
  }

  function removeTab(eq) {
    if (hasTab(eq)) {
      openEqs.splice(openEqs.indexOf(eq), 1);
      setOpenEqs([...openEqs]);
    }
    selectEquip(null);
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
    <div className='Equipment-container' data-test='equipment-container'>
      <RuxTabs id='tab-set-id-1' small onRuxselected={onTabSelect}>
        <RuxTab
          id='tab-inoperable'
          data-test='tab-inoperable'
          ref={(el) => (tabRefs.current['inoperable'] = el)}
          data-key='inoperable'
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
              icon='close'
              size='small'
              onClick={() => removeTab(openEq)}
            ></RuxIcon>
          </RuxTab>
        ))}
      </RuxTabs>

      <RuxTabPanels
        className='Equipment-container__tab-panels'
        aria-labelledby='tab-set-id-1'
      >
        <RuxTabPanel
          className='Equipment-container__tab-inoperable'
          aria-labelledby='tab-inoperable'
          data-test='panel-inoperable'
        >
          <RuxContainer className='Equipment-container__equipment-inoperable'>
            <header slot='header'>Inoperable Equipment</header>

            {formattedData.length > 0 ? (
              formattedData.map((equipmentList, upperIndex) => (
                <PanelSubContainer
                  key={equipmentList.id}
                  heading={`${equipmentList.label} ${equipmentList.children.length}`}
                >
                  <ul className='Equipment-container__equipment-list'>
                    {equipmentList.children.map((equipment, index) => (
                      <li
                        key={equipment.data.id}
                        onClick={() => selectEquip(equipment)}
                      >
                        <RuxMonitoringIcon
                          data-test={`equipment-${upperIndex}-${index}`}
                          icon={equipmentList.icon}
                          className={equipment.data.status}
                          status={equipment.data.status}
                          label={equipment.data.label}
                        />
                      </li>
                    ))}
                  </ul>
                </PanelSubContainer>
              ))
            ) : (
              <p>No Equipment found.</p>
            )}
          </RuxContainer>
        </RuxTabPanel>
        {openEqs.map((openEq) => (
          <RuxTabPanel
            className='Equipment-container__equipment-details'
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
