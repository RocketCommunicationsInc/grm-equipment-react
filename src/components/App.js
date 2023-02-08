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

  function selectEquip(e) {
    setCurrentEq(e);
  }

  useEffect(() => {
    function onDataChange(newData) {
      setData({ ...newData });
    }

    dataService.onChange(onDataChange);

    return () => {
      dataService.removeOnChange(onDataChange);
    };
  }, [dataService, currentEq]);

  const cancelEdit = (e) => {
    e.preventDefault();
    setCurrentView('main');
  };

  switch (currentView) {
    case 'scheduleJob':
      return (
        <>
          <GlobalStatusBar data={data} />
          <ScheduleJob currentEq={currentEq} cancelEdit={cancelEdit} />
        </>
      );
    case 'viewJobDetails':
      return (
        <>
          <GlobalStatusBar data={data} />
          <JobDetails
            currentJob={currentJob}
            currentEq={currentEq}
            cancelEdit={cancelEdit}
            events={currentEq.data.events}
          />
        </>
      );
    default:
      return (
        <>
          <GlobalStatusBar data={data} />
          <main className='Dashboard-grid' key={currentView}>
            <nav className='main-menu Dashboard-grid__left-panel'>
              <SidebarTree selectEquip={selectEquip} />
            </nav>

            <section className='Dashboard-grid__right-panel'>
              <EquipmentContainer
                changeView={(view) => setCurrentView(view)}
                setCurrentJob={(job) => setCurrentJob(job)}
                data={data}
                currentEq={currentEq}
                selectEquip={selectEquip}
              />
            </section>
          </main>
        </>
      );
  }
}

export default App;
