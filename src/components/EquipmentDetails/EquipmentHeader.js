import { RuxLog, RuxSegmentedButton, RuxStatus } from '@astrouxds/react';
import './EquipmentHeader.scss';
import { useEffect, useState } from 'react';

const EquipmentHeader = ({ equipment }) => {
  const [events, setEvents] = useState(equipment.data.events.data);

  const onChange = (newEvents) => {
    setEvents([...newEvents]);
  };

  useEffect(() => {
    equipment.data.events.startGeneration(0, 10000);
    equipment.data.events.onChange(onChange);

    return () => {
      equipment.data.events.stopGeneration();
      equipment.data.events.removeOnChange(onChange);
    };
  }, [equipment]);

  return (
    <>
      <div className="Equipment-header">
        <p className="Equipment-header__equipment-name">
          <RuxStatus className="rux-status" status={equipment.data.status} />
          {equipment.data.label}
        </p>
        <div className="Equipment-header__parent">
          <div className="Equipment-header__buttons-container">
            <RuxSegmentedButton
              data={[
                {
                  label: 'Online',
                  selected: true,
                },
                {
                  label: 'Offline',
                },
              ]}
              data-test="online-offline"
            />
            <RuxSegmentedButton
              data={[
                {
                  label: 'Considered',
                  selected: true,
                },
                {
                  label: 'Deconsidered',
                },
              ]}
              data-test="considered-deconsidered"
            />
          </div>
          <div className="Equipment-header__description-container">
            <p className="Equipment-header__description-label">Description</p>
            <div className="Equipment-header__description">
              {equipment.data.description}
            </div>
          </div>
          <div className="Equipment-header__events-container">
            <div className="Equipment-header__description-label">Event Log</div>
            <RuxLog
              className="Equipment-header__event-log"
              data={events}
            ></RuxLog>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentHeader;
