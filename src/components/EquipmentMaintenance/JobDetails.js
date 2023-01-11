import './JobDetails.scss';
import {
  RuxLog,
  RuxCheckbox,
  RuxButton,
  RuxButtonGroup,
  RuxInput,
  RuxTextarea,
  RuxContainer,
} from '@astrouxds/react';
import {
  mapJobType,
  formatDayOfYear,
  formatYear,
  formatReadableTime,
} from '../../util/util';

import { useState } from 'react';
import ConflictsTable from './ConflictsTable';
import ScheduleJob from './ScheduleJob';
import PanelHeader from '../../common/PanelHeader';

const JobDetails = ({ currentJob, cancelEdit, events }) => {
  const [allowModify, setAllowModify] = useState(false);

  function editJob() {
    setAllowModify(!allowModify);
  }

  if (allowModify) {
    return <ScheduleJob cancelEdit={cancelEdit} currentJob={currentJob} />;
  } else {
    return (
      <main className="Job-Detail-grid">
        <section className="Job-Detail-grid__left-panel">
          <RuxContainer className="Job-details__parent">
            <PanelHeader heading={'Job Details'}></PanelHeader>
            <div className="Job-details__jobDetails">
              <h4>{'Maintenance Job ID #' + currentJob.id}</h4>
              <svg
                className={'progress progress--step-' + currentJob.progressStep}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="-92.7 615 678 90"
              >
                <path
                  fill="#172635"
                  stroke="#52667A"
                  d="M-30.2,656.1l0.1-0.4h90.8l0.1,0.4c2.5,13.7,16.1,25.6,30.5,25.6s28.8-12.1,30.5-25.6
								l0.1-0.4h90.5l0.1,0.4c3.2,14.8,16.4,25.6,31.8,25.6s28.6-10.8,31.8-25.6l0.1-0.4h90.3l0.1,0.4c3.2,14.8,16.4,25.6,31.8,25.6
								c15.4,0,28.6-10.8,31.8-25.6l0.1-0.4h90.3l0.1,0.4c3.2,14.8,16.4,25.6,31.8,25.6c17.9,0,32.5-14.6,32.5-32.5s-14.6-32.5-32.5-32.5
								c-15.7,0-29.2,11.3-32,26.6l-0.1,0.4h-89.9l-0.1-0.4c-2.8-15.3-16.2-26.6-32-26.6c-15.7,0-29.2,11.3-32,26.6l-0.1,0.4h-89.9
								l-0.1-0.4c-2.8-15.3-16.2-26.6-32-26.6s-29.2,11.3-32,26.6l-0.1,0.4h-89.8l-0.1-0.4c-2.4-15.2-15.6-26.6-31.1-26.6
								s-28.7,11.4-31.1,26.6l-0.1,0.4h-89.6l-0.1-0.4c-2.4-15.2-15.6-26.6-31.1-26.6c-17.4,0-31.5,14.1-31.5,31.5s14.1,33.5,31.5,33.5
								C-46.3,681.8-32.4,669.9-30.2,656.1z"
                />
                <polygon
                  className="complete step5 step4 step3 step2 step1"
                  points="-67.9,656.9 -46,635 -42.4,638.5 -64.4,660.4 -64.4,660.5 -67.9,664 -81.4,650.5 -77.9,647 "
                />
                <polygon
                  className="complete step5 step4 step3 step2"
                  points="84.3,656.9 106.3,635 109.8,638.5 87.8,660.4 87.9,660.5 84.4,664 70.8,650.5 74.3,647 "
                />
                <polygon
                  className="complete step5 step4 step3"
                  points="237.6,656.9 259.5,635 263.1,638.5 241.1,660.4 241.2,660.5 237.6,664 224.1,650.5 227.6,647 "
                />
                <polygon
                  className="complete step5 step4"
                  points="390.8,656.9 412.8,635 416.3,638.5 394.4,660.4 394.4,660.5 390.9,664 377.3,650.5 380.9,647 "
                />
                <polygon
                  className="complete step5"
                  points="544.1,656.9 566.1,635 569.6,638.5 547.6,660.4 547.7,660.5 544.2,664 530.6,650.5 534.1,647 "
                />
                <circle className="current step1" cx="-60.9" cy="649" r="24" />
                <circle className="current step2" cx="91.3" cy="649" r="24" />
                <circle className="current step3" cx="244.6" cy="649" r="24" />
                <circle className="current step4" cx="397.8" cy="649" r="24" />
                <circle className="current step5" cx="552.2" cy="649" r="24" />
                <text
                  x="-92.9"
                  y="702"
                  className="progress-label"
                  fontSize="14"
                  fill="white"
                >
                  Submitted
                </text>
                <text
                  x="59.3"
                  y="702"
                  className="progress-label"
                  fontSize="14"
                  fill="white"
                >
                  Approved
                </text>
                <text
                  x="222.6"
                  y="702"
                  className="progress-label"
                  fontSize="14"
                  fill="white"
                >
                  Started
                </text>
                <text
                  x="370.8"
                  y="702"
                  className="progress-label"
                  fontSize="14"
                  fill="white"
                >
                  Stopped
                </text>
                <text
                  x="532.2"
                  y="702"
                  className="progress-label"
                  fontSize="14"
                  fill="white"
                >
                  Online
                </text>
              </svg>

              <RuxInput
                className="Job-details__input"
                value={mapJobType(currentJob.type)}
                readonly={true}
                label="Job Type"
              ></RuxInput>

              <RuxTextarea
                className="Job-details__input"
                label="Description"
                value={currentJob.description}
                disabled={true}
                size="large"
              ></RuxTextarea>

              <RuxInput
                className="Job-details__input"
                value={formatYear(currentJob.startTime)}
                readonly={true}
                label="Year"
              ></RuxInput>

              <RuxInput
                className="Job-details__input"
                value={formatDayOfYear(currentJob.startTime)}
                readonly={true}
                label="DOY"
              ></RuxInput>

              <RuxInput
                className="Job-details__input"
                value={formatReadableTime(currentJob.startTime)}
                readonly={true}
                label="Start"
              ></RuxInput>

              <RuxInput
                className="Job-details__input"
                value={formatReadableTime(currentJob.endTime)}
                readonly={true}
                label="Stop"
              ></RuxInput>

              <RuxInput
                className="Job-details__input"
                value={currentJob.technician}
                readonly={true}
                label="Technician"
              ></RuxInput>

              <RuxCheckbox name="checkbox">Follow</RuxCheckbox>
            </div>
            <br />
            <div className="job-details__equipment-event-log">
              <p>Event Log</p>
              <br />
              <RuxLog className="rux-log" data={events.data} />
            </div>
            <br />
            <RuxButtonGroup>
              <RuxButton className="rux-button" secondary onClick={cancelEdit}>
                Cancel
              </RuxButton>
              <RuxButton className="rux-button" onClick={editJob}>
                Modify
              </RuxButton>
            </RuxButtonGroup>
          </RuxContainer>
        </section>

        <section className="Job-Detail-grid__right-panel">
          <ConflictsTable />
        </section>
      </main>
    );
  }
};

export default JobDetails;
