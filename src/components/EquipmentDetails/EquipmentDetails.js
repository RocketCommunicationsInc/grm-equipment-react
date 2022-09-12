import { RuxSegmentedButton, RuxLog, RuxStatus } from '@astrouxds/react';
import { loremIpsum } from '../../util/util';
import './EquipmentDetails.scss';

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

const EquipmentDetails = () => {
  return (
    <>
      {/* <div className="grid-zone-wrap">
        <div className="grid-zone__label">Equipment Details</div>
        <div className="grid-zone__content">
          <div className="grid-zone--equipment-header">
            <div className="equipment-name">
              <RuxStatus className="rux-status" status="critical" />
              Equipment 1247
            </div>
            equipment header
          </div>
        </div>
      </div> */}
      <div className="grid-zone-wrap">
        <div className="grid-zone__label">Equipment Details</div>
        <div className="grid-zone__content equipment-details-grid">
          <div className="grid-zone grid-zone--fixed grid-zone--equipment-header">
            <div className="grid-zone__content">
              <div className="equipment-name">
                <RuxStatus className="rux-status" status="critical"></RuxStatus>
                Equipment 1247
              </div>
              <div className="equipment-header">
                <div className="equipment-header__detail equipment-header__detail--equipment-states">
                  <RuxSegmentedButton
                    className="rux-segmented-button"
                    data={[
                      {
                        label: 'online',
                        selected: true,
                      },
                      {
                        label: 'offline',
                      },
                    ]}
                  ></RuxSegmentedButton>
                  <RuxSegmentedButton
                    className="rux-segmented-button"
                    data={[
                      {
                        label: 'considered',
                        selected: true,
                      },
                      {
                        label: 'deconsidered',
                      },
                    ]}
                  ></RuxSegmentedButton>
                </div>
                <div className="equipment-header__detail equipment-header__detail--equipment-description">
                  <div className="equipment-header__detail__label">
                    Description
                  </div>
                  <div className="equipment-header__detail__content">
                    {loremIpsum()}
                  </div>
                </div>
                <div className="equipment-header__detail equipment-header__detail--equipment-event-log">
                  <div className="equipment-header__detail__label">
                    Event Log
                  </div>
                  <RuxLog
                    className="rux-log"
                    max-lines={5}
                    data={eventData}
                  ></RuxLog>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-zone grid-zone--equipment-alerts grid-zone--fixed">
            <div className="grid-zone__label">Alerts</div>
            <div className="grid-zone__content">
              <grm-alerts log="{{alertsLog}}"></grm-alerts>
            </div>
          </div>

          <div className="grid-zone grid-zone--equipment-contacts grid-zone--fixed">
            <div className="grid-zone__label">Current Contacts</div>
            <div className="grid-zone__content">
              <current-contacts log="[[contactsLog]]"></current-contacts>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentDetails;
