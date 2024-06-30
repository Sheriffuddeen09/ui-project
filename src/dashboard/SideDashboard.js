import logo from './images/images5.png'
import './main.css'
import Footer from "./Footer"
import SideMap from './SideMap'
const SideDashboard = () =>{

return(
<div className="columnside">
    <div style={{
        display: 'inline-flex',
        translate: '30px',
    }}>
    <img src={logo} style={{
        translate: '40px',
        margin:'5px'
    }} alt='logo' width={40} height={40} className='im'/>
    <p className='met' style={{
        translate: '50px',
        fontWeight: 'bold'
    }}> Metrix</p>
    </div>
    <div className="">
        <SideMap />
        <Footer />
        </div>
    
</div>
)
}
export default SideDashboard