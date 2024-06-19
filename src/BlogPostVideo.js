import PostmapVideo from "./blogvideo/PostmapVideo"
import logo from './images/images5.png'
import SideBar from "./SideBar"
import Footer from "./dashboard/Footer"
const BlogPostVideo = ({handleDelete, video, comment}) =>{
    
    return(

        <div className='sidebar'>
        <div className="home">
        <div className="div22">
        <PostmapVideo video={video} comment={comment} handleDelete={handleDelete}/>
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
        width:'20ch'
    }}> Blog-Video</p>
    </div>
    <div>
        <SideBar />
        <Footer />

        </div>
        </div></div>
    )
}
export default BlogPostVideo