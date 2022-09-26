import { RuxStatus, RuxMonitoringIcon } from '@astrouxds/react';
import './EquipmentIcon.scss';
import { getLogStatus } from '../../../services/log';
import { useEffect, useState } from 'react';
import { randInt } from '../../../util/util';

const EquipmentIcon = ({ type, status, label }) => {
  return (
    <>
      <RuxStatus status={status}></RuxStatus>
      <RuxMonitoringIcon
        icon={type}
        status={status}
        size="large"
        label={label}
      ></RuxMonitoringIcon>
    </>
  );
};

export default EquipmentIcon;
