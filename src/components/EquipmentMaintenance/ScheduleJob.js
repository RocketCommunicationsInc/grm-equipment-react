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
    <main className="Schedule-grid">
      <section>
        <div className="Schedule-job__parent">
          <div>
            <PanelHeader heading={'Schedule Maintenance Job'} />
            <div className="Schedule-job__jobDetails">
              <h4>1. Select Job type</h4>

              <RuxSelect className="Schedule-job__input" label="Job Type">
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

              <h4>3. Select Technician</h4>
              <RuxSelect
                className="Schedule-job__input"
                label="Technician"
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

              <h4>4. Follow Job</h4>
              <p>
                Would you like to follow this job? Following will send all
                updates and alerts regarding this job to the GRM Dashboard. If
                you do not follow this job, you must view the job from the
                Equipment Manager to be notified of any updates or alerts.
              </p>
              <br />
              <RuxCheckbox name="checkbox">Follow</RuxCheckbox>
              <br />
              <br />
              <RuxButtonGroup>
                <RuxButton>Calculate Conflicts</RuxButton>
                <RuxButton onClick={cancelEdit}>Submit Request</RuxButton>

                <RuxButton secondary onClick={cancelEdit}>
                  Cancel
                </RuxButton>
              </RuxButtonGroup>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ConflictsTable />
      </section>
    </main>
  );
};

export default ScheduleJob;
