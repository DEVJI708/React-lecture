
//import { useState } from 'react';
import './App.css'
//import Student from './Student.jsx'
//import User  from './User.jsx';
//import Registration  from './Registration.jsx';
import Loop from './Loop.jsx'
/*
function App() {
let Mark = [50,60,70,80];
  return (
    <>
      <div> 
        <Student name="Devji" age="22" no="04" mark={Mark} />
      </div>
    </>
  )
}
*/

function App(){
  /*
  const  [status,setStatus] = useState("false");
  const  [username, setUsername] = useState("Guest");

   <Student status = {status}
        setStatus = {setStatus}
        username = {username}
        setUsername = {setUsername}
        
        />*/
  return(
    <>
       {/* <Registration/>*/}
        <Loop/>
       {/* <User/>*/}
    </>
  )
}
export default App
