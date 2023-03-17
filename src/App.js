
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';
import {onAuthStateChanged, getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'; 
import { app } from './firebase-config';
import { useEffect, useState } from 'react';
import SwitchButton from './components/SwitchButton';
import SunButton from './components/SunButton';
const auth = getAuth(app);
const loginHandler = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth,provider);

}
const logoutHandler = ()=>{
  signOut(auth);
}






function App() {
  const [user,setUser] = useState(false);
  const [mode,setMode] = useState(false);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(data)=>{
      setUser(data);
      // console.log(data)
    });
    return ()=>{
      unsubscribe();
    }
  },[]);
  const handlemode=()=>{
    setMode(!mode);
  }
  return (
    <div className={`container ${mode?" ":"dark" }`} >
      
      {/* <button>Click Me</button> */}
      <div className="app">
      {
        mode? <SunButton handlemode={handlemode}/> :<SwitchButton handlemode={handlemode} />
      }
        {
          !user ?( <Login loginHandler={loginHandler} />):
          (
            <>
              <Header logoutHandler={logoutHandler} />
            <Routes>
          <Route path='/' element={<NotesListPage user={user} />} />
          <Route path='/note/:id' element={<NotePage user={user} />} />
          {/* <Route path='/note/edit/:id' element={<NotePage />} /> */}
        </Routes>
            </>
          )
        }
        
        
      </div>
    </div>
  );
}

export default App;
