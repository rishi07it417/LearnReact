import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import AlertMsg from './components/AlertMsg';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alertMsg,setAlertMsg]=useState(null);
  const [alertMsgType,setAlertMsgType]=useState(null);
  const [darkMode,setDarkMode]= useState('light');
  const [text,setText]= useState('');
  const [buttonLabel,setButtonLabel] = useState('Enable Dark Mode');
  const [modeStyle,setModeStyle]= useState( {
      color : 'black',
      backgroundColor : 'white'
  });

  const showAlert = (message,type)=>{
    setAlertMsg(message);
    setAlertMsgType(type);

    setTimeout(() => {
      setAlertMsg(null);
    setAlertMsgType(null);

    }, 3000);
  }

  const handleDarkModeClick = ()=> {
    toggleMode();

    if(buttonLabel === 'Enable Dark Mode'){
        setButtonLabel('Disable Dark Mode');
        setModeStyle({
            color : 'white',
            backgroundColor : 'black'
        });
        
    }else{
        setButtonLabel('Enable Dark Mode');
        setModeStyle({
            color : 'black',
            backgroundColor : 'white'
        });
    }
};




const handleTextAreaOnChange = (event)=>{
    console.log('onChange');
    setText(event.target.value);
}

  const handleUpClick = ()=> {

      setText(text.toUpperCase()); 
      showAlert("Converted to Upper Case Successfully","success");

  };

  const handleLowerClick = ()=> {

      setText(text.toLowerCase()); 
      showAlert("Converted to Lower Case Successfully","success");
  };

  const handleCopyTextClick = ()=> {

      let cpyText = text;
      navigator.clipboard.writeText(cpyText);
      showAlert("Text copied Successfully","success");


  };

  const toggleMode = ()=>{
    if(darkMode==='dark'){
      setDarkMode('light');
      showAlert("Light Mode Enabled","warning");

    }else{
      document.title = 'Dark Mode Enabled';
      setDarkMode('dark');
      showAlert("Dark Mode Enabled","warning");

  
    }
  }


  let textFormPropObj = {
    textLabel : "Enter Box",
    heading : "Text Utility",
    text : text,
    buttonLabel : buttonLabel,
    modeStyle : modeStyle,
    toggleMode : toggleMode,
    handleUpClick : handleUpClick,
    handleLowerClick : handleLowerClick,
    handleCopyTextClick : handleCopyTextClick,
    handleTextAreaOnChange : handleTextAreaOnChange,
    handleDarkModeClick : handleDarkModeClick
  }

  let alertMsgObj = {
    alertMsg : alertMsg,
    alertMsgType : alertMsgType
  }


  return (
    <>
           
      <div className="container">
        <div className="row">
           <div className="col">
            
            <Router>
              <Navbar title="textUtils1" home="home1" mode={darkMode}></Navbar>
              <AlertMsg alertMsg={alertMsgObj}></AlertMsg>
              <Routes>
                <Route  path="/" element={ <TextForm textFormProp={textFormPropObj} ></TextForm>}>
                </Route>
                <Route  path="/about" element={<About ></About>}>
                </Route>
              </Routes>
            </Router>
           </div>
        </div>
      </div>
      

     
      
    
    </>
  );
}

export default App;
