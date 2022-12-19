import { useState } from 'react';
import classNames from 'classnames';
import { RuxCheckbox, RuxStatus } from '@astrouxds/react';
import { formatReadableTime } from '../../util/util';
import './EquipmentAlerts.scss';

const EquipmentAlert = ({ alert, onChange }) => {
  const [expand, setExpand] = useState(alert.expanded);

  const handleChange = (e) => {
    alert.selected = e.target.checked;
    if (typeof onChange === 'function') {
      onChange();
    }
  };

  return (
    <>
      <li
        className={classNames('alert-log__event', {
          'alert-log--collapsed': !expand,
          'alert-log--expanded': expand,
        })}
        onClick={() => setExpand(!expand)}
      >
        <div className="alert-log__event__select">
          <RuxCheckbox
            className="rux-checkbox"
            onRuxchange={handleChange}
            checked={alert.selected}
          />
        </div>
        <div className="alert-log__event__status">
          <RuxStatus status={alert.status} />
        </div>
        <div className="alert-log__event__message">{alert.errorMessage}</div>
        <div className="alert-log__event__category">{alert.errorCategory}</div>
        <div className="alert-log__event__timestamp">
          {formatReadableTime(alert.errorTime)}
        </div>
      </li>
      <div className="alert-log__detail">
        <div>{alert.longMessage}</div>
      </div>
    </>
  );
};

export default EquipmentAlert;
