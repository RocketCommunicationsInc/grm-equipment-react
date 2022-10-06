import './EquipmentDetails.scss';
import EquipmentHeader from './EquipmentHeader';
import EquipmentAlerts from './EquipmentAlerts';
import EquipmentContacts from './EquipmentContacts';
import { DataContext } from '../../DataContext';
import { useState, useContext, useEffect } from 'react';

const EquipmentDetails = () => {
  let data = useContext(DataContext).data;
  const [equipment, setEquipment] = useState(
    data.categories[0].children[0].children[0]
  );

  return (
    <>
      <div className="grid-zone-wrap">
        <div className="grid-zone__label" data-test="panel-label">
          Equipment Details
        </div>
        <div className="grid-zone__content equipment-details-grid">
          <EquipmentHeader equipment={equipment} status="critical" />
          <EquipmentAlerts alerts={equipment.data.alerts} />
          <EquipmentContacts />
        </div>
      </div>
    </>
  );
};

export default EquipmentDetails;
