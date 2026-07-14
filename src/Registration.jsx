/*
import { useState, useRef } from "react"; // Hooks import

export default function Registration() {
  // Functional Component

  const [Fullnm, setFullnm] = useState(""); // Controlled Full Name
  const [password, setPassword] = useState(""); // Controlled Password
  const [confirmPassword, setConfirmPassword] = useState(""); // Controlled Confirm Password
  const age = useRef(null); // Uncontrolled Age
  const email = useRef(null); // Uncontrolled Email

  const[finalFullnm,setfinalFullnm]=useState("");
  const[finalpassword,setfinalPassword] = useState("");
  const[finalconfirmPassword, setfinalConfirmPassword] = useState("");
  const [finalage , setfinalage] = useState("");
  const [finalemail , setfinalemail] = useState("");


  function handle(e)
  {
    e.preventDefault(e);
    setfinalFullnm(Fullnm);
    setfinalPassword(password);
    setConfirmPassword(finalconfirmPassword);
    setfinalage(age.current.value);
    setfinalemail(email.current.value);

    alert("Form Submit Successfully...");
    
  }

  return (
    <>
      <div>
         
        <form onSubmit={handle} >

          <label htmlFor="fnm">Enter Your Full Name : </label> 
          <input
            type="text"
            id="fnm"
            name="fnm"
            value={Fullnm}
            onChange={(e) => setFullnm(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="email">Enter Email : </label>
          <input type="email" id="email" name="email" ref={email} />
          <br />
          <br />
          <label htmlFor="age">Enter Age : </label>
          <input type="number" id="age" name="age" ref={age} />
          <br />
          <br />
          <label htmlFor="password">Enter Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="confirmPassword">Confirm Password : </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Submit</button> 
          <p>Full Name : {finalFullnm}</p>
          <p>Password : {finalpassword}</p>
          <p>Confirm Password : {setfinalConfirmPassword}</p>
          <p>Email : {finalemail}</p>
          <p>Age : {finalage}</p>
        </form>
      </div>
    </>
  );
}

*/
