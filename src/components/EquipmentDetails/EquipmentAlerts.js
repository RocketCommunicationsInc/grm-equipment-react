const EquipmentAlerts = () => {
  return (
    <>
      <div className="grid-zone grid-zone--equipment-alerts grid-zone--fixed">
        <div className="grid-zone__label">Alerts</div>
        <div className="grid-zone__content">
          <grm-alerts log="{{alertsLog}}"></grm-alerts>
        </div>
      </div>
    </>
  );
};

export default EquipmentAlerts;
