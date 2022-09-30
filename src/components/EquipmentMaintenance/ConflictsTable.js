import './ScheduleJob.scss';
import {
  formatDayOfYear,
  formatReadableTime,
  capitalize,
} from '../../util/util';

import { getAll as getAllConflicts } from '../../services/jobs';

let conflicts = getAllConflicts();

const ConflictsTable = (props) => {
  return (
    <>
      <div className="grid-zone grid-zone--fixed grid-zone--conflicts">
        <div className="grid-zone__label">Conflicts</div>
        <div className="grid-zone__content">
          <div className="grid-zone__content conflict-log">
            <header className="conflict-log-header">
              <div className="conflict-log__header-labels">
                <div className="conflict-log__event__iron">IRON</div>
                <div className="conflict-log__event__ground">GS</div>
                <div className="conflict-log__event__rev">Rev</div>
                <div className="conflict-log__event__equipment">
                  Equipment String
                </div>
                <div className="conflict-log__event__state">State</div>
                <div className="conflict-log__event__doy">DOY</div>
                <div className="conflict-log__event__start">Start</div>
                <div className="conflict-log__event__aos">AOS</div>
                <div className="conflict-log__event__los">LOS</div>
                <div className="conflict-log__event__stop">Stop</div>
              </div>
            </header>
            <ol className="conflict-log__events">
              {conflicts.map((conflict) => {
                return (
                  <li key={conflict.iron} className="conflict-log__event">
                    <div className="conflict-log__event__iron">
                      {conflict.iron}
                    </div>
                    <div className="conflict-log__event__ground">
                      {conflict.groundStation}
                    </div>
                    <div className="conflict-log__event__rev">
                      {conflict.rev}
                    </div>
                    <div className="conflict-log__event__equipment">
                      {conflict.equipmentString}
                    </div>
                    <div className="conflict-log__event__state">
                      {capitalize(conflict.state)}
                    </div>
                    <div className="conflict-log__event__doy">
                      {formatDayOfYear(conflict.startTime)}
                    </div>
                    <div className="conflict-log__event__start">
                      {formatReadableTime(conflict.startTime)}
                    </div>
                    <div className="conflict-log__event__aos">
                      {formatReadableTime(conflict.aos)}
                    </div>
                    <div className="conflict-log__event__los">
                      {formatReadableTime(conflict.los)}
                    </div>
                    <div className="conflict-log__event__stop">
                      {formatReadableTime(conflict.endTime)}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConflictsTable;
