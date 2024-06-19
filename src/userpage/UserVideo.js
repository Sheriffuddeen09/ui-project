import { Link } from "react-router-dom"
//import './post.css';
import { useState } from "react"
import 'react-html5video/dist/styles.css'
import {DefaultPlayer as Video} from 'react-html5video'
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
import thum from './images/image-1.jpeg'
const UserListVideo = ({post, handleDelete, comment}) =>{

    const [isVisible, setIsVisible] = useState(false)
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('count')) || 0)
    const [share, setShare] = useState(false)

    const toggleShare = () =>{
        setShare(!share)
    }
    
    const showUrl = window.location.href 
    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
   
    const handleCount = () =>{

        setLike(prev => prev + 1)
        localStorage.setItem('count', JSON.stringify(like))
    }

    return(
        <div>
        <div className=''>
            
            <div className='postflex'>
                <img src={post.userlogo} alt='iphone' width={30} height={30} className='postim'/>
            <div className='div27'>
            <p>
                {post.usertitle}
            </p>
            <p >
                {post.userdate}
            </p>
            </div>
        <div className='menu-me'>
        <span>
        <button onClick={toggleSubmit} className={`'button-bar' ${isVisible ? 'button-bar' : 'invision'}`}> 
            <div className='menu-button'> </div>
          </button>
        </span>   
        <button onClick={() => handleDelete(post.id)} className="deletebutton">
                X
            </button>
        <div className='postba'>
        </div>
        </div>
            </div>
            <Link to={`/video/${post.id}`} className="bloglink"> 
                {
                    (post.username).length <= 30 ?
                    post.username : `${(post.username).slice(0,25)}...see more`
                }
            </Link>
            
        </div>
        <div>
        <span className={`'menu-toggle' ${isVisible ? 'menu-toggle' : 'button-menu'}`}>
            <div className="menu-backgroud">
            <button onClick={toggleSubmit} className={`'close-bar' ${isVisible ? 'closed' : 'close-bar'}`}> 
            X
            </button>
            <Link to={`/update/${post.id}`} style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer'
            }}>Edit</Link>
            <p style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer'

            }}>Copy </p>
            </div>
            </span>
            
        </div>
        <span>
            <Video loop style={{width: '700px',
                            
}}
            poster={thum} onCanPlayThrough={() => console.log('video')} className="blogimg">
                <source src={post.usericon} type="video/webm" width={400} height={400} />
            </Video>
         </span>
      
       <span className='buttonicon'>
        <button className='btn-fles' onClick={handleCount}>{like}</button>
        <button className='btn-fles'><Link style={{
            textDecoration: 'none'
        }} to={`/post/${post.id}`}>{comment}</Link></button>
       <button className='btn-fles' onClick={toggleShare}>share</button>
        <div className={`'menu-share' ${share ? 'menu-share' : 'button-menu'}`}>
        <button onClick={toggleShare} className={`'closing-share' ${share ? 'closing-share' : 'close-bar'}`}> 
            X
        </button>
        <div className="icon-line">
            <FacebookShareButton url={showUrl}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url={showUrl}>
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton url={showUrl}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <TelegramShareButton url={showUrl}>
                <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
            <LinkedinShareButton url={showUrl}>
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <EmailShareButton url={showUrl}>
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
        </div>
       </div>
        </span>
        
        </div>
    )
}
export default UserListVideo