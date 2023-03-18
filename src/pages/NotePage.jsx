
import { serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import {ReactComponent as  LeftArrorw} from '../assets/left-arrow.svg'
import NoteDataService from "../services/note.services";
const NotePage = ({match,user}) => {
    const navigate = useNavigate();
    const [body,setBody] = useState("");
    const noteId = useParams();
   
    const handleSave = async (e)=>{
        const newNote = {body,email:user.email,createdAt:serverTimestamp()}
            try {
                if(noteId.id === "new"){
                await NoteDataService.addNotes(newNote);
                
                navigate('/');
                }
                
            } catch (error) {
                console.log(error);
            }
    }
    
    // const getNote = async()=>{
    //     const docNote = await NoteDataService.getNote(noteId.id);
    //     setBody(docNote.data().body);
    // }
    useEffect(()=>{
        if(noteId.id !== "new"){
            // getNote();
            const getNote = async()=>{
                const docNote = await NoteDataService.getNote(noteId.id);
                setBody(docNote.data().body);
            }
            getNote();
        }
        // console.log("Runn");
    },[noteId.id]);
    const handleUpdate = async()=>{
        const updateBody = {body}
        try{
            await NoteDataService.updateNote(noteId.id,updateBody)
            navigate('/');
        }catch(error){
            console.log(error);
        }

    }
    const handleDelete = async()=>{
        try{
            await NoteDataService.deleteNote(noteId.id);
            navigate('/');
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div className='note'>
        <div className="note-header">
            <div>
                <Link to="/">
                    <LeftArrorw/>
                    
                </Link>
                
                {noteId.id !=="new"? <><button onClick={handleUpdate}>Update </button><button onClick={handleDelete}>Delete</button></> : <button onClick={handleSave}>Save </button>}
                
            </div>
        </div>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
    </div>
  )
}

export default NotePage