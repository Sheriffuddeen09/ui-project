import Postmap from "./blogpost/Postmap"
import logo from './images/images5.png'
import Footer from "./dashboard/Footer"
import SideBar from "./SideBar"
const BlogPost = ({handleDelete, posts, comment}) =>{
    
    return(

        <div className='sidebar'>
        <div className="home">
        <div className="div22">
        <Postmap posts={posts} comment={comment} handleDelete={handleDelete}/>
        </div>
        </div>
        <div className='nav'>
        <div style={{
        display: 'flex',
        flexDirection:'column',
        translate: '85px',
    }}>
    <img src={logo} style={{
        translate: '40px',
        margin:'5px'
    }} alt='logo' width={40} height={40} className='im'/>
    <p style={{
        translate: '50px',
        color: 'blue',
        fontWeight: 'bold',
        width: '20ch'
    }}> Blog-Post</p>
    </div>
    <div>
        <SideBar />
        <Footer />

        </div>
        </div>
     
        </div>
    )
}
export default BlogPost