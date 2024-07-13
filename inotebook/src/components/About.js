import React,{useContext, useEffect} from 'react'
import noteContext from '../contexts/NoteContext'

const About = () => {
console.log(noteContext.Provider);
  const a = useContext(noteContext);

  useEffect(()=>{
    a.update(); 
    return ()=>{
      
    }

  },[]);

  return (
    <div>
      This is about {a.state.name} and {a.state.email}
    </div>
  )
}

export default About
