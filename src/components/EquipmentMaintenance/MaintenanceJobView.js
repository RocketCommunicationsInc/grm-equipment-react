import { RuxButton } from "@astrouxds/react";
import { getOne } from '../../services/equipment';
import {mapJobProgress, mapJobType, formatDayOfYear, formatYear, formatReadableTime} from '../../util/util';
import './EquipmentMaintenance.scss';


const maintenanceObject = getOne();
const maintenanceJobs = maintenanceObject.maintenanceJobs;
const maintenanceLog = maintenanceObject.maintenanceLog;

const MaintenanceJobView = () => {

  return (
    <>
      <div class="grid-zone-wrap">
				<div class="grid-zone__label">Maintenance</div>
					<div class="grid-zone__content">	
		
  					<div class="grid-zone grid-zone--maintenance-jobs grid-zone--fixed">
							<div class="grid-zone__label">
								Jobs
							</div>
								
							<div class="grid-zone__content maintenance-jobs">
								<div class="maintenance-jobs__actions">
									<RuxButton class="rux-button" onClick="createJob">Schedule Job</RuxButton>
								</div>
								<div class="maintenance-jobs__list">		
									{maintenanceJobs ? maintenanceJobs.map(function(job) {

              		return (
									<div class="job-card">
										<h3 class="job-card__id">Job ID {job.id}</h3>
										<h4 class="job-card__progress">{mapJobProgress(job.progressStep)}</h4>
										<div class="job-card__meta">
											<label class="job-card__meta__label">Job Type</label>
											<div class="job-card__meta__value">{mapJobType(job.type)}</div>
										</div>
										<div class="job-card__meta">
											<label class="job-card__meta__label">Year</label>
											<div class="job-card__meta__value">{formatYear(job.startTime)}</div>
										</div>
										<div class="job-card__meta">
											<label class="job-card__meta__label">DOY</label>
											<div class="job-card__meta__value">{formatDayOfYear(job.endTime)}</div>
										</div>
										<div class="job-card__meta">
											<label class="job-card__meta__label">Start</label>
											<div class="job-card__meta__value">{formatReadableTime(job.startTime)}</div>
										</div>
										<div class="job-card__meta">
											<label class="job-card__meta__label">Stop</label>
											<div class="job-card__meta__value">{formatReadableTime(job.endTime)}</div>
										</div>
										<RuxButton class="rux-button" on-click="viewJobDetails">View Details</RuxButton>
									</div>
              );
            }) : ''}
            
				</div>
			</div>
		
		</div>

		<div class="grid-zone grid-zone--maintenance-history grid-zone--fixed">
		<div class="grid-zone__label">
			Maintenance History
		</div>
		<div class="grid-zone__content maintenance-log">
			<header class="maintenance-log-header">
				<div class="maintenance-log__header-labels">
					<div class="maintenance-log__event__name">Name</div>
					<div class="maintenance-log__event__type">Type</div>
					<div class="maintenance-log__event__created">Created</div>
					<div class="maintenance-log__event__start">Started</div>
					<div class="maintenance-log__event__stop">Stopped</div>
					<div class="maintenance-log__event__technician">Technician</div>
					<div class="maintenance-log__event__description">Description</div>
				</div>
			</header>
			<ol class="maintenance-log__events">
				{maintenanceLog ? maintenanceLog.map(function(job) {
					return (
						<li class="maintenance-log__event">
							<div class="maintenance-log__event__name">{job.id}</div>
							<div class="maintenance-log__event__type">{mapJobType(job.type)}</div>
							<div class="maintenance-log__event__created">{formatDayOfYear(job.createdTime)} {formatReadableTime(job.createdTime)}</div>
							<div class="maintenance-log__event__start">{formatDayOfYear(job.startTime)} {formatReadableTime(job.startTime)}</div>
							<div class="maintenance-log__event__stop">{formatDayOfYear(job.endTime)} {formatReadableTime(job.endTime)}</div>
							<div class="maintenance-log__event__technician">{job.technician}</div>
							<div class="maintenance-log__event__description">{job.description}</div>
						</li>
					)
				}) : ''
			}			
			</ol>
		</div>
	</div>

	</div>
</div>
    </>
  );
};

export default MaintenanceJobView;