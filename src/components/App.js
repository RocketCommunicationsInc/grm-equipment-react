import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import '../css/App.scss';
import { RuxGlobalStatusBar } from '@astrouxds/react';
import EquipmentContainer from './EquipmentContainer';

function App() {
  return (
    <div className="App">
      <RuxGlobalStatusBar
        include-icon="true"
        app-domain="Astro"
        app-name="Dashboard"
        app-version="4.0 Alpha"
        menu-icon="apps"
        username=""
        app-state-color=""
        app-state=""
      ></RuxGlobalStatusBar>
      <main>
        <nav className="mainMenu">Menu</nav>
        <EquipmentContainer>Equipment</EquipmentContainer>
      </main>
    </div>
  );
}

export default App;
