import { useState } from 'react';
import classNames from 'classnames';
import { RuxCheckbox, RuxStatus } from '@astrouxds/react';
import { formatReadableTime } from '../../util/util';
import './EquipmentAlert.scss';

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
      <div className="Equipment-alert">
        <li
          className={classNames('Equipment-alert__log-row', {
            'alert-log--collapsed': !expand,
            'Equipment-alert__log-row-expanded': expand,
          })}
          onClick={() => setExpand(!expand)}
        >
          <div className="Equipment-alert__select-alert">
            <RuxCheckbox
              className="rux-checkbox"
              onRuxchange={handleChange}
              checked={alert.selected}
            />
          </div>
          <div className="Equipment-alert__status">
            <RuxStatus status={alert.status} />
          </div>
          <div className="Equipment-alert__message">{alert.errorMessage}</div>
          <div className="Equipment-alert__category">{alert.errorCategory}</div>
          <div className="Equipment-alert__timestamp">
            {formatReadableTime(alert.errorTime)}
          </div>
        </li>
        <div className="Equipment-alert__expanded-detail">
          <div>{alert.longMessage}</div>
        </div>
      </div>
    </>
  );
};

export default EquipmentAlert;
