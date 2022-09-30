import { RuxButton } from '@astrouxds/react';
import { getOne } from '../../services/equipment';
import {
  mapJobProgress,
  mapJobType,
  formatDayOfYear,
  formatYear,
  formatReadableTime,
} from '../../util/util';
import './EquipmentMaintenance.scss';

const maintenanceObject = getOne();
const maintenanceJobs = maintenanceObject.maintenanceJobs;
const maintenanceLog = maintenanceObject.maintenanceLog;

const MaintenanceJobView = (props) => {
  return (
    <>
      <div className="grid-zone-wrap">
        <div className="grid-zone__label">Maintenance</div>
        <div className="grid-zone__content">
          <div className="grid-zone grid-zone--maintenance-jobs grid-zone--fixed">
            <div className="grid-zone__label">Jobs</div>

            <div className="grid-zone__content maintenance-jobs">
              <div className="maintenance-jobs__actions">
                <RuxButton
                  className="rux-button"
                  onClick={() => {
                    props.changeView('scheduleJob');
                  }}
                >
                  Schedule Job
                </RuxButton>
              </div>
              <div className="maintenance-jobs__list">
                {maintenanceJobs &&
                  maintenanceJobs.map(function (job) {
                    return (
                      <div key={job.id} className="job-card">
                        <h3 className="job-card__id">Job ID {job.id}</h3>
                        <h4 className="job-card__progress">
                          {mapJobProgress(job.progressStep)}
                        </h4>
                        <div className="job-card__meta">
                          <label className="job-card__meta__label">
                            Job Type
                          </label>
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
                            props.changeView('viewJobDetails');
                            props.setCurrentJob(job);
                          }}
                        >
                          View Details
                        </RuxButton>
                      </div>
                    );
                  })}
              </div>
            </div>
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
                        <div className="maintenance-log__event__name">
                          {job.id}
                        </div>
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
        </div>
      </div>
    </>
  );
};

export default MaintenanceJobView;
