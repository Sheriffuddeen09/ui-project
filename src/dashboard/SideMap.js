import { Link } from "react-router-dom"
import { useState } from "react"
import FilterButtons from "../FilterButton"

const SideMap = ({orders, setOrders}) =>{

    
    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    return (
        <div>
        <ul className='ulside'>
            <li>
            <Link to='/user' className='sidedash'>UserPage</Link>
            </li>
            <li>
            <Link to='/message' className="sidedash">Message</Link>
            </li>
            <li>
            <Link to='/video' className="sidedash">Video</Link>
            </li>
            <li>
            <Link to='/form' className="sidedash">ShipForm</Link>
            </li>
            <li>
            <Link to={'/order'} className="sidedash">Order</Link>
            </li>
            <li>
            <Link to='/about' className='sidedash'>About</Link>
            </li>
            <li>
            <Link to='privacy' className="sidedash">Policy</Link>
            </li>
           
            </ul>
    <div className='filterbutton'> 
          <span style={{display:'inline-flex', gap:'10px'}} onClick={toggleSubmit}> 
            <p> Filter-Button</p>
            <p className={`'iconsfilter' ${isVisible ? 'iconsfilter' : 'iconfilter'}`}> ^ </p>
          </span>
          <span className={`hidden-box ${isVisible ? 'active' : 'hidden-box'}`}> <FilterButtons orders={orders}  setOrders={setOrders}/> </span>
        </div>
</div>
    )
}
export default SideMap