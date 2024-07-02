import React, {useContext} from 'react'
import { CartContext } from '../Features/ContextProvider'

const Product = ({order}) =>{

    const {dispatch} = useContext(CartContext)
    return(
        <div>
            <div className="product"> 
             <img src={order.images} alt='order' width={300} height={300}/>
                <p> {order.category}</p>
                <p> ${order.price}</p>
                <button className="cartbutton" onClick={() => dispatch({type:"Add", order:order})}> Add To Cart</button>
            </div>

        </div>
    )
}
export default Product