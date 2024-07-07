
import './App.css';
import Navbar from './compo/Navbar';
import Textform from './compo/Textform';
import Alert from './compo/Alert';
import React, { useState } from 'react';
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#121933';
      document.body.style.color='white';
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.background='white';
      document.body.style.color='black';
      showAlert("Dark Mode has been disabled","success");
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 2200);

  return (
    <>
    
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Textform showAlert={showAlert} heading="Enter your Text For Analysis" mode={mode}/>
    <div className="container my-3">
    </div>
  
    
    </>
    
  );
}

export default App;
