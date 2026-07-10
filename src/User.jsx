
export default function User({name="Guest", age=21}) {
    return(
        <>
            <div>
                <hr/>
                <h2>User Name : {name}</h2>
                <h2>User Age : {age}</h2>
            </div>
        </>
    )
}
