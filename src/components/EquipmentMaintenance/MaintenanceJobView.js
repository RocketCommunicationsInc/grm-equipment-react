import { RuxButton, RuxCard, RuxInput } from '@astrouxds/react';
import {
  mapJobProgress,
  mapJobType,
  formatDayOfYear,
  formatYear,
  formatReadableTime,
} from '../../util/util';
import PanelHeader from '../../common/PanelHeader';
import './EquipmentMaintenance.scss';

const MaintenanceJobView = ({ changeView, setCurrentJob, equipment }) => {
  const maintenanceJobs = equipment.data.maintenanceJobs;
  const maintenanceLog = equipment.data.maintenanceLog;

  return (
    <>
      <PanelHeader heading={'Maintenance'} />
      <p>Jobs</p>

      <div className="maintenance-jobs__actions">
        <RuxButton
          className="rux-button"
          onClick={() => {
            changeView('scheduleJob');
          }}
        >
          Schedule Job
        </RuxButton>
      </div>
      <div className="maintenance-jobs__list">
        {maintenanceJobs &&
          maintenanceJobs.map(function (job) {
            return (
              <RuxCard key={job.id} className="job-card">
                <h3>Job ID {job.id}</h3>
                <h4>{mapJobProgress(job.progressStep)}</h4>

                <RuxInput
                  label="Job Type"
                  className="Schedule-job__input"
                  value={mapJobType(job.type)}
                ></RuxInput>

                <div className="job-card__meta">
                  <label className="job-card__meta__label">Job Type</label>
                  <div className="job-card__meta__value">
                    {mapJobType(job.type)}
                  </div>
                </div>
                <div className="job-card__meta">
                  <label className="job-card__meta__label">Year</label>
                  <div className="job-card__meta__value">
                    {formatYear(job.startTime)}
                  </div>
                </div>
                <div className="job-card__meta">
                  <label className="job-card__meta__label">DOY</label>
                  <div className="job-card__meta__value">
                    {formatDayOfYear(job.endTime)}
                  </div>
                </div>
                <div className="job-card__meta">
                  <label className="job-card__meta__label">Start</label>
                  <div className="job-card__meta__value">
                    {formatReadableTime(job.startTime)}
                  </div>
                </div>
                <div className="job-card__meta">
                  <label className="job-card__meta__label">Stop</label>
                  <div className="job-card__meta__value">
                    {formatReadableTime(job.endTime)}
                  </div>
                </div>
                <RuxButton
                  className="rux-button"
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

      <div className="grid-zone grid-zone--maintenance-history grid-zone--fixed">
        <div className="grid-zone__label">Maintenance History</div>
        <div className="grid-zone__content maintenance-log">
          <header className="maintenance-log-header">
            <div className="maintenance-log__header-labels">
              <div className="maintenance-log__event__name">Name</div>
              <div className="maintenance-log__event__type">Type</div>
              <div className="maintenance-log__event__created">Created</div>
              <div className="maintenance-log__event__start">Started</div>
              <div className="maintenance-log__event__stop">Stopped</div>
              <div className="maintenance-log__event__technician">
                Technician
              </div>
              <div className="maintenance-log__event__description">
                Description
              </div>
            </div>
          </header>
          <ol className="maintenance-log__events">
            {maintenanceLog &&
              maintenanceLog.map(function (job) {
                return (
                  <li key={job.id} className="maintenance-log__event">
                    <div className="maintenance-log__event__name">{job.id}</div>
                    <div className="maintenance-log__event__type">
                      {mapJobType(job.type)}
                    </div>
                    <div className="maintenance-log__event__created">
                      {formatDayOfYear(job.createdTime)}{' '}
                      {formatReadableTime(job.createdTime)}
                    </div>
                    <div className="maintenance-log__event__start">
                      {formatDayOfYear(job.startTime)}{' '}
                      {formatReadableTime(job.startTime)}
                    </div>
                    <div className="maintenance-log__event__stop">
                      {formatDayOfYear(job.endTime)}{' '}
                      {formatReadableTime(job.endTime)}
                    </div>
                    <div className="maintenance-log__event__technician">
                      {job.technician}
                    </div>
                    <div className="maintenance-log__event__description">
                      {job.description}
                    </div>
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default MaintenanceJobView;
