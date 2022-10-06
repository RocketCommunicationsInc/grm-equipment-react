import { RuxLog, RuxSegmentedButton, RuxStatus } from '@astrouxds/react';
import { loremIpsum, randInt } from '../../util/util';
import './EquipmentHeader.scss';
import { eventLog, getOne } from '../../services/events';
import { useEffect, useState } from 'react';

const EquipmentHeader = ({ equipment }) => {
  const [events, setEvents] = useState(eventLog);

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      const newEvents = events.concat([getOne()]);
      setEvents(newEvents);
    }, randInt(2000, 10000));
    return () => {
      clearTimeout(timeout);
    };
  }, [events]);

  return (
    <>
      <div className="grid-zone grid-zone--fixed grid-zone--equipment-header">
        <div className="grid-zone__content">
          <div className="equipment-name">
            <RuxStatus className="rux-status" status={equipment.data.status} />
            {equipment.label}
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
                {loremIpsum()}
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
