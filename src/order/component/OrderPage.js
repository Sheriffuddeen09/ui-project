import { useContext } from "react";
import { useState } from "react"
import { useParams } from 'react-router-dom';
import { orderlists } from './PostOrder';
import { CartContext } from "../Features/ContextProvider";
const OrderPage = () =>{

    const {id} = useParams()
    const order = orderlists.find(order => (order.id).toString() === id)

   // const [isVisible, setIsVisible] = useState(false)
    const [isImage, setIsImage] = useState(false)

    const {dispatch} = useContext(CartContext)

    const toggleFlex = () =>{
        setIsImage(!isImage)
    }
   /* const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
        */

    return(
        <div className='postbodyme allpostblog' style={{width: '100%', overflow:'hidden', marginTop:'2px'}} 
        
        >
        {order &&
        <div style={{
            translate:'140px'
        }}>        
            <div className='productpage'>
            <span onClick={toggleFlex}>
            <img src={order.product} alt='phone' height={300} width={300}/>
            </span>
            <div className={`'menu-imageorder' ${isImage ? 'menu-imageorder' : 'button-menu'}`}>
        <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
            X
            </button>
        <img src={order.product} alt='phone' height={400} width={400} className="blogflex"/>
       </div>
       <div className="ordertrace">
            <p>
                {order.price}
            </p>
            <p>
                {order.category}
            </p>
            <button className={`cartbutton ${isImage ? 'orderimage' : 'cartbutton'}`} onClick={() => dispatch({type:"Add", order:order})}> Add To Cart</button>
        
            </div>
            </div>
        
        <table>
            <tbody>
                <caption className="caption">
                    Specification Table 
                </caption>
            </tbody>
        </table>
        </div>
            }
            </div>
    )
}
export default OrderPage