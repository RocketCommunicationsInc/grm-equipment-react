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
  RuxIcon,
} from '@astrouxds/react';
import {
  mapJobType,
  formatDayOfYear,
  formatYear,
  formatReadableTime,
} from '../../util/util';

import ConflictsTable from './ConflictsTable';
import { useState } from 'react';

const ScheduleJob = ({ cancelEdit, currentJob }) => {
  const [jobDescription, setJobDescription] = useState(
    currentJob ? currentJob.description : ''
  );

  const handleTextareaChange = (jobDescription) => {
    setJobDescription(jobDescription);
  };
  return (
    <>
      <div className="Schedule-job__path">
        <span onClick={cancelEdit} className="home-page-link">
          <RuxIcon className="rux-icon" icon="arrow-back" size="small" />
          Equipment Manager
        </span>
        <span> / Schedule Maintenance </span>
      </div>
      <div className="Schedule-job__parent">
        <PanelHeader heading={'Schedule Maintenance Job'} />
        <div className="Schedule-job__container grid-zone__content job-details">
          <div className="grid-zone grid-zone--fixed grid-zone--job-details">
            <div className="job-details-request">
              <h4>1. Select Job type</h4>
              <div>
                <div className="job-details__meta__input">
                  <RuxSelect
                    input-id="jobTypeSelect"
                    className="Schedule-job__input"
                    label="Job Type"
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
                </div>
              </div>
              <RuxTextarea
                label="Description"
                className="Schedule-job__input"
                onRuxinput={(e) => handleTextareaChange(e.target.value)}
                placeholder="Enter Description"
                value={jobDescription}
              ></RuxTextarea>

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

              <h4 className="job-details-request__subheader">
                3. Select Technician
              </h4>
              <div className="job-details__meta rux-form-field">
                <div className="job-details__meta__input">
                  <RuxSelect
                    className="Schedule-job__input"
                    label="Technician"
                    input-id="jobTypeSelect"
                    required={false}
                  >
                    <RuxOption
                      key="selectDefailt"
                      value="default"
                      label="Select"
                      selected={true}
                    />

                    <RuxOption
                      key="Ahmet Ducat"
                      value="Ahmet Ducat"
                      label="Ahmet Ducat"
                    />
                    <RuxOption
                      key="Lara Pazzi"
                      value="Lara Pazzi"
                      label="Lara Pazzi"
                    />
                    <RuxOption
                      key="Cristofer Sandoval"
                      value="Cristofer Sandoval"
                      label="Cristofer Sandoval"
                    />
                    <RuxOption
                      key="Andie Spatzig"
                      value="Andie Spatzig"
                      label="Andie Spatzig"
                    />
                  </RuxSelect>
                </div>
              </div>

              <h4 className="job-details-request__subheader">4. Follow Job</h4>
              <p className="job-details-request__content">
                Would you like to follow this job? Following will send all
                updates and alerts regarding this job to the GRM Dashboard. If
                you do not follow this job, you must view the job from the
                Equipment Manager to be notified of any updates or alerts.
              </p>
              <RuxCheckbox name="checkbox">Follow</RuxCheckbox>
              <br />
              <br />
              <RuxButton className="rux-button">Calculate Conflicts</RuxButton>
            </div>
          </div>
          <ConflictsTable />
        </div>

        <RuxButtonGroup className="job-details-request--edit-actions">
          <RuxButton secondary onClick={cancelEdit}>
            Cancel
          </RuxButton>

          <RuxButton onClick={cancelEdit}>Submit Request</RuxButton>
        </RuxButtonGroup>
      </div>
    </>
  );
};

export default ScheduleJob;
