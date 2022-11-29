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
      <div className="grid-zone grid-zone--fixed grid-zone--equipment-header">
        <div className="grid-zone__content">
          <div className="equipment-name">
            <RuxStatus className="rux-status" status={equipment.data.status} />
            {equipment.data.label}
          </div>
          <div className="equipment-header">
            <div className="equipment-header__detail equipment-header__detail--equipment-states">
              <RuxSegmentedButton
                className="rux-segmented-button"
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
                className="rux-segmented-button"
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
            <div className="equipment-header__detail equipment-header__detail--equipment-description">
              <div className="equipment-header__detail__label">Description</div>
              <div className="equipment-header__detail__content">
                {equipment.data.description}
              </div>
            </div>
            <div className="equipment-header__detail equipment-header__detail--equipment-event-log">
              <div className="equipment-header__detail__label">Event Log</div>
              <RuxLog className="rux-log" data={events}></RuxLog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentHeader;
