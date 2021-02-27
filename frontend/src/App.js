import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>

      <Router>
        <Routes />
      </Router>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
