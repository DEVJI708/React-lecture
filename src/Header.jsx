import { Component, Fragment ,} from "react"
import { useState } from "react";

let isLogged= "not login" ;

const  checked = () =>{
    isLogged= "login in" ;
    console.log("Login Status :",isLogged);
}


export default function Header(){
    const userid="dev123";
    function message(){
        alert("Click Event!");
    }

  const [addToCart, setAddToCart] = useState(0);
  const [quantity, setQuantity] = useState(10);

function add() {
    setAddToCart(addToCart + 1);
    setQuantity(quantity - 1);
}

function remove() {
    if (addToCart > 0) {
        setAddToCart(addToCart - 1);
    }

    if (quantity == 0) {
            return;
    }
}


    return(
        <>
            <div className="Header-1">
                <Heading/>
                <Navbar/>
                <Logo/>
                <Description/>
               
                <label>User Name : </label>
                <input type="text" /><br /><br /><br />
                <label>PassWord</label>
                <input type="text" name="userid" value={userid} /><br /><br /><br />
                <button onClick={message}>Click</button>
                <button onClick={checked}>Login</button>
                <label > Login Status{isLogged}</label>
            </div>

            
        <div>
            <h2>ADD to Cart : {addToCart}</h2>
            <h2>Cart Quantity: {quantity}</h2>
            <button onClick={add}>Add Cart</button><br /><br />
            <button onClick={remove}>Remove Cart</button>
        </div>
    

        </>
    )
}
function Heading(){
    return(
        <Fragment>
            <div className="H-Name">
               <h1 style={{ textAlign: "center" }}>SVGU UNIVERCITY</h1>
            </div>
        </Fragment>
    )
}

function Navbar(){
    return(
        <Fragment>
            <div className="Nav-bar">
                <ul>
                    <li><a href="#">PICTURE</a></li>
                    <li><a href="#">LOGIN</a></li>
                    <li><a href="#">ABOUT</a></li>
                </ul>
            </div>
        </Fragment>
    )
}
function Logo(){
    
    return(
       <Fragment> 
            <div className="logo1">
                <img src="img1.jpg" alt="#" />
                
            </div>
        </Fragment>
    )
}

 class Description extends Component {
  render() {
    return (
      <div className="com">
        <h3>Description</h3>
        <p style={{color:"red"}}>This is a new component in the header file.</p>
        
      </div>
    );
  }
}

