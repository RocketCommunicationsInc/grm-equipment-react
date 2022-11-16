import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import ScheduleJob from './EquipmentMaintenance/ScheduleJob.js';
import JobDetails from './EquipmentMaintenance/JobDetails.js';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';
import { RuxIndeterminateProgress } from '@astrouxds/react';

function App() {
  let [currentView, setCurrentView] = useState('main');
  let [currentJob, setCurrentJob] = useState({});
  const dataService = useContext(DataContext);
  let [data, setData] = useState(dataService.data);

  useEffect(() => {
    function onDataChange(newData) {
      setData({ ...newData });
    }

    dataService.onChange(onDataChange);

    return () => {
      dataService.removeOnChange(onDataChange);
    };
  }, [dataService]);

  if (currentView === 'main') {
    return (
      <>
        <GlobalStatusBar data={data} />
        <main key={currentView}>
          <nav className="main-menu">
            <SidebarTree />
          </nav>
          <EquipmentContainer
            changeView={(view) => setCurrentView(view)}
            setCurrentJob={(job) => setCurrentJob(job)}
            data={data}
          />
        </main>
      </>
    );
  } else if (currentView === 'scheduleJob') {
    return (
      <>
        <GlobalStatusBar data={data} />
        <ScheduleJob
          cancelEdit={() => setCurrentView('main')}
          submitRequest={() => setCurrentView('spinner')}
        />
      </>
    );
  } else if (currentView === 'viewJobDetails') {
    return (
      <>
        <GlobalStatusBar data={data} />
        <JobDetails
          currentJob={currentJob}
          exitJobDetails={() => setCurrentView('main')}
          modifyJob={() => setCurrentView('spinner')}
        />
      </>
    );
  } else if (currentView === 'spinner') {
    setTimeout(() => {
      setCurrentView('main');
    }, 3000);
    return (
      <>
        <GlobalStatusBar data={data} />
        <div className="display-spinner">
          <RuxIndeterminateProgress />
        </div>
      </>
    );
  }
}

export default App;
