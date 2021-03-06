import logo from './logo.svg';
import './App.css';
import ReducerCount from './Component/ReducerCount/ReducerCount';
import PatientManage from './Component/patientManagement/PatientManage';

function App() {
  return (
    <div className="App">
     <ReducerCount />
     <PatientManage />
    </div>
  );
}

export default App;
