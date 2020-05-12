import React from 'react';
import { Layout } from 'antd';
import SideNav from './common/SideNav';
import Header from './common/Header';
import Footer from './common/Footer';
import CreateReport from './CreateReport';
import Report from './Report';
import Tile from './Tile';
import Dashboard from './Dashboard';
import MultiplePageDemo from './MultiplePageDemo';
import './index.css';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [embedType, setEmbedType] = React.useState('Report');
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);

  const onSelect = (embedType) => setEmbedType(embedType);

  const renderDemo = () => {
    switch (embedType) {
      case 'Report':
        return <Report />;
      case 'Dashboard':
        return <Dashboard />;
      case 'Tile':
        return <Tile />;
      case 'Create Report':
        return <CreateReport />;
      case 'Multiple Pages':
        return <MultiplePageDemo />;
      default:
        return null;
    }
  };

  return (
    <Layout className="main">
      <SideNav
        darkMode={darkMode}
        onSelect={onSelect}
        selected={embedType}
      />
      <Layout>
        <Header
          title={embedType}
          setDarkMode={setDarkMode}
          isDarkMode={darkMode}
        />
        {renderDemo()}
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
