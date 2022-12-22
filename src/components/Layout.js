import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import AppProvider from '../provider/AppProvider';
import './Layout.scss';

const Layout = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default Layout;
