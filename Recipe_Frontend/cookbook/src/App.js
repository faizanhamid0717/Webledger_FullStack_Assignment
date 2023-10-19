import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './components/AllRoutes';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
         {/* <h1>Welcome to Recipe App</h1> */}
         <Navbar/>
         <AllRoutes/>
         
    </div>
  );
}

export default App;
