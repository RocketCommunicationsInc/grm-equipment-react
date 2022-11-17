import './ScheduleJob.scss';
import {
  RuxSelect,
  RuxOption,
  RuxTextarea,
  RuxCheckbox,
  RuxButton,
  RuxButtonGroup,
  RuxSlider,
  RuxCheckboxGroup,
  RuxRadio,
  RuxRadioGroup,
} from '@astrouxds/react';
import { mapJobType, formatDayOfYear, formatYear } from '../../util/util';

import ConflictsTable from './ConflictsTable';

const ScheduleJob = ({ cancelEdit }) => {
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
              <br />

              <div className="job-details__meta">
                <div className="rux-checkbox">
                  <RuxCheckbox name="checkbox">Follow</RuxCheckbox>
                </div>
              </div>

              <div className="job-details__meta">
                <RuxSlider
                  id="axis-labels"
                  axisLabels={['0', '25', '50', '75', '100']}
                  max="100"
                  min="0"
                  step="25"
                  help-text="Example help text: Move the slider to update the value"
                  error-text=""
                  label="Adjust completion level of job:"
                />
              </div>
              <br />

              <div className="job-details__meta">
                <div className="rux-checkbox">
                  <RuxCheckboxGroup
                    name="checkboxes"
                    label="Follow these status indicators in this job:"
                  >
                    <RuxCheckbox name="checkbox">RF</RuxCheckbox>
                    <RuxCheckbox name="checkbox">Digital</RuxCheckbox>
                    <RuxCheckbox name="checkbox">Comms</RuxCheckbox>
                    <RuxCheckbox name="checkbox">Facilities</RuxCheckbox>
                  </RuxCheckboxGroup>
                </div>
              </div>
              <br />
              <div className="job-details__meta">
                <RuxRadio value="one" name="radios">
                  kjjj
                </RuxRadio>
                <div className="rux-checkbox">
                  <RuxRadioGroup
                    name="radios"
                    label="Number of job status updates you would like to receive per day:"
                  >
                    <RuxRadio value="one" name="radios">
                      One
                    </RuxRadio>
                    <RuxRadio value="two" name="radios">
                      Two
                    </RuxRadio>
                    <RuxRadio value="three" name="radios">
                      Three
                    </RuxRadio>
                    <RuxRadio value="four" name="radios">
                      Four
                    </RuxRadio>
                  </RuxRadioGroup>
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

      <RuxButtonGroup className="job-details-request--edit-actions">
        <RuxButton secondary onClick={cancelEdit}>
          Cancel
        </RuxButton>

        <RuxButton onClick={cancelEdit}>Submit Request</RuxButton>
      </RuxButtonGroup>
    </>
  );
};

export default ScheduleJob;
