import './ScheduleJob.scss';
import { RuxLog } from '@astrouxds/react';
import {
  mapJobType,
  formatDayOfYear,
  formatYear,
  formatReadableTime,
  capitalize,
} from '../../util/util';

import { getAll as getAllConflicts } from '../../services/jobs';
import { populateLog as getAllLogs } from '../../services/log';

let conflicts = getAllConflicts();
let logs = getAllLogs();

console.log(logs);

const ScheduleJob = (props) => {
  return (
    <>
      <div class="grid-zone-wrap">
        <div class="grid-zone__label">
          {props.currentView === 'scheduleJob'
            ? 'Schedule Maintenance Job'
            : 'Maintenance Job ID #' + props.currentJob.id}
        </div>
        <div class="grid-zone__content job-details">
          <div class="grid-zone grid-zone--fixed grid-zone--job-details">
            <div className="grid-zone__label">Job Details</div>
            <div class="job-details__content">
              <div class="job-details-overview">
                <svg
                  className={
                    'progress progress--step-' + props.currentJob.progressStep
                  }
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
                    class="complete step5 step4 step3 step2 step1"
                    points="-67.9,656.9 -46,635 -42.4,638.5 -64.4,660.4 -64.4,660.5 -67.9,664 -81.4,650.5 -77.9,647 "
                  />
                  <polygon
                    class="complete step5 step4 step3 step2"
                    points="84.3,656.9 106.3,635 109.8,638.5 87.8,660.4 87.9,660.5 84.4,664 70.8,650.5 74.3,647 "
                  />
                  <polygon
                    class="complete step5 step4 step3"
                    points="237.6,656.9 259.5,635 263.1,638.5 241.1,660.4 241.2,660.5 237.6,664 224.1,650.5 227.6,647 "
                  />
                  <polygon
                    class="complete step5 step4"
                    points="390.8,656.9 412.8,635 416.3,638.5 394.4,660.4 394.4,660.5 390.9,664 377.3,650.5 380.9,647 "
                  />
                  <polygon
                    class="complete step5"
                    points="544.1,656.9 566.1,635 569.6,638.5 547.6,660.4 547.7,660.5 544.2,664 530.6,650.5 534.1,647 "
                  />
                  <circle class="current step1" cx="-60.9" cy="649" r="24" />
                  <circle class="current step2" cx="91.3" cy="649" r="24" />
                  <circle class="current step3" cx="244.6" cy="649" r="24" />
                  <circle class="current step4" cx="397.8" cy="649" r="24" />
                  <circle class="current step5" cx="552.2" cy="649" r="24" />
                  <text
                    x="-92.9"
                    y="702"
                    class="progress-label"
                    font-size="14"
                    fill="white"
                  >
                    Submitted
                  </text>
                  <text
                    x="59.3"
                    y="702"
                    class="progress-label"
                    font-size="14"
                    fill="white"
                  >
                    Approved
                  </text>
                  <text
                    x="222.6"
                    y="702"
                    class="progress-label"
                    font-size="14"
                    fill="white"
                  >
                    Started
                  </text>
                  <text
                    x="370.8"
                    y="702"
                    class="progress-label"
                    font-size="14"
                    fill="white"
                  >
                    Stopped
                  </text>
                  <text
                    x="532.2"
                    y="702"
                    class="progress-label"
                    font-size="14"
                    fill="white"
                  >
                    Online
                  </text>
                </svg>

                <div class="job-details__meta">
                  <label class="job-details__meta__label">Job Type</label>
                  <div class="job-details__meta__value">
                    {' '}
                    {mapJobType(props.currentJob.type)}
                  </div>
                </div>
                <div class="job-details__meta">
                  <label class="job-details__meta__label">Description</label>
                  <div class="job-details__meta__value job-details__meta__value--extended">
                    {props.currentJob.description}
                  </div>
                </div>
                <div class="job-details__meta">
                  <label class="job-details__meta__label">Year</label>
                  <div class="job-details__meta__value">
                    {formatYear(props.currentJob.startTime)}
                  </div>
                </div>
                <div class="job-details__meta">
                  <label class="job-details__meta__label">DOY</label>
                  <div class="job-details__meta__value">
                    {formatDayOfYear(props.currentJob.startTime)}
                  </div>
                </div>
                <div class="job-details__meta">
                  <label class="job-details__meta__label">Start</label>
                  <div class="job-details__meta__value">
                    {formatReadableTime(props.currentJob.startTime)}
                  </div>
                </div>
                <div class="job-details__meta">
                  <label class="job-details__meta__label">Stop</label>
                  <div class="job-details__meta__value">
                    {formatReadableTime(props.currentJob.endTime)}
                  </div>
                </div>
                <div class="job-details__meta">
                  <label class="job-details__meta__label">Technician</label>
                  <div class="job-details__meta__value">Ahmet Ducat</div>
                </div>
                <div class="job-details__meta">
                  <div class="rux-checkbox">
                    <input
                      checked$="{{job.isFollowing::change}}"
                      type="checkbox"
                      name="following--viewDetails"
                      id="following--viewDetails"
                    />
                    <label
                      class="job-details__meta__label"
                      for="following--viewDetails"
                    >
                      Follow
                    </label>
                  </div>
                </div>
              </div>
              <div class="job-details__equipment-event-log">
                <div class="job-details__equipment-event-log__label">
                  Event Log
                </div>
                <RuxLog class="rux-log" data={logs} />
              </div>

              <div class="job-details-request">
                <h4 class="job-details-request__subheader">
                  1. Select Job type
                </h4>
                <div class="job-details__meta rux-form-field">
                  <label class="job-details__meta__label">Job Type</label>
                  <div class="job-details__meta__input">
                    <select id="jobType" class="rux-select" value="default">
                      <option value="default" selected>
                        Select
                      </option>
                      <option
                        value$="{{ type }}"
                        selected$="{is(type, job.type)}"
                      >
                        PMR 1
                      </option>
                    </select>
                  </div>
                </div>
                <div class="job-details__meta rux-form-field">
                  <label class="job-details__meta__label">Description</label>
                  <div class="job-details__meta__input job-details__meta__value--extended">
                    <textarea
                      class="rux-text-entry"
                      placeholder="Enter Description"
                    >
                      Example job description
                    </textarea>
                  </div>
                </div>

                <h4 class="job-details-request__subheader">2. Select Time</h4>
                <div class="job-details__meta rux-form-field">
                  <label class="job-details__meta__label">Year</label>
                  <div class="job-details__meta__input">
                    <input
                      class="job-request__meta__value"
                      type="number"
                      min="2019"
                      max="2050"
                      placeholder$="{formatYear(now)}"
                    />
                    <input
                      class="job-request__meta__value"
                      type="number"
                      min="2019"
                      max="2050"
                      value$="{formatYear(job.startTime)}"
                    />
                  </div>
                </div>
                <div class="job-details__meta rux-form-field">
                  <label class="job-details__meta__label">DOY</label>
                  <div class="job-details__meta__input">
                    <input
                      class="job-request__meta__value"
                      type="number"
                      min="1"
                      max="366"
                      placeholder$="{formatDayOfYear(now)}"
                    />
                    <input
                      class="job-request__meta__value"
                      type="number"
                      min="1"
                      max="366"
                      value$="{formatDayOfYear(job.startTime)}"
                    />
                  </div>
                </div>
                <div class="job-details__meta rux-form-field">
                  <label class="job-details__meta__label">Start</label>
                  <div class="job-details__meta__input">
                    <input
                      class="rux-text-entry"
                      type="text"
                      placeholder="HH:MM:SS"
                    />
                    <input
                      class="rux-text-entry"
                      type="text"
                      value={formatReadableTime(props.currentJob.startTime)}
                    />
                  </div>
                </div>
                <div class="job-details__meta rux-form-field">
                  <label class="job-details__meta__label">Stop</label>
                  <div class="job-details__meta__input">
                    <input
                      class="rux-text-entry"
                      type="text"
                      placeholder="HH:MM:SS"
                    />
                    <input
                      class="rux-text-entry"
                      type="text"
                      value={formatReadableTime(props.currentJob.endTime)}
                    />
                  </div>
                </div>

                <h4 class="job-details-request__subheader">
                  3. Select Technician
                </h4>
                <div class="job-details__meta rux-form-field">
                  <label class="job-details__meta__label">Technician</label>
                  <div class="job-details__meta__input">
                    <select
                      id="jobTechnician"
                      class="rux-select"
                      value="default"
                    >
                      <option value="default" selected>
                        Select
                      </option>
                      <option
                        value$="{{ technician }}"
                        selected$="{is(technician, job.technician)}"
                      >
                        Ahmet Ducatttt
                      </option>
                    </select>
                  </div>
                </div>

                <h4 class="job-details-request__subheader">4. Follow Job</h4>
                <p class="job-details-request__content">
                  Would you like to follow this job? Following will send all
                  updates and alerts regarding this job to the GRM Dashboard. If
                  you do not follow this job, you must view the job from the
                  Equipment Manager to be notified of any updates or alerts.
                </p>
                <div class="job-details__meta">
                  <div class="rux-checkbox">
                    <input
                      checked$="{{job.isFollowing::change}}"
                      type="checkbox"
                      name="following--editDetails"
                      id="following--editDetails"
                    />
                    <label
                      class="job-details__meta__label"
                      for="following--editDetails"
                    >
                      Follow
                    </label>
                  </div>
                </div>
                <div class="job-details-request__actions">
                  <rux-button class="rux-button" on-click="takeAction">
                    Calculate Conflicts
                  </rux-button>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-zone grid-zone--fixed grid-zone--conflicts">
            <div class="grid-zone__label">Conflicts</div>
            <div class="grid-zone__content">
              <div class="grid-zone__content conflict-log">
                <header class="conflict-log-header">
                  <div class="conflict-log__header-labels">
                    <div class="conflict-log__event__iron">IRON</div>
                    <div class="conflict-log__event__ground">GS</div>
                    <div class="conflict-log__event__rev">Rev</div>
                    <div class="conflict-log__event__equipment">
                      Equipment String
                    </div>
                    <div class="conflict-log__event__state">State</div>
                    <div class="conflict-log__event__doy">DOY</div>
                    <div class="conflict-log__event__start">Start</div>
                    <div class="conflict-log__event__aos">AOS</div>
                    <div class="conflict-log__event__los">LOS</div>
                    <div class="conflict-log__event__stop">Stop</div>
                  </div>
                </header>
                <ol class="conflict-log__events">
                  {conflicts.map((conflict) => {
                    return (
                      <li class="conflict-log__event">
                        <div class="conflict-log__event__iron">
                          {conflict.iron}
                        </div>
                        <div class="conflict-log__event__ground">
                          {conflict.groundStation}
                        </div>
                        <div class="conflict-log__event__rev">
                          {conflict.rev}
                        </div>
                        <div class="conflict-log__event__equipment">
                          {conflict.equipmentString}
                        </div>
                        <div class="conflict-log__event__state">
                          {capitalize(conflict.state)}
                        </div>
                        <div class="conflict-log__event__doy">
                          {formatDayOfYear(conflict.startTime)}
                        </div>
                        <div class="conflict-log__event__start">
                          {formatReadableTime(conflict.startTime)}
                        </div>
                        <div class="conflict-log__event__aos">
                          {formatReadableTime(conflict.aos)}
                        </div>
                        <div class="conflict-log__event__los">
                          {formatReadableTime(conflict.los)}
                        </div>
                        <div class="conflict-log__event__stop">
                          {formatReadableTime(conflict.endTime)}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div class="job-details-request--edit-actions">
          <rux-button class="rux-button" secondary="" on-click="cancelEdit">
            Cancel
          </rux-button>
          <rux-button class="rux-button" secondary="" on-click="exitJobDetails">
            Cancel
          </rux-button>

          <rux-button class="rux-button" on-click="saveJobDetails">
            Submit Request
          </rux-button>

          <rux-button class="rux-button" secondary="" on-click="exitJobDetails">
            Cancel
          </rux-button>
          <rux-button class="rux-button" on-click="editJob">
            Modify
          </rux-button>
        </div>
      </div>
    </>
  );
};

export default ScheduleJob;
