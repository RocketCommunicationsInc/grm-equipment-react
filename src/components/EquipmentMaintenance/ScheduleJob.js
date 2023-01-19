import './ScheduleJob.scss';
import PanelHeader from '../../common/PanelHeader';

import {
  RuxSelect,
  RuxOption,
  RuxTextarea,
  RuxCheckbox,
  RuxButton,
  RuxInput,
  RuxButtonGroup,
  RuxContainer,
} from '@astrouxds/react';
import {
  mapJobType,
  formatDayOfYear,
  formatYear,
  formatReadableTime,
} from '../../util/util';

import ConflictsTable from './ConflictsTable';
import { useState } from 'react';

const ScheduleJob = ({ cancelEdit, currentJob, currentEq }) => {
  const [jobDescription, setJobDescription] = useState(
    currentJob ? currentJob.description : ''
  );

  /* Here, we retrieve all technicians dynamically, replacing the earlier hardcoding. The Set filters out duplicate technician names from the array of
  technicians, and prevents duplicate key errors */
  const technicians = [
    ...new Set(currentEq.data.maintenanceJobs.map((job) => job.technician)),
  ];

  const handleTextareaChange = (jobDescription) => {
    setJobDescription(jobDescription);
  };
  return (
    <div className="Schedule-grid">
      <section className="Schedule-grid__left-panel">
        <div className="Schedule-job__parent">
          <PanelHeader heading={'Schedule Maintenance Job'} />

          <RuxContainer>
            <div className="Schedule-job__jobDetails">
              <h4>1. Select Job type</h4>

              <RuxSelect
                className="Schedule-job__input"
                label="Job Type"
                value={currentJob ? mapJobType(currentJob.type) : 'default'}
              >
                <RuxOption value="default" label="Select" selected />
                {[1, 2, 3, 4, 5].map((i) => {
                  return (
                    <RuxOption
                      key={i}
                      value={mapJobType(i)}
                      label={mapJobType(i)}
                    />
                  );
                })}
              </RuxSelect>
              <RuxTextarea
                label="Description"
                className="Schedule-job__input"
                onRuxinput={(e) => handleTextareaChange(e.target.value)}
                placeholder="Enter Description"
                value={jobDescription}
              />

              <h4>2. Select Time</h4>

              <RuxInput
                label="Year"
                className="Schedule-job__input"
                value={
                  currentJob
                    ? formatYear(currentJob.startTime)
                    : formatYear(Date.now())
                }
              ></RuxInput>

              <RuxInput
                label="DOY"
                className="Schedule-job__input"
                value={
                  currentJob
                    ? formatDayOfYear(currentJob.startTime)
                    : formatDayOfYear(Date.now())
                }
              ></RuxInput>

              <RuxInput
                label="Start"
                className="Schedule-job__input"
                value={
                  currentJob
                    ? formatReadableTime(currentJob.startTime)
                    : 'HH:MM:SS'
                }
              ></RuxInput>

              <RuxInput
                label="End"
                className="Schedule-job__input"
                value={
                  currentJob
                    ? formatReadableTime(currentJob.endTime)
                    : 'HH:MM:SS'
                }
              ></RuxInput>

              <h4>3. Select Technician</h4>
              <RuxSelect
                className="Schedule-job__input"
                label="Technician"
                value={currentJob ? currentJob.technician : 'default'}
              >
                <RuxOption value="default" label="Select" selected={true} />
                {technicians.map((technician) => {
                  return (
                    <RuxOption
                      key={technician}
                      value={technician}
                      label={technician}
                    />
                  );
                })}
              </RuxSelect>

              <h4>4. Follow Job</h4>
              <p className="">
                Would you like to follow this job? Following will send all
                updates and alerts regarding this job to the GRM Dashboard. If
                you do not follow this job, you must view the job from the
                Equipment Manager to be notified of any updates or alerts.
              </p>
              <RuxCheckbox className="follow-checkbox" name="checkbox">
                Follow
              </RuxCheckbox>
              <RuxButtonGroup>
                <RuxButton>Calculate Conflicts</RuxButton>
                <RuxButton onClick={cancelEdit}>Submit Request</RuxButton>

                <RuxButton secondary onClick={cancelEdit}>
                  Cancel
                </RuxButton>
              </RuxButtonGroup>
            </div>
          </RuxContainer>
        </div>
      </section>

      <section className="Schedule-grid__right-panel">
        <ConflictsTable />
      </section>
    </div>
  );
};

export default ScheduleJob;
