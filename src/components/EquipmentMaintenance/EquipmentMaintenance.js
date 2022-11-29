import './EquipmentMaintenance.scss';
import MaintenanceJobView from './MaintenanceJobView';

const EquipmentMaintenance = ({ changeView, setCurrentJob, equipment }) => {
  return (
    <>
      <MaintenanceJobView
        changeView={changeView}
        setCurrentJob={setCurrentJob}
        equipment={equipment}
      />
    </>
  );
};

export default EquipmentMaintenance;
