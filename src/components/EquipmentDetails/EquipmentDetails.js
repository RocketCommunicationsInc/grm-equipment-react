import './EquipmentDetails.scss';
import EquipmentHeader from './EquipmentHeader';
import EquipmentAlerts from './EquipmentAlerts';
import EquipmentContacts from './EquipmentContacts';
import { RuxContainer } from '@astrouxds/react';

const EquipmentDetails = ({ equipment }) => {
  return (
    <>
      <RuxContainer>
        <div slot="header" data-test="panel-label">
          Equipment Details
        </div>

        <div className="equipment-details-grid">
          <EquipmentHeader equipment={equipment} status="critical" />
          <EquipmentAlerts alertsService={equipment.data.alerts} />
          <EquipmentContacts contactsService={equipment.data.contacts} />
        </div>
      </RuxContainer>
    </>
  );
};

export default EquipmentDetails;
