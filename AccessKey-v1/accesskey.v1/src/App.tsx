import './App.scss';
import CompanyMenu from './features/companyMenu/CompanyMenu';
import Navbar from './features/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CompanyMenu locations={11} doors={20} workers={80}/>
    </div>
  );
}

export default App;
