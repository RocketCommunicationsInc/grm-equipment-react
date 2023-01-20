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
        className={classNames('Equipment-contacts__event', {
          'Equipment-contacts__collapsed-log': !expand,
          'Equipment-contacts__expanded-log': expand,
        })}
        onClick={() => setExpand(!expand)}
      >
        <div className='Equipment-contacts__status'>
          <RuxStatus status={status} />
        </div>
        <div className='Equipment-contacts__name'>{name}</div>
        <div className='Equipment-contacts__ground'>{ground}</div>
        <div className='Equipment-contacts__equipment'>{equipment}</div>
        <div
          className={`Equipment-contacts__state Equipment-contacts__state--${status}`}
        >
          {state} (Step: {step})
        </div>
        <div className='Equipment-contacts__timestamp'>
          <span>{formatReadableTime(begin)}</span>
          &ndash;
          <span>{formatReadableTime(end)}</span>
        </div>
      </li>
      <div className='Equipment-contacts__expanded-detail'>
        <div className='Equipment-contacts__expanded-detail-text'>
          {details}
        </div>
        <div className='Equipment-contacts__expanded-detail-command-mode'>
          <label htmlFor='commandModeSelector'>Command Mode</label>
          <RuxSelect input-id='commandModeSelector' className='rux-select'>
            <RuxOption value='manual' label='Manual' />
            <RuxOption value='semi-automated' label='Semi-Automated' />
            <RuxOption value='fully-automated' label='Fully Automated' />
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
      <div className='Equipment-contacts'>
        <div className='Equipment-contacts__header-container'>
          <p className='Equipment-contacts__header-title'>Current Conflicts</p>

          <div className='Equipment-contacts__main-header'>
            <div className='Equipment-contacts__summary'>
              <span className='Equipment-contacts__count'>
                {contacts.length}
              </span>
              Contacts
            </div>
            <div className='Equipment-contacts__summary Equipment-contacts__summary-failed'>
              <span className='Equipment-contacts__count'>
                {
                  contacts.filter(
                    (contact) => contact.contactState === 'failed'
                  ).length
                }
              </span>
              Failed
            </div>
            <div className='Equipment-contacts__summary'>
              <span className='Equipment-contacts__count'>
                {
                  contacts.filter(
                    (contact) => contact.contactState === 'executing'
                  ).length
                }
              </span>
              Executing
            </div>
            <div className='Equipment-contacts__filters'>
              <div className='Equipment-contacts__filter'>
                <label htmlFor='stateFilter'>Status</label>
                <RuxSelect
                  input-id='stateFilter'
                  className='rux-select'
                  required={false}
                  onRuxchange={(e) => setContactFilter(e.target.value)}
                >
                  <RuxOption value='all' label='All' />
                  <RuxOption value='executing' label='Executing' />
                  <RuxOption value='failed' label='Failed' />
                </RuxSelect>
              </div>
            </div>
          </div>
        </div>

        <div className='Equipment-contacts__log'>
          <header className='Equipment-contacts__log-header'>
            <div className='Equipment-contacts__log-header-labels'>
              <div className='Equipment-contacts__status'></div>
              <div className='Equipment-contacts__name'>Name</div>
              <div className='Equipment-contacts__ground'>GS</div>
              <div className='Equipment-contacts__equipment'>
                Equipment String
              </div>
              <div className='Equipment-contacts__state'>Status</div>
              <div className='Equipment-contacts__timestamp'>
                AOS &ndash; LOS
              </div>
            </div>
          </header>

          <ol className='Equipment-contacts__events-container'>
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
                  commandMode='manual'
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default EquipmentContacts;
