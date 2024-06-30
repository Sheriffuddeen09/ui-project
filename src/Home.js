import Form from "./button/Form"
import Seamless from "./Seamless"
import Save from "./range/Save"
import Slider from "./component/Slider"
import logo from './images/images5.png'
import Freight from "./component/Trust"
import Amazing from "./component/Amazing"
import Footer from "./dashboard/Footer"
import Footers from "./component/Footer"
import SideBar from "./SideBar"
import Accordion from "./component/Accordion"
import './lowmedia.css'
const Home = ({filterResult, orders, setOrders}) =>{
    
    
    return(

        <div className='sidebar'>
        <div className="home">
        <div className="div21">
        <div className="div22">
        </div>
        </div>
        <Seamless/>
        <div>
        <Form/>
        </div>
        <div>
        <Slider />
        </div>
        <div>
        <Freight />
        </div>
        <div>
        <Save />
        </div>
        <div>
        <Accordion />
        </div>
        <div>
        <Amazing />
        </div>
        <div>
        <Footers />
        </div>
        </div>
        <div className='navHome'>
        <div style={{
        display: 'flex',
        flexDirection:'column',
        translate: '90px',
    }}>
    <img src={logo} style={{
        translate: '50px',
        margin:'5px'
    }} alt='logo' width={40} height={40} className='im'/>
    <p className="met" style={{
        translate: '30px',
        width: '20ch',
        fontWeight: 'bold'
    }}> Landing Page</p>
    </div>
    <div>
        <SideBar filterResult={filterResult} orders={orders} setOrders={setOrders}/>
        <Footer />
        
        </div>
        </div>
        </div>
    )
}
export default Home