const initialStatusIcon = [
  {
    icon: 'antenna',
    label: 'RF',
    status: 'normal',
    notifications: 0,
  },
  {
    icon: 'processor-alt',
    label: 'Digital',
    status: 'normal',
    notifications: 0,
  },
  {
    icon: 'antenna-transmit',
    label: 'Comms',
    status: 'normal',
    notifications: 0,
  },
  {
    icon: 'antenna-receive',
    label: 'Facilities',
    status: 'normal',
    notifications: 0,
  },
];

export const initialState = {
  statusIcons: initialStatusIcon,
};
