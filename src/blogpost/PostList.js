import { Link } from "react-router-dom"
import './post.css';
import { useState } from "react"
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
const PostList = ({post, handleDelete, comment}) =>{

    const showUrl = window.location.href 

    const [isVisible, setIsVisible] = useState(false)
    const [isImage, setIsImage] = useState(false)
    const [share, setShare] = useState(false)
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('count')) || 0)
    const [likes, setLikes] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    const toggleShare = () =>{
        setShare(!share)
    }
    const toggleFlex = () =>{
        setIsImage(!isImage)
    }
    
    const handleCount = () =>{
        setLikes(!likes)
        setLike(prev => prev + 1)
        localStorage.setItem('count', JSON.stringify(like))
    }

    return(
        <div>
        <div className='mediapost'>
            
            <div className='postflex mediaflex'>
                <img src={post.image} alt='iphone' width={30} height={30} className='postim postimmedia'/>
            <div className='div27b'>
            <p className="linecount" style={{width:'100ch'}}>
                {post.title}
            </p>
            <p className="linecounts">
                {post.date}
            </p>
            </div>
        <div className='menu-menu'>
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
            <Link to={`/post/${post.id}`} className="bloglink blogpostlink"> 
                {
                    (post.name).length <= 30 ?
                    post.name : `${(post.name).slice(0,25)}...see more`
                }
            </Link>
            
        </div>
        <div>
        <span className={`'menu-icon' ${isVisible ? 'menu-icon' : 'button-menu'}`}>
            <div className="menu-backgroud">
            <button onClick={toggleSubmit} className={`'close-bar' ${isVisible ? 'cancelled' : 'close-bar'}`}> 
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
        <div className={`disablemenu ${isVisible ? 'disablemenu' : 'visible'}`} >
        <span onClick={toggleFlex}>
            <img src={post.logo} alt='phone' height={400} width={600} className="blogimg blogimgpost"/>
         </span>
        <div className={`'menu-image' ${isImage ? 'menu-image' : 'button-menu'}`}>
        <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
            X
            </button>
        <img src={post.logo} alt='phone' height={400} width={400} className="blogflex"/>
        <span>
        <button className="btn-slex" ><Link style={{
            textDecoration: 'none'
        }} to={`/post/${post.id}`}>{comment}</Link></button>
        <button className="btn-slex" onClick={toggleShare}>share</button>
        </span>
       </div>
       <span className="commentline">
        <button style={{
            background:'whitesmoke',
            border: 'none',
            padding:'5px',
            width:'60px', 
            borderRadius: '15px',
            translate: '-20px'
        }} className={`'dislike' ${likes ? 'like' : 'dislike'}`} onClick={handleCount}>{like}</button>
        <button className={`'btnicon' ${isImage ? 'btnicon' : 'btn-flex'}`} ><Link style={{
            textDecoration: 'none'
        }} to={`/post/${post.id}`}>{comment}</Link></button>
        <button className={`'btnicon' ${isImage ? 'btnicon' : 'btn-flex'}`}  onClick={toggleShare}>share</button>
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
        </div>
    )
}
export default PostList