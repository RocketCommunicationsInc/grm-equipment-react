import { createColumnHelper } from '@tanstack/react-table';
import { TwoDigitTime } from '../../common/TwoDigitTime/TwoDigitTime';

const columnHelper = createColumnHelper();

export const columnDefs = [
  columnHelper.accessor('iron', {
    header: 'IRON',
    style: { flex: 0.5 },
  }),
  columnHelper.accessor('groundStation', {
    header: 'Ground Station',
    style: { flex: 0.5 },
  }),
  columnHelper.accessor('rev', {
    header: 'REV',
  }),
  columnHelper.accessor('equipmentString', {
    header: 'Equipment String',
    style: { flex: 2 },
  }),
  columnHelper.accessor('state', {
    header: 'State',
    cell: (info) => info.getValue().toUpperCase(),
  }),
  columnHelper.accessor('startTime', {
    header: 'DOY',
  }),
  columnHelper.accessor('startTime', {
    header: 'Start Time',
    cell: (info) => <TwoDigitTime time={info.getValue()} />,
  }),
  columnHelper.accessor('aos', {
    header: 'AOS',
    cell: (info) => <TwoDigitTime time={info.getValue()} />,
  }),
  columnHelper.accessor('los', {
    header: 'LOS',
    cell: (info) => <TwoDigitTime time={info.getValue()} />,
  }),
  columnHelper.accessor('endTime', {
    header: 'Stop Time',
    cell: (info) => <TwoDigitTime time={info.getValue()} />,
  }),
];
