import './EquipmentDetails.scss';
import EquipmentHeader from './EquipmentHeader';
import EquipmentAlerts from './EquipmentAlerts';
import EquipmentContacts from './EquipmentContacts';

const EquipmentDetails = ({ equipment }) => {
  return (
    <>
      <div className="grid-zone-wrap">
        <div className="grid-zone__label" data-test="panel-label">
          Equipment Details
        </div>
        <div className="grid-zone__content equipment-details-grid">
          <EquipmentHeader equipment={equipment} status="critical" />
          <EquipmentAlerts alertsService={equipment.data.alerts} />
          <EquipmentContacts contactsService={equipment.data.contacts} />
        </div>
      </div>
    </>
  );
};

export default EquipmentDetails;
