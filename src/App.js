// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Aboutus from './component/Aboutus';
import Navbar from './component/Navbar';
import Textform from './component/Textcolum';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      tp: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const [mode, setMode] = useState('light');
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtlis" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<Aboutus />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the Text to analayze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
