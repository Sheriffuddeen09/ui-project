import image from './images/order.png'
import { Link } from 'react-router-dom'
import Product from './order/component/Product'
import { CartContext } from './order/Features/ContextProvider'
import { useContext } from 'react'
import logo from './images/images5.png'
import FilterButtons from './FilterButton'
import {useState} from 'react' 
import SideBarOrder from './order/component/SideBarOrder'
import Footer from './dashboard/Footer'

const Order = ({orders, setOrders}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }

    const {cart} = useContext(CartContext)
    return(
    <div className='sidebar *'>
    <div className="usersidebar" >
         <div className='ordercolumn'>
        <div className='orderflex'> 
            <p className='shop'> Shopping from SheriffDev</p>
            <span  style={{ translate: '-40px'}}> 
                <Link to={'/cart'} className='linkCart'>
                <img src={image} alt='order' height={30} width={30}  className='imageorder'/>
                <p className='postionorder' style={{translate: '22px', marginTop: '-10px'}}>{cart.length}</p>
                </Link>
            </span>
        </div>
            <div className='order'>
            {
                orders.map((order) =>{
                   return <Product order={order} key={order.id} />
                })
            }
            </div>
        </div>
      
         <div className='navChat *' style={{
             height:'230vh'
         }}>
         <div style={{
         display: 'flex',
         flexDirection:'column',
         translate: '90px',
     }}>
     <img src={logo} style={{
         translate: '50px',
         margin:'5px'
     }} alt='logo' width={40} height={40} className='im'/>
     <p className='or' style={{
         translate: '30px',
         width: '20ch',
         fontWeight: 'bold'
     }}> User Page</p>
     </div>
     <div>
         <SideBarOrder />
         </div>
         <div className='filterbutton' style={{translate:'120px'}}> 
          <span style={{display:'inline-flex', gap:'10px'}} onClick={toggleSubmit}> 
            <p> Filter-Button</p>
            <p className={`'iconsfilter' ${isVisible ? 'iconsfilter' : 'iconfilter'}`}> ^ </p>
          </span>
          <span className={`hidden-box ${isVisible ? 'active' : 'hidden-box'}`}> <FilterButtons orders={orders}  setOrders={setOrders}/> </span>
        </div>
        <div style={{translate:'-100px'}}>
        <Footer />
        </div>
</div>
</div>
</div>)
}
export default Order