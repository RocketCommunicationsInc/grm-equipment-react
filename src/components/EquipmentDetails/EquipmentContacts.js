import classNames from 'classnames';
import { useState } from 'react';
import { RuxOption, RuxSelect, RuxStatus } from '@astrouxds/react';
import { formatReadableTime } from '../../util/util';
import { useEffect } from 'react';
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
          <RuxSelect input-id="commandModeSelector" className="rux-select">
            <RuxOption value="manual" label="Manual" />
            <RuxOption value="semi-automated" label="Semi-Automated" />
            <RuxOption value="fully-automated" label="Fully Automated" />
          </RuxSelect>
        </div>
      </div>
    </>
  );
};

const EquipmentContacts = ({ contactsService }) => {
  const [contactFilter, setContactFilter] = useState('all');
  const [contacts, setContacts] = useState(contactsService.data);

  function onChangeContacts(contacts) {
    setContacts([...contacts]);
  }

  useEffect(() => {
    contactsService.startGeneration();
    contactsService.onChange(onChangeContacts);

    return () => {
      contactsService.stopGeneration();
      contactsService.removeOnChange(onChangeContacts);
    };
  }, [contactsService]);

  function filteredByStatus() {
    return contacts.filter(
      (contact) =>
        contact.contactState === contactFilter || contactFilter === 'all'
    );
  }

  return (
    <>
      <div className="grid-zone grid-zone--equipment-contacts grid-zone--fixed">
        <div className="grid-zone__label">Current Contacts</div>
        <div className="grid-zone__content">
          <div className="contact-bin-header">
            <div className="contact-summary contact-summary--all">
              <span className="contact-count">{contacts.length}</span>
              Contacts
            </div>
            <div className="contact-summary contact-summary--failed">
              <span className="contact-count">
                {
                  contacts.filter(
                    (contact) => contact.contactState === 'failed'
                  ).length
                }
              </span>
              Failed
            </div>
            <div className="contact-summary contact-summary--executing">
              <span className="contact-count">
                {
                  contacts.filter(
                    (contact) => contact.contactState === 'executing'
                  ).length
                }
              </span>
              Executing
            </div>
            <div className="contact-filters">
              <div className="contact-filter">
                <label htmlFor="stateFilter">Status</label>
                <RuxSelect
                  input-id="stateFilter"
                  className="rux-select"
                  required={false}
                  onRuxchange={(e) => setContactFilter(e.target.value)}
                >
                  <RuxOption value="all" label="All" />
                  <RuxOption value="executing" label="Executing" />
                  <RuxOption value="failed" label="Failed" />
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
              {filteredByStatus().map((log) => {
                return (
                  <Contact
                    key={log.id}
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
