import { Link } from "react-router-dom"

const SideMap = () =>{
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

</div>
    )
}
export default SideMap