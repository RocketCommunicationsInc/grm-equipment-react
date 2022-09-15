import { RuxButton } from "@astrouxds/react";
import { getOne } from '../../services/equipment';
import {mapJobProgress, mapJobType, formatDayOfYear, formatYear, formatReadableTime} from '../../util/util';
import './EquipmentMaintenance.scss';


const maintenanceObject = getOne();
const maintenanceJobs = maintenanceObject.maintenanceJobs;

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

	</div>
</div>
    </>
  );
};

export default MaintenanceJobView;