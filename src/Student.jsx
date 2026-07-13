import { useState } from 'react';
/*
// passing props parameter as object

export default function Student(props){
    return(
        <>
            <div>
                <h1>Student Details </h1><hr />
                <h3>Student Name :{props.name}</h3>
                <h3>Student Age : {props.age}</h3>
                <h3>Student RollN0:{props.no}</h3>
            </div>
        </>
    )
}*/

//Destructing {separate arguments for each value}
/*
export default function Student({name,age,no,mark}){
    return(
        <>
            <div>
                <h1>Student Details </h1><hr />
                <p>Student Name :{name}</p>
                <p>Student Age : {age}</p>
                <p>Student RollNo :{no}</p>

                <ul>
                    {mark.map((m  , index) => (
                        <li key={index}>{m}</li>
                    
                    ))
                    }
                </ul>
            </div>
            
        </>
    )

}
*/
export default function Login({status,setStatus,username,setUsername}){
    const[Temp,setTemp]=useState("");
    
        function checked(){
                setStatus(true);
                setUsername(Temp);
                console.log("Login Status :",status);
                console.log("Username :",username);
            }
    return(
        <>
        
        <div>
            <h2>Welcome {username}</h2><br /><br />
            <form>
                <label>Enter UserName :</label>
                <input type="text" value={Temp} onChange={(e) => setTemp(e.target.value)}/><br></br>


                <label>Password :</label>
                <input type="password" />


            </form> 
            <br />
            <br />
            <button  type="submit" onClick={checked}>Login</button>
        </div>
        </>
    )
}