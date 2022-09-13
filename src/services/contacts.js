const contacts = [
  {
    contactId: '80e5654b-df70-5a9c-85dd-75541a7cafae',
    contactName: '22683',
    contactGround: 'HTS',
    contactEquipment: 'ANT43 VAFB1 SFEP227CH1 ECEU6 WS402 USP177',
    contactState: 'executing',
    contactStep: 'Downlink',
    contactDetail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contactBeginTimestamp: 1571086435343,
    contactEndTimestamp: 1571088368326,
    expanded: false,
  },
  {
    contactId: '40e5654b-df70-5a9c-85dd-75541a7cafae',
    contactName: '68112',
    contactGround: 'VTS',
    contactEquipment: 'ANT74 BAFB1 SFEP299CH1 ECEU6 WS305 USP451',
    contactState: 'failed',
    contactStep: 'AOS',
    contactDetail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contactBeginTimestamp: 1571088235343,
    contactEndTimestamp: 1571088398326,
    expanded: false,
  },
  {
    contactId: '70e5654b-df70-5a9c-85dd-75541a7cafae',
    contactName: '16834',
    contactGround: 'DGS',
    contactEquipment: 'ANT73 PAFB1 SFEP149CH1 ECEU6 WS167 USP182',
    contactState: 'executing',
    contactStep: 'Uplink',
    contactDetail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contactBeginTimestamp: 1571088635343,
    contactEndTimestamp: 1571088768326,
    expanded: false,
  },
  {
    contactId: '00e5654b-df70-5a9c-85dd-75541a7cafae',
    contactName: '62346',
    contactGround: 'TCS',
    contactEquipment: 'ANT52 SAFB1 SFEP374CH1 ECEU6 WS481 USP342',
    contactState: 'executing',
    contactStep: 'Downlink',
    contactDetail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contactBeginTimestamp: 1571085435343,
    contactEndTimestamp: 1571089368326,
    expanded: false,
  },
];

export function getAll() {
  return contacts;
}
