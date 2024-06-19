import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from '../component/CartProduct'
import { totalItem, totalPrice } from '../Features/CartReducers'
import { CartContext } from '../Features/ContextProvider'

const Cart = () => {
    const {cart} = useContext(CartContext)

    return (
        <div className='cartbackground'>
        <div>
            {
                cart.map(order =>(
                    <CartProduct order={order} />
                ))
            }
        </div>

            <div className='total'>
                <h5> Total Item:{totalItem(cart)}</h5>
                <h5> Total Price: ${totalPrice(cart)}</h5>
                <Link style={{
                    textDecoration: 'none',
                    fontSize: '17px'
                }} to={'/form'} className='cartbutton'> Checkout </Link>
            </div>
        </div>
    )
}
export default Cart