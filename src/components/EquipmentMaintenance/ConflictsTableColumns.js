import { createColumnHelper } from '@tanstack/react-table';
import { TwoDigitTime } from '../../common/TwoDigitTime/TwoDigitTime';

const columnHelper = createColumnHelper();

export const columnDefs = [
  columnHelper.accessor('iron', {
    header: 'IRON',
    style: { minWidth: 68 },
  }),
  columnHelper.accessor('groundStation', {
    header: 'Ground Station',
    style: { minWidth: 148 },
  }),
  columnHelper.accessor('rev', {
    header: 'REV',
    style: { minWidth: 60 },
  }),
  columnHelper.accessor('equipmentString', {
    header: 'Equipment String',
    style: { minWidth: 424, flex: 4 },
  }),
  columnHelper.accessor('state', {
    header: 'State',
    cell: (info) => info.getValue().toUpperCase(),
    style: { minWidth: 120 },
  }),
  columnHelper.accessor('startTime', {
    header: 'DOY',
    style: { minWidth: 60 },
  }),
  columnHelper.accessor('startTime', {
    header: 'Start Time',
    style: { minWidth: 112 },
    cell: (info) => <TwoDigitTime time={info.getValue()} />,
  }),
  columnHelper.accessor('aos', {
    header: 'AOS',
    style: { minWidth: 96 },
    cell: (info) => <TwoDigitTime time={info.getValue()} />,
  }),
  columnHelper.accessor('los', {
    header: 'LOS',
    style: { minWidth: 96 },
    cell: (info) => <TwoDigitTime time={info.getValue()} />,
  }),
  columnHelper.accessor('endTime', {
    header: 'Stop Time',
    style: { minWidth: 112 },
    cell: (info) => <TwoDigitTime time={info.getValue()} />,
  }),
];
