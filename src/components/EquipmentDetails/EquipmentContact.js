import { useState } from 'react';

import classNames from 'classnames';
import { RuxStatus, RuxSelect, RuxOption } from '@astrouxds/react';
import { formatReadableTime } from '../../util/util';
import './EquipmentContact.scss';

const EquipmentContact = ({
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
      <div className="Equipment-contact">
        <li
          className={classNames('contact-log__event', {
            'contact-log--collapsed': !expand,
            'contact-log--expanded': expand,
          })}
          onClick={() => setExpand(!expand)}
        >
          <div className="Equipment-contact__status">
            <RuxStatus status={status} />
          </div>
          <div className="Equipment-contact__name">{name}</div>
          <div className="Equipment-contact__ground">{ground}</div>
          <div className="Equipment-contact__equipment">{equipment}</div>
          <div
            className={`Equipment-contact__state Equipment-contact__state--${status}`}
          >
            {state} (Step: {step})
          </div>
          <div className="Equipment-contact__timestamp">
            <span>{formatReadableTime(begin)}</span>
            &ndash;
            <span>{formatReadableTime(end)}</span>
          </div>
        </li>
        <div className="contact-log__detail">
          <div className="contact-log__detail__text">{details}</div>
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

export default EquipmentContact;
