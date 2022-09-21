import './EquipmentDetails.scss';
import EquipmentHeader from './EquipmentHeader';
import EquipmentAlerts from './EquipmentAlerts';
import EquipmentContacts from './EquipmentContacts';

const EquipmentDetails = () => {
  return (
    <>
      <div className="grid-zone-wrap">
        <div className="grid-zone__label" data-test="panel-label">
          Equipment Details
        </div>
        <div className="grid-zone__content equipment-details-grid">
          <EquipmentHeader equipmentNumber={1247} status="critical" />
          <EquipmentAlerts />
          <EquipmentContacts />
        </div>
      </div>
    </>
  );
};

export default EquipmentDetails;
