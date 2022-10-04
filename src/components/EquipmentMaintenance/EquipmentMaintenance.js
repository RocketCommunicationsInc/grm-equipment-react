import './EquipmentMaintenance.scss';
import MaintenanceJobView from './MaintenanceJobView';

const EquipmentMaintenance = (props) => {
  return (
    <>
      <MaintenanceJobView
        changeView={props.changeView}
        setCurrentJob={props.setCurrentJob}
      />
    </>
  );
};

export default EquipmentMaintenance;
