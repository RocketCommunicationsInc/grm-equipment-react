import { RuxOption, RuxSelect } from '@astrouxds/react';
import './EquipmentContacts.scss';

const EquipmentContacts = () => {
  return (
    <>
      <div className="grid-zone grid-zone--equipment-contacts grid-zone--fixed">
        <div className="grid-zone__label">Current Contacts</div>
        <div className="grid-zone__content">
          <div className="contact-bin-header">
            <div className="contact-summary contact-summary--all">
              <span className="contact-count"> 4 </span> Contacts
            </div>
            <div className="contact-summary contact-summary--failed">
              <span className="contact-count"> 1 </span> Failed
            </div>
            <div className="contact-summary contact-summary--executing">
              <span className="contact-count"> 3 </span> Executing
            </div>
            <div className="contact-filters">
              <div className="contact-filter">
                <label htmlFor="stateFilter">Status</label>
                <RuxSelect
                  input-id="stateFilter"
                  className="rux-select"
                  required={false}
                  value="all"
                >
                  <RuxOption value="all" label="All" />
                  <RuxOption value="critical" label="Critical" />
                  <RuxOption value="serious" label="Serious" />
                  <RuxOption value="caution" label="Caution" />
                </RuxSelect>
              </div>
            </div>
          </div>
          <div class="contact-log">
            <header class="contact-log-header">
              <div class="contact-log__header-labels">
                <div class="contact-log__event__status"></div>
                <div class="contact-log__event__name">Name</div>
                <div class="contact-log__event__ground">GS</div>
                <div class="contact-log__event__equipment">
                  Equipment String
                </div>
                <div class="contact-log__event__state">Status</div>
                <div class="contact-log__event__timestamp">AOS &ndash; LOS</div>
              </div>
            </header>

            <ol class="contact-log__events"></ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentContacts;
