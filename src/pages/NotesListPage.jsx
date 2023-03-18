import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton';
import ListItem from '../components/ListItem';
import { db } from '../firebase-config';

const NotesListPage = ({user}) => {
    const [notes,setNotes] = useState([]);
    useEffect(()=>{
        const q = query(collection(db,"notes"),orderBy("createdAt","desc"));
        const unsubscribeForNotes = onSnapshot(q,(snap)=>{
            let temp = snap.docs.map((item)=>{
                    return {...item.data(), id:item.id}
            })
            temp = temp.filter(item=> item.email === user.email);
            setNotes(
                temp
            );
        });
        return ()=>{unsubscribeForNotes();}
    },[])
    
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