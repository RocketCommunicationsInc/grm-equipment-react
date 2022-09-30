import './ScheduleJob.scss';
import {
  RuxSelect,
  RuxOption,
  RuxTextarea,
  RuxCheckbox,
  RuxButton,
} from '@astrouxds/react';
import { mapJobType, formatDayOfYear, formatYear } from '../../util/util';

import ConflictsTable from './ConflictsTable';

const ScheduleJob = () => {
  return (
    <>
      <div className="grid-zone-wrap">
        <div className="grid-zone__label">Schedule Maintenance Job</div>
        <div className="grid-zone__content job-details">
          <div className="grid-zone grid-zone--fixed grid-zone--job-details">
            <div className="job-details-request">
              <h4 className="job-details-request__subheader">
                1. Select Job type
              </h4>
              <div className="job-details__meta rux-form-field">
                <label className="job-details__meta__label">Job Type</label>
                <div className="job-details__meta__input">
                  <RuxSelect
                    input-id="jobTypeSelect"
                    className="rux-select"
                    required={false}
                    value="default"
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
              <div className="job-details__meta rux-form-field">
                <label className="job-details__meta__label">Description</label>
                <div className="job-details__meta__input job-details__meta__value--extended">
                  <RuxTextarea
                    className="textarea"
                    placeholder="Enter Description"
                  ></RuxTextarea>
                </div>
              </div>

              <h4 className="job-details-request__subheader">2. Select Time</h4>
              <div className="job-details__meta rux-form-field">
                <label className="job-details__meta__label">Year</label>
                <div className="job-details__meta__input">
                  <input
                    className="job-request__meta__value"
                    type="number"
                    min="2019"
                    max="2050"
                    placeholder={formatYear(Date.now())}
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="job-details__meta rux-form-field">
                <label className="job-details__meta__label">DOY</label>
                <div className="job-details__meta__input">
                  <input
                    className="job-request__meta__value"
                    type="number"
                    min="1"
                    max="366"
                    placeholder={formatDayOfYear(Date.now())}
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="job-details__meta rux-form-field">
                <label className="job-details__meta__label">Start</label>
                <div className="job-details__meta__input">
                  <input
                    className="job-request__meta__value"
                    type="text"
                    placeholder="HH:MM:SS"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="job-details__meta rux-form-field">
                <label className="job-details__meta__label">Stop</label>
                <div className="job-details__meta__input">
                  <input
                    className="job-request__meta__value"
                    type="text"
                    placeholder="HH:MM:SS"
                    defaultValue=""
                  />
                </div>
              </div>

              <h4 className="job-details-request__subheader">
                3. Select Technician
              </h4>
              <div className="job-details__meta rux-form-field">
                <label className="job-details__meta__label">Technician</label>
                <div className="job-details__meta__input">
                  <RuxSelect
                    input-id="jobTypeSelect"
                    className="rux-select"
                    required={false}
                    value="default"
                  >
                    <RuxOption
                      key="selectDefailt"
                      value="default"
                      label="Select"
                      selected
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
              <div className="job-details__meta">
                <div className="rux-checkbox">
                  <RuxCheckbox name="checkbox">Follow</RuxCheckbox>
                </div>
              </div>
              <div className="job-details-request__actions">
                <RuxButton className="rux-button">
                  Calculate Conflicts
                </RuxButton>
              </div>
            </div>
          </div>
          <ConflictsTable />
        </div>
      </div>

      <div className="job-details-request--edit-actions">
        <rux-button className="rux-button" secondary="" on-click="cancelEdit">
          Cancel
        </rux-button>

        <rux-button className="rux-button" on-click="saveJobDetails">
          Submit Request
        </rux-button>
      </div>
    </>
  );
};

export default ScheduleJob;
