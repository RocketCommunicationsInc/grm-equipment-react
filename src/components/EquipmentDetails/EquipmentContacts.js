const EquipmentContacts = () => {
  return (
    <>
      <div className="grid-zone grid-zone--equipment-contacts grid-zone--fixed">
        <div className="grid-zone__label">Current Contacts</div>
        <div className="grid-zone__content">
          <current-contacts log="[[contactsLog]]"></current-contacts>
        </div>
      </div>
    </>
  );
};

export default EquipmentContacts;
