export default function Loop(){
    
    const subject = ["python","java","linux"]; //array

    const car = [
        {'id':1 , 'name' : "BMW" , 'model' :2024},
        {'id':2 , 'name' : "Scorpio" , 'model' :2020},
        {'id':3 , 'name' : "Swift" , 'model' :1889},
        {'id':4 , 'name' : "Venue" , 'model' :2023}
    ]

    return(
        <>?
        <ul>
            {subject.map((element,index)=>(
                <li key={index}>{element}</li>
            ))}
        </ul>
        
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>MODEL</th>
                </tr>
            </thead>

            <tbody>
                {car.map((element)=>(
                    <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.model}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    
    </>
    )
}