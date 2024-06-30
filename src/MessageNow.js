import logo from './images/images5.png'
import MessageMap from './message/MessageMap'
import SideBar from "./SideBar"
import Footer from './dashboard/Footer'
const MessageNow = ({chatme,length}) =>{
    
    return(

        <div className='sidebar'>
        <div className="home">
        <div className="div22">
        <MessageMap chatme={chatme} length={length} />
        </div>
        </div>
        <div className='navChat'>
        <div style={{
        display: 'flex',
        flexDirection:'column',
        translate: '50px',
    }}>
    <img src={logo} style={{
        translate: '22px',
        margin:'5px'
    }} alt='logo' width={40} height={40} className='im'/>
    <p className='met' style={{
        translate: '22px',
        fontWeight: 'bold'
    }}> Message</p>
    </div>
    <div>
        <SideBar />
        <Footer />

        </div>
        </div>
        </div>
    )
}
export default MessageNow