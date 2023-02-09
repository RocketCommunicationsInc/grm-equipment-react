import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { AstroReactTable } from '../../common/AstroReactTable/AstroReactTable';
import { getAll as getAllConflicts } from '../../services/jobs';
import { columnDefs } from './ConflictsTableColumns';

import PanelHeader from '../../common/PanelHeader';
import { RuxContainer } from '@astrouxds/react';
import './ConflictsTable.scss';
import { useMemo } from 'react';

let conflicts = getAllConflicts();

const ConflictsTable = () => {
  const columns = useMemo(() => columnDefs, []);

  console.log(conflicts);

  const table = useReactTable({
    data: conflicts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <PanelHeader heading={'Conflicts'}></PanelHeader>
      <RuxContainer>
        <div className='Conflicts-table'>
          <AstroReactTable table={table} isSortable />
        </div>
      </RuxContainer>
    </>
  );
};

export default ConflictsTable;
