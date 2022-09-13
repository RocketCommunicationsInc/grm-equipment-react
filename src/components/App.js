import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import './App.scss';
import GlobalStatusBar from './GlobalStatusBar/GlobalStatusBar';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import SidebarTree from './Sidebar/SidebarTree';

function App() {
  return (
    <>
      <GlobalStatusBar />
      <main>
        <nav className="main-menu">
          <SidebarTree />
        </nav>
        <EquipmentContainer>Equipment</EquipmentContainer>
      </main>
    </>
  );
}

export default App;
