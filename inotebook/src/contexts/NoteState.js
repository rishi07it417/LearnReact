import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{

    const noteArr=[
        {
          "_id": "6690d0af984d7edb5e4e273e1",
          "user": "6690a616dd655e9041930e85",
          "title": "Test Title",
          "description": "Test Desc",
          "tag": "general",
          "date": "2024-07-12T06:43:59.018Z",
          "__v": 0
        }, {
          "_id": "6690d0af984d7edb5e4e273e2",
          "user": "6690a616dd655e9041930e85",
          "title": "Test Title",
          "description": "Test Desc",
          "tag": "general",
          "date": "2024-07-12T06:43:59.018Z",
          "__v": 0
        }, {
          "_id": "6690d0af984d7edb5e4e273e3",
          "user": "6690a616dd655e9041930e85",
          "title": "Test Title",
          "description": "Test Desc",
          "tag": "general",
          "date": "2024-07-12T06:43:59.018Z",
          "__v": 0
        }, {
          "_id": "6690d0af984d7edb5e4e273e4",
          "user": "6690a616dd655e9041930e85",
          "title": "Test Title",
          "description": "Test Desc",
          "tag": "general",
          "date": "2024-07-12T06:43:59.018Z",
          "__v": 0
        }, {
          "_id": "6690d0af984d7edb5e4e273e5",
          "user": "6690a616dd655e9041930e85",
          "title": "Test Title",
          "description": "Test Desc",
          "tag": "general",
          "date": "2024-07-12T06:43:59.018Z",
          "__v": 0
        }
      ];

    let url = `http://localhost:3001/api/notes`;

    const [notes,setNotes] = useState([]);
    const [loading,setLoading]=useState(false);

    const fetchData = async () => {
       try {
            setLoading(true);
            let data = await fetch(url+'/fetchAllNotes',{ method: 'post', 
                headers: new Headers({
                    'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MGE2MTZkZDY1NWU5MDQxOTMwZTg1In0sImlhdCI6MTcyMDg0NjI3M30.PeIG_b_Ss77x0PeTBqEGYP3-9fnG9ybNdwftAw21ODg', 
                    'Content-Type': 'application/json'
                })});
        
            let parsedData = await data.json();
            console.log(parsedData);
            setLoading(false);
            setNotes(parsedData);
       } catch (e) {
        setLoading(false);
         console.log(e);
       }
        
      };
    

    const addNote = async (title,description,tag)=>{
       

        try {
            const note = {
                title:title,
                description:description,
                tag:tag
            }

            let data = await fetch(url+'/addNotes',{ method: 'post',
                body:JSON.stringify(note), 
                headers: new Headers({
                    'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MGE2MTZkZDY1NWU5MDQxOTMwZTg1In0sImlhdCI6MTcyMDg0NjI3M30.PeIG_b_Ss77x0PeTBqEGYP3-9fnG9ybNdwftAw21ODg', 
                    'Content-Type': 'application/json'
                })});
        
            let parsedData = await data.json();
            console.log(parsedData);
            fetchData();
       } catch (e) {
         console.log(e);
       }
    }

    const deleteNote = async(id)=>{
        try {
           
            let data = await fetch(url+'/deleteNote/'+id,{ method: 'delete',
                headers: new Headers({
                    'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MGE2MTZkZDY1NWU5MDQxOTMwZTg1In0sImlhdCI6MTcyMDg0NjI3M30.PeIG_b_Ss77x0PeTBqEGYP3-9fnG9ybNdwftAw21ODg', 
                    'Content-Type': 'application/json'
                })});
        
            let parsedData = await data.json();
            console.log(parsedData);
            fetchData();
       } catch (e) {
         console.log(e);
       }
    }

    const editNote = (title,description,tag,id)=>{
        setNotes(notes.map((el)=>{
            if(el._id === id){
                el.title = title;
                el.description = description;
                if(tag){
                    el.tag = tag;
                }
                return;
            }
        }));
    }

    return (
        <NoteContext.Provider value={{notes,setNotes,loading,setLoading,addNote,deleteNote,editNote,fetchData}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;