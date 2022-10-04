import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import { getTaxonomy } from '../services/equipment';
import ScheduleJob from './EquipmentMaintenance/ScheduleJob.js';
import JobDetails from './EquipmentMaintenance/JobDetails.js';
import { useState } from 'react';

let data = getTaxonomy();

function App() {
  let [currentView, setCurrentView] = useState('main');
  let [currentJob, setCurrentJob] = useState({});

  if (currentView === 'main') {
    return (
      <>
        <GlobalStatusBar />
        <main key={currentView}>
          <nav className="main-menu">
            <SidebarTree />
          </nav>
          <EquipmentContainer
            changeView={(view) => setCurrentView(view)}
            setCurrentJob={(job) => setCurrentJob(job)}
          />
        </main>
      </>
    );
  } else if (currentView === 'scheduleJob') {
    return (
      <>
        <GlobalStatusBar />

        <ScheduleJob />
      </>
    );
  } else if (currentView === 'viewJobDetails') {
    return (
      <>
        <GlobalStatusBar />
        <JobDetails currentJob={currentJob} />
      </>
    );
  }
}

export default App;
