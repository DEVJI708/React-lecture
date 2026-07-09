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