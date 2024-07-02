import PostmapVideo from "./blogvideo/PostmapVideo"
import logo from './images/images5.png'
import SideBar from "./SideBar"
import Footer from "./dashboard/Footer"
import SliderPost from "./blogpost/SliderPost"
const BlogPostVideo = ({videohandleDelete, video, comment}) =>{
    
    return(

        <div className='sidebar' >
        <div className="home">
            <div className="postslidee" style={{ width:'93%', translate:'8px', padding:'10px', color:'white', height:'220px'}}>
                <SliderPost />
            </div>
        <div className="div22">
        <PostmapVideo video={video} comment={comment} videohandleDelete={videohandleDelete}/>
        </div>
        </div>
        <div className='navChat'>
        <div style={{
        translate: '90px',
        display: 'flex',
        flexDirection:'column',
    }}>
    <img src={logo} style={{
        translate: '22px',
        margin:'5px'
    }} alt='logo' width={40} height={40} className='im'/>
    <p className="met" style={{
        translate: '30px',
        fontWeight: 'bold',
        width:'20ch'
    }}> Blog-Video</p>
    </div>
    <div style={{
        display: 'flex',
        flexDirection:'column',

    }}>
        <SideBar />
        <Footer />

        </div>
        </div></div>
    )
}
export default BlogPostVideo