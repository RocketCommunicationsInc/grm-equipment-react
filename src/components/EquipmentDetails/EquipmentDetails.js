import './EquipmentDetails.scss';
import EquipmentHeader from './EquipmentHeader';
import EquipmentAlerts from './EquipmentAlerts';
import EquipmentContacts from './EquipmentContacts';
import { RuxContainer } from '@astrouxds/react';

const EquipmentDetails = ({ equipment }) => {
  return (
    <>
      <RuxContainer>
        <div slot='header' data-test='panel-label'>
          Equipment Details
        </div>

        <EquipmentHeader equipment={equipment} status='critical' />
        <div className='Equipment-details-grid'>
          <section className='Equipment-details-grid__left'>
            <EquipmentAlerts alertsService={equipment.data.alerts} />
          </section>
          <section className='Equipment-details-grid__right'>
            <EquipmentContacts contactsService={equipment.data.contacts} />
          </section>
        </div>
      </RuxContainer>
    </>
  );
};

export default EquipmentDetails;
