import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import { getTaxonomy } from '../services/equipment';
import ScheduleJob from './EquipmentMaintenance/ScheduleJob.js';
import JobDetails from './EquipmentMaintenance/JobDetails.js';
import React, { useState } from 'react';

let sidebarObjects = getTaxonomy();

// 'main', 'scheduleJob', 'viewJobDetails'

function App() {
  let [currentView, setCurrentView] = useState('main');
  let [currentJob, setCurrentJob] = useState({});

  if (currentView === 'main') {
    return (
      <>
        <GlobalStatusBar />
        <main key={currentView}>
          <nav className="main-menu">
            <SidebarTree sidebarObjects={sidebarObjects} />
          </nav>
          <EquipmentContainer
            changeView={(view) => setCurrentView((currentView = view))}
            setCurrentJob={(job) => setCurrentJob((currentJob = job))}
          />
        </main>
      </>
    );
  } else if (
    currentView === 'scheduleJob' ||
    currentView === 'viewJobDetails'
  ) {
    return (
      <>
        <GlobalStatusBar />

        <ScheduleJob currentJob={currentJob} currentView={currentView} />
      </>
    );
  }
}

export default App;
