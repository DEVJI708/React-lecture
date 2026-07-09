
import './App.css'
import Student from './Student.jsx'

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

export default App
