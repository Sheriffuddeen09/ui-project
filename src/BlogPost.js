import Postmap from "./blogpost/Postmap"
import logo from './images/images5.png'
import Footer from "./dashboard/Footer"
import SideBar from "./SideBar"
const BlogPost = ({handleDeletePost, posts, comment}) =>{
    
    return(

        <div className='sidebar' style={{overflow:'hidden'}}>
        <div className="home">
        <div className="div22">
        <Postmap posts={posts} comment={comment} handleDeletePost={handleDeletePost}/>
        </div>
        </div>
        <div className='navChat'>
        <div style={{
        display: 'flex',
        flexDirection:'column',
        translate: '105px',
    }}>
    <img src={logo} style={{
        translate: '22px',
        margin:'5px'
    }} alt='logo' width={40} height={40} className='im'/>
    <p className="met" style={{
        translate: '22px',
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