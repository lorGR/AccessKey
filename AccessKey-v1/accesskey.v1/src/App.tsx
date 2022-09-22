import './App.scss';
import CompanyMenu from './features/companyMenu/CompanyMenu';
import Events from './features/events/Events';
import Navbar from './features/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="events-grid">
          <Events />
        </div>
        <div className="compeny-menu-grid">
          <CompanyMenu locations={11} doors={20} workers={80} />
        </div>
        <div className="info-table-grid"></div>
        <div className="weekly-traffic-grid"></div>
      </div>
    </div>
  );
}

export default App;
