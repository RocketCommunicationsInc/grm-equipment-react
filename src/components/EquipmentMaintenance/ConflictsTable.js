import './ConflictsTable.scss';
import {
  formatDayOfYear,
  formatReadableTime,
  capitalize,
} from '../../util/util';
import {
  RuxContainer,
  RuxTable,
  RuxTableHeader,
  RuxTableBody,
  RuxTableRow,
  RuxTableCell,
} from '@astrouxds/react';
import { getAll as getAllConflicts } from '../../services/jobs';

let conflicts = getAllConflicts();

const ConflictsTable = () => {
  return (
    <RuxContainer className="jobsConflictContainer">
      <h2 slot="header">Conflicts</h2>
      <RuxTable>
        <RuxTableHeader>
          <RuxTableCell>IRON</RuxTableCell>
          <RuxTableCell>GS</RuxTableCell>
          <RuxTableCell>Rev</RuxTableCell>
          <RuxTableCell>Equipment String</RuxTableCell>
          <RuxTableCell>State</RuxTableCell>
          <RuxTableCell>DOY</RuxTableCell>
          <RuxTableCell>Start</RuxTableCell>
          <RuxTableCell>AOS</RuxTableCell>
          <RuxTableCell>LOS</RuxTableCell>
          <RuxTableCell>Stop</RuxTableCell>
        </RuxTableHeader>
        <RuxTableBody>
          {conflicts.map((c) => (
            <RuxTableRow key={c.aos}>
              <RuxTableCell>
                <p>{c.iron}</p>
              </RuxTableCell>
              <RuxTableCell>
                <p>{c.groundStation}</p>
              </RuxTableCell>
              <RuxTableCell>
                <p>{c.rev}</p>
              </RuxTableCell>
              <RuxTableCell>
                <p>{c.equipmentString}</p>{' '}
              </RuxTableCell>

              <RuxTableCell>
                <p> {capitalize(c.state)}</p>{' '}
              </RuxTableCell>

              <RuxTableCell>
                <p> {formatDayOfYear(c.startTime)}</p>{' '}
              </RuxTableCell>

              <RuxTableCell>
                <p> {formatReadableTime(c.startTime)}</p>{' '}
              </RuxTableCell>

              <RuxTableCell>
                <p> {formatReadableTime(c.aos)}</p>{' '}
              </RuxTableCell>

              <RuxTableCell>
                <p> {formatReadableTime(c.los)}</p>{' '}
              </RuxTableCell>

              <RuxTableCell>
                <p> {formatReadableTime(c.endTime)}</p>{' '}
              </RuxTableCell>
            </RuxTableRow>
          ))}
        </RuxTableBody>
      </RuxTable>
    </RuxContainer>
  );
};

export default ConflictsTable;
