import './EquipmentDetails.scss';
import EquipmentHeader from './EquipmentHeader';

const EquipmentDetails = () => {
  return (
    <>
      <div className="grid-zone-wrap">
        <div className="grid-zone__label">Equipment Details</div>
        <div className="grid-zone__content equipment-details-grid">
          <EquipmentHeader equipmentNumber={1247} status="critical" />

          <div className="grid-zone grid-zone--equipment-alerts grid-zone--fixed">
            <div className="grid-zone__label">Alerts</div>
            <div className="grid-zone__content">
              <grm-alerts log="{{alertsLog}}"></grm-alerts>
            </div>
          </div>

          <div className="grid-zone grid-zone--equipment-contacts grid-zone--fixed">
            <div className="grid-zone__label">Current Contacts</div>
            <div className="grid-zone__content">
              <current-contacts log="[[contactsLog]]"></current-contacts>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentDetails;
