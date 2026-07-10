
import { useState } from 'react';
import './App.css'
import Student from './Student.jsx'
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
  const  [status,setStatus] = useState("false");
  const  [username, setUsername] = useState("Guest");
  return(
    <>
        <Student status = {status}
        setStatus = {setStatus}
        username = {username}
        setUsername = {setUsername}
        
        />
    </>
  )
}
export default App
