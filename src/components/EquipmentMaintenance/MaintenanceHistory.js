import './MaintenanceHistory.scss';
import {
  formatDayOfYear,
  formatReadableTime,
  mapJobType,
} from '../../util/util';

const MaintenanceHistory = ({ maintenanceLog }) => {
  return (
    <div className='Maintenance-history-table'>
      <div className='Maintenance-history-table__heading'>
        <div>Name</div>
        <div>Type</div>
        <div>Created</div>
        <div>Started</div>
        <div>Stopped</div>
        <div>Technician</div>
        <div>Description</div>
      </div>

      <ul>
        {maintenanceLog &&
          maintenanceLog.map(function (job) {
            return (
              <li className='Maintenance-history-table__item' key={job.id}>
                <div>{job.id}</div>
                <div>{mapJobType(job.type)}</div>
                <div>
                  {formatDayOfYear(job.createdTime) +
                    ' ' +
                    formatReadableTime(job.createdTime)}
                </div>
                <div>
                  {formatDayOfYear(job.startTime) +
                    ' ' +
                    formatReadableTime(job.startTime)}
                </div>
                <div>
                  {formatDayOfYear(job.endTime) +
                    ' ' +
                    formatReadableTime(job.endTime)}
                </div>
                <div>{job.technician}</div>
                <div>{job.description}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MaintenanceHistory;
