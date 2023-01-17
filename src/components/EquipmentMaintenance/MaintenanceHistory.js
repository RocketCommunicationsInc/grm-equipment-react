import './MaintenanceHistory.scss';
import {
  formatDayOfYear,
  formatReadableTime,
  mapJobType,
} from '../../util/util';

import {
  RuxTable,
  RuxTableBody,
  RuxTableCell,
  RuxTableHeader,
  RuxTableRow,
} from '@astrouxds/react';

const MaintenanceHistory = ({ maintenanceLog }) => {
  return (
    <div className="maintenance-history">
      <RuxTable>
        <RuxTableHeader>
          <RuxTableCell>Name</RuxTableCell>
          <RuxTableCell>Type</RuxTableCell>
          <RuxTableCell>Created</RuxTableCell>
          <RuxTableCell>Started</RuxTableCell>
          <RuxTableCell>Stopped</RuxTableCell>
          <RuxTableCell>Technician</RuxTableCell>
          <RuxTableCell>Description</RuxTableCell>
        </RuxTableHeader>
        <RuxTableBody>
          {maintenanceLog &&
            maintenanceLog.map(function (job) {
              return (
                <RuxTableRow key={job.id}>
                  <RuxTableCell>
                    <p>{job.id}</p>
                  </RuxTableCell>
                  <RuxTableCell>
                    <p>{mapJobType(job.type)}</p>
                  </RuxTableCell>
                  <RuxTableCell>
                    <p>
                      {formatDayOfYear(job.createdTime) +
                        ' ' +
                        formatReadableTime(job.createdTime)}
                    </p>
                  </RuxTableCell>
                  <RuxTableCell>
                    <p>
                      {formatDayOfYear(job.startTime) +
                        ' ' +
                        formatReadableTime(job.startTime)}
                    </p>
                  </RuxTableCell>

                  <RuxTableCell>
                    <p>
                      {formatDayOfYear(job.endTime) +
                        ' ' +
                        formatReadableTime(job.endTime)}
                    </p>
                  </RuxTableCell>

                  <RuxTableCell>
                    <p>{job.technician}</p>
                  </RuxTableCell>

                  <RuxTableCell>
                    <p>{job.description}</p>
                  </RuxTableCell>
                </RuxTableRow>
              );
            })}
        </RuxTableBody>
      </RuxTable>
    </div>
  );
};

export default MaintenanceHistory;
