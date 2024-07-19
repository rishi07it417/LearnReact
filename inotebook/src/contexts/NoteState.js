import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{

    let url = `http://localhost:3001/api/notes`;

    const [notes,setNotes] = useState([]);
    const [loading,setLoading]=useState(false);

    const fetchData = async () => {
       try {
            setLoading(true);
            let data = await fetch(url+'/fetchAllNotes',{ method: 'post', 
                headers: new Headers({
                    'authToken': localStorage.getItem('authToken'),
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
                    'authToken': localStorage.getItem('authToken'),
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
                    'authToken': localStorage.getItem('authToken'),
                    'Content-Type': 'application/json'
                })});
        
            let parsedData = await data.json();
            console.log(parsedData);
            fetchData();
       } catch (e) {
         console.log(e);
       }
    }

    const editNote = async(title,description,tag,id)=>{
      try {
        const note = {
          title : title,
          description : description
        };

        let data = await fetch(url+'/updateNote/'+id,{ method: 'put',
            headers: new Headers({
                'authToken': localStorage.getItem('authToken'),
                'Content-Type': 'application/json'
            }),
            body:JSON.stringify(note), 
          });
    
        let parsedData = await data.json();
        console.log(parsedData);
        fetchData();
   } catch (e) {
     console.log(e);
   }
        // setNotes(notes.map((el)=>{
        //     if(el._id === id){
        //         el.title = title;
        //         el.description = description;
        //         if(tag){
        //             el.tag = tag;
        //         }
        //         return;
        //     }
        // }));
    }

    return (
        <NoteContext.Provider value={{notes,setNotes,loading,setLoading,addNote,deleteNote,editNote,fetchData}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;