import {db} from "../firebase-config";
import { collection,getDoc,getDocs,addDoc,updateDoc,deleteDoc,doc,orderBy } from "firebase/firestore";

const noteCollectionRef = collection(db, "notes");
class NoteDataService {
    addNotes = (newNote) =>{
        return addDoc(noteCollectionRef,newNote);
    }
    updateNote = (id,updatedNote)=>{
        const noteDoc = doc(db,"notes",id);
        return updateDoc(noteDoc,updatedNote);
    }
    deleteNote =(id)=>{
        const noteDoc = doc(db,"notes",id);
        return deleteDoc(noteDoc);
    }
    getAllNotes = ()=>{
        return getDocs(noteCollectionRef,orderBy("createdAt","asc"));
        // const docs = getDocs(noteCollectionRef,orderBy("createdAt","asc"));
        
    }
    getNote = (id)=>{
        const noteDoc = doc(db,"notes",id);
        return getDoc(noteDoc);
    }
}


export default new NoteDataService();