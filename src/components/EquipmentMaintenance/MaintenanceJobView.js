import { RuxButton, RuxCard, RuxContainer, RuxInput } from '@astrouxds/react';
import {
  mapJobProgress,
  mapJobType,
  formatDayOfYear,
  formatYear,
  formatReadableTime,
} from '../../util/util';
import './EquipmentMaintenance.scss';
import MaintenanceHistory from './MaintenanceHistory';

const MaintenanceJobView = ({ changeView, setCurrentJob, equipment }) => {
  const maintenanceJobs = equipment.data.maintenanceJobs;
  const maintenanceLog = equipment.data.maintenanceLog;

  return (
    <>
      <RuxContainer>
        <div slot='header'>Maintenance Jobs</div>

        <RuxButton
          className='MaintenanceJobView__schedule-button'
          onClick={() => {
            changeView('scheduleJob');
          }}
        >
          Schedule Job
        </RuxButton>
        <div className='MaintenanceJobView__jobCardsContainer'>
          {maintenanceJobs &&
            maintenanceJobs.map(function (job) {
              return (
                <RuxCard key={job.id}>
                  <div slot='header'>{'Job ID #' + job.id}</div>

                  <h4 className='MaintenanceJobView__cardDetails'>
                    {mapJobProgress(job.progressStep)}
                  </h4>

                  <RuxInput
                    label='Job Type'
                    className='MaintenanceJobView__cardDetails'
                    value={mapJobType(job.type)}
                    readonly={true}
                  />

                  <RuxInput
                    label='Year'
                    className='MaintenanceJobView__cardDetails'
                    value={formatYear(job.startTime)}
                    readonly={true}
                  />

                  <RuxInput
                    label='DOY'
                    className='MaintenanceJobView__cardDetails'
                    value={formatDayOfYear(job.endTime)}
                    readonly={true}
                  />

                  <RuxInput
                    label='Start'
                    className='MaintenanceJobView__cardDetails'
                    value={formatReadableTime(job.startTime)}
                    readonly={true}
                  />

                  <RuxInput
                    label='End'
                    className='MaintenanceJobView__cardDetails'
                    value={formatReadableTime(job.endTime)}
                    readonly={true}
                  />

                  <RuxButton
                    className='MaintenanceJobView__cardButtons'
                    onClick={() => {
                      changeView('viewJobDetails');
                      setCurrentJob(job);
                    }}
                  >
                    View Details
                  </RuxButton>
                </RuxCard>
              );
            })}
        </div>
      </RuxContainer>

      <RuxContainer>
        <div slot='header'>Maintenance History</div>

        <MaintenanceHistory maintenanceLog={maintenanceLog} />
      </RuxContainer>
    </>
  );
};

export default MaintenanceJobView;
