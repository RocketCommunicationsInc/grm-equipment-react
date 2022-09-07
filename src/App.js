import logo from './logo.svg';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import './App.css';
import { RuxGlobalStatusBar } from '@astrouxds/react';

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
      <rux-button>Button text</rux-button>
    </div>
  );
}

export default App;
