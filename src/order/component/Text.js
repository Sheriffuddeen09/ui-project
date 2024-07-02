import { CartContext } from '../Features/ContextProvider'
import React, {useContext} from 'react'
import { orderlists } from "./PostOrder"
const Text = () =>{

const {dispatch} = useContext(CartContext)

    const content = (
        <div className="displaylist"> 
            {
                orderlists.map((order) =>(
                    <div>
                        <span>
                            <img src={order.product} alt="product" width={300} height={300}/>
                        </span>
                        <span className='displaycart'>
                        <p> {order.price}</p>
                        <p> {order.category}</p>
                        <button className="cartbutton" onClick={() => dispatch({type:"Add", order:order})}> Add To Cart</button>
                        </span>
                    </div>
                ))
            }
        </div>
    )
    return (
        <div>
            {content}
        </div>
    )
}
export default Text