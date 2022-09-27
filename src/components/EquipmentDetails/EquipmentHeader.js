import { RuxLog, RuxSegmentedButton, RuxStatus } from '@astrouxds/react';
import { loremIpsum } from '../../util/util';
import './EquipmentHeader.scss';

const eventData = [
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'off',
    message: 'Antenna DGS 1 went offline.',
  },
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'serious',
    message: 'USA-177 experienced solar panel misalignment.',
  },
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'caution',
    message: 'USA-168 suffered power degradation.',
  },
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'standby',
    message: 'Antenna DGS 2 has weak signal.',
  },
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'off',
    message: 'Black FEP 121 is offline.',
  },
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'off',
    message: 'Antenna DGS 1 went offline.',
  },
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'serious',
    message: 'USA-177 experienced solar panel misalignment.',
  },
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'caution',
    message: 'USA-168 suffered power degradation.',
  },
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'standby',
    message: 'Antenna DGS 2 has weak signal.',
  },
  {
    timestamp: '2019-05-10T15:54:58.781Z',
    status: 'off',
    message: 'Black FEP 121 is offline.',
  },
];

const EquipmentHeader = ({ equipmentNumber, status }) => {
  return (
    <>
      <div className="grid-zone grid-zone--fixed grid-zone--equipment-header">
        <div className="grid-zone__content">
          <div className="equipment-name">
            <RuxStatus className="rux-status" status={status} />
            Equipment {equipmentNumber}
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
              <RuxLog className="rux-log" data={eventData}></RuxLog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentHeader;
