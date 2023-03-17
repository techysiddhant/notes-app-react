import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton';
import ListItem from '../components/ListItem';
import NoteDataService from "../services/note.services";

const NotesListPage = ({user}) => {
    const [notes,setNotes] = useState([]);
    
    const getNotes = async() =>{
        const data = await NoteDataService.getAllNotes();
        const tempdata =[];
        data.forEach((doc)=>{
            if(user.email === doc.data().email){
                tempdata.push({...doc.data(),id:doc.id});
                }})
        setNotes(tempdata);
    }
    useEffect(()=>{
        getNotes();
    });
  return (
    <div className='notes'>
        <div className="notes-header">
            <h2 className='notes-title'>&#9782; Notes</h2>
            <p className='notes-count'>{notes.length}</p>
        </div>
        <div className='notes-list'>
            {
                notes.map((note)=>(
                    <ListItem note={note} key={note.id}/>
                ))
            }
        </div>
        <AddButton />
        
    </div>
  )
}

export default NotesListPage