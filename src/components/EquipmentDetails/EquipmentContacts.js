import classNames from 'classnames';
import { useState } from 'react';
import { RuxOption, RuxSelect, RuxStatus } from '@astrouxds/react';
import { formatReadableTime, loremIpsum } from '../../util/util';
import './EquipmentContacts.scss';

const Contact = ({
  status,
  name,
  ground,
  equipment,
  state,
  step,
  begin,
  end,
  details,
  expanded,
  commandMode,
}) => {
  const [expand, setExpand] = useState(expanded);
  function getStatus() {
    if (state === 'executing') return 'normal';
    if (state === 'failed') return 'serious';
    return 'off';
  }
  status = getStatus();

  return (
    <>
      <li
        className={classNames('contact-log__event', {
          'contact-log--collapsed': !expand,
          'contact-log--expanded': expand,
        })}
        onClick={() => setExpand(!expand)}
      >
        <div className="contact-log__event__status">
          <RuxStatus status={status} />
        </div>
        <div className="contact-log__event__name">{name}</div>
        <div className="contact-log__event__ground">{ground}</div>
        <div className="contact-log__event__equipment">{equipment}</div>
        <div
          className={`contact-log__event__state contact-log__event__state--${status}`}
        >
          {state} (Step: {step})
        </div>
        <div className="contact-log__event__timestamp">
          <span>{formatReadableTime(begin)}</span>
          &ndash;
          <span>{formatReadableTime(end)}</span>
        </div>
      </li>
      <div className="contact-log__detail">
        <div className="contact-log__detail__text">{details}</div>
        <div className="contact-log__detail__command-mode">
          <label htmlFor="commandModeSelector">Command Mode</label>
          <RuxSelect
            input-id="commandModeSelector"
            className="rux-select"
            value={commandMode}
          >
            <RuxOption value="manual" label="Manual" />
            <RuxOption value="semi-automated" label="Semi-Automated" />
            <RuxOption value="fully-automated" label="Fully Automated" />
          </RuxSelect>
        </div>
      </div>
    </>
  );
};

const contactLogs = [
  {
    contactId: '80e5654b-df70-5a9c-85dd-75541a7cafae',
    contactName: '22683',
    contactGround: 'HTS',
    contactEquipment: 'ANT43 VAFB1 SFEP227CH1 ECEU6 WS402 USP177',
    contactState: 'executing',
    contactStep: 'Downlink',
    contactDetail: loremIpsum(),
    contactBeginTimestamp: 1571086435343,
    contactEndTimestamp: 1571088368326,
    expanded: false,
  },
  {
    contactId: '40e5654b-df70-5a9c-85dd-75541a7cafae',
    contactName: '68112',
    contactGround: 'VTS',
    contactEquipment: 'ANT74 BAFB1 SFEP299CH1 ECEU6 WS305 USP451',
    contactState: 'failed',
    contactStep: 'AOS',
    contactDetail: loremIpsum(),
    contactBeginTimestamp: 1571088235343,
    contactEndTimestamp: 1571088398326,
    expanded: false,
  },
  {
    contactId: '70e5654b-df70-5a9c-85dd-75541a7cafae',
    contactName: '16834',
    contactGround: 'DGS',
    contactEquipment: 'ANT73 PAFB1 SFEP149CH1 ECEU6 WS167 USP182',
    contactState: 'executing',
    contactStep: 'Uplink',
    contactDetail: loremIpsum(),
    contactBeginTimestamp: 1571088635343,
    contactEndTimestamp: 1571088768326,
    expanded: false,
  },
  {
    contactId: '00e5654b-df70-5a9c-85dd-75541a7cafae',
    contactName: '62346',
    contactGround: 'TCS',
    contactEquipment: 'ANT52 SAFB1 SFEP374CH1 ECEU6 WS481 USP342',
    contactState: 'executing',
    contactStep: 'Downlink',
    contactDetail: loremIpsum(),
    contactBeginTimestamp: 1571085435343,
    contactEndTimestamp: 1571089368326,
    expanded: false,
  },
];

const EquipmentContacts = () => {
  return (
    <>
      <div className="grid-zone grid-zone--equipment-contacts grid-zone--fixed">
        <div className="grid-zone__label">Current Contacts</div>
        <div className="grid-zone__content">
          <div className="contact-bin-header">
            <div className="contact-summary contact-summary--all">
              <span className="contact-count"> 4 </span> Contacts
            </div>
            <div className="contact-summary contact-summary--failed">
              <span className="contact-count"> 1 </span> Failed
            </div>
            <div className="contact-summary contact-summary--executing">
              <span className="contact-count"> 3 </span> Executing
            </div>
            <div className="contact-filters">
              <div className="contact-filter">
                <label htmlFor="stateFilter">Status</label>
                <RuxSelect
                  input-id="stateFilter"
                  className="rux-select"
                  required={false}
                  value="all"
                >
                  <RuxOption value="all" label="All" />
                  <RuxOption value="critical" label="Critical" />
                  <RuxOption value="serious" label="Serious" />
                  <RuxOption value="caution" label="Caution" />
                </RuxSelect>
              </div>
            </div>
          </div>
          <div className="contact-log">
            <header className="contact-log-header">
              <div className="contact-log__header-labels">
                <div className="contact-log__event__status"></div>
                <div className="contact-log__event__name">Name</div>
                <div className="contact-log__event__ground">GS</div>
                <div className="contact-log__event__equipment">
                  Equipment String
                </div>
                <div className="contact-log__event__state">Status</div>
                <div className="contact-log__event__timestamp">
                  AOS &ndash; LOS
                </div>
              </div>
            </header>

            <ol className="contact-log__events">
              {contactLogs.map((log) => {
                return (
                  <Contact
                    key={log.contactId}
                    name={log.contactName}
                    ground={log.contactGround}
                    equipment={log.contactEquipment}
                    state={log.contactState}
                    step={log.contactStep}
                    begin={log.contactBeginTimestamp}
                    end={log.contactEndTimestamp}
                    details={log.contactDetail}
                    expanded={log.expanded}
                    commandMode="manual"
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentContacts;
