import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';
import ScheduleJob from './EquipmentMaintenance/ScheduleJob.js';
import JobDetails from './EquipmentMaintenance/JobDetails.js';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';

function App() {
  let [currentView, setCurrentView] = useState('main');
  let [currentJob, setCurrentJob] = useState({});
  const dataService = useContext(DataContext);
  let [data, setData] = useState(dataService.data);
  let [currentEq, setCurrentEq] = useState(null);

  const selectEquip = (eq) => {
    setCurrentEq(eq);
  };

  useEffect(() => {
    function onDataChange(newData) {
      setData({ ...newData });
    }

    dataService.onChange(onDataChange);

    return () => {
      dataService.removeOnChange(onDataChange);
    };
  }, [dataService]);

  switch (currentView) {
    case 'scheduleJob':
      return (
        <>
          <GlobalStatusBar data={data} />
          <ScheduleJob cancelEdit={() => setCurrentView('main')} />
        </>
      );
    case 'viewJobDetails':
      return (
        <>
          <GlobalStatusBar data={data} />
          <JobDetails
            currentJob={currentJob}
            cancelEdit={() => setCurrentView('main')}
            events={currentEq.data.events}
          />
        </>
      );
    default:
      return (
        <>
          <GlobalStatusBar data={data} />
          <main key={currentView}>
            <nav className="main-menu">
              <SidebarTree selectEquip={selectEquip} />
            </nav>

            <EquipmentContainer
              changeView={(view) => setCurrentView(view)}
              setCurrentJob={(job) => setCurrentJob(job)}
              data={data}
              currentEq={currentEq}
              selectEquip={selectEquip}
            />
          </main>
        </>
      );
  }
}

export default App;
