import {useState} from 'react'
import { Link } from "react-router-dom"
import FilterButtons from './FilterButton'

const SideBar = ({filterResult}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    return (
        <div>
        <div className='menu'>

        <ul className=''>
            <li>
            <Link to='/user' className='sidedash'>UserPage</Link>
            </li>
            <li>
            <Link to='/mes' className="sidedash">Message</Link>
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

        <div>
        </div>
        <div className='filterbutton'> 
          <span style={{display:'inline-flex', gap:'10px'}} onClick={toggleSubmit}> 
            <p> Filter-Button</p>
            <p className={`icon ${isVisible ? 'icons' : null}`}> ^ </p>
          </span>
          <span className={`hidden-box ${isVisible ? 'active' : 'hidden-box'}`}> <FilterButtons  filterResult={filterResult}/> </span>
        </div>
        </div>
  
  </div>
    )
}
export default SideBar