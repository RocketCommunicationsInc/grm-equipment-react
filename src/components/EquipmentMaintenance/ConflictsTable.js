import './ConflictsTable.scss';
import {
  formatDayOfYear,
  formatReadableTime,
  capitalize,
} from '../../util/util';
import PanelHeader from '../../common/PanelHeader';
import { RuxContainer } from '@astrouxds/react';
import { getAll as getAllConflicts } from '../../services/jobs';

let conflicts = getAllConflicts();

const ConflictsTable = () => {
  return (
    <>
      <PanelHeader heading={'Conflicts'}></PanelHeader>
      <RuxContainer>
        <div className='Conflicts-table'>
          <div className='Conflicts-table__heading'>
            <div>IRON</div>
            <div>GS</div>
            <div>Rev</div>
            <div>Equipment String</div>
            <div>State</div>
            <div>DOY</div>
            <div>Start</div>
            <div>AOS</div>
            <div>LOS</div>
            <div>Stop</div>
          </div>

          <ul className='list'>
            {conflicts.map((c) => {
              return (
                <li className='Conflicts-table__item' key={c.aos}>
                  <div>{c.iron}</div>
                  <div>{c.groundStation}</div>
                  <div>{c.rev}</div>
                  <div>{c.equipmentString}</div>
                  <div>{capitalize(c.state)}</div>
                  <div>{formatDayOfYear(c.startTime)}</div>
                  <div>{formatReadableTime(c.startTime)}</div>
                  <div>{formatReadableTime(c.aos)}</div>
                  <div>{formatReadableTime(c.los)}</div>
                  <div>{formatReadableTime(c.endTime)}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </RuxContainer>
    </>
  );
};

export default ConflictsTable;
