import { Link } from 'react-router-dom';
import { useState } from "react"
import { useParams } from 'react-router-dom';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
import 'react-html5video/dist/styles.css'
import {DefaultPlayer as Video} from 'react-html5video'
import PostCommentVideo from './PostCommentVideo'
const BlogPageVideo = ({video, handleDelete, comment, handleComment, handleSubmit, title,comments, setTitle}) =>{

    const {id} = useParams()
    const post = video.find(post => (post.id).toString() === id)

    const [share, setShare] = useState(false)
    const showUrl = window.location.href 
    const [isVisible, setIsVisible] = useState(false)
    const [like, setLike] = useState(0)
    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    const toggleShare = () =>{
        setShare(!share)
    }

    return(
        <div className='postbody'>
        <div className='postbody'>
        {post &&
        <>        
            <div className='postflex postflexing'>
                <img src={post.logo} alt='iphone' width={30} height={30} className='postim postimvideo'/>
            <div className='div27 div27a'>
            <p className='linecoun' style={{width:'100px'}}>
                {post.title}
            </p>
            <p className='linecouns'>
                {post.date}
            </p>
            </div>
        <div className='menu-me ' onClick={toggleSubmit}>
        <span>
        <button className={`'button-bar' ${isVisible ? 'button-bar' : 'invision'}`}> 
            <div className='menu-button'> </div>
          </button>
        </span>   
        <div className='postba'>
        <span className={`'menu-icons' ${isVisible ? 'menu-icons' : 'button-menu'}`}>
        <div className="menu-backgroud">
          <button className={`'close-bar' ${isVisible ? 'closed' : 'close-bar'}`}> 
          X
          </button>
        
        <Link style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer'
            }} to={`/update/${post.id}`}> Edit</Link>
        </div>
        </span>
        </div>
        <button onClick={() => handleDelete(post.id)} className='deletebutton'>x</button>
        </div>
            </div>
            <p className='bloglink bloglinkvideo'> 
            {post.name}
            </p>
            <span>
            <Video loop style={{width: '700px',
                                translate: '0px'
}}
            onCanPlayThrough={() => console.log('video')} className="blogimg blogimgvideo">
                <source src={post.icon} type="video/webm" width={400} height={400} />
            </Video>
         </span>
        
        <span className='buttonicon buttoniconvideo'>
        <div style={{
                                translate: '-200px'
}}>
        <button className='btn-fles' onClick={() => setLike(prev => prev + 1)}>{like}</button>
        <button className='btn-fles'>{comment}</button>
        <button className='btn-fles share-btn' onClick={toggleShare}>share</button>
        </div>
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
        <div>
            {
                comments.map(comment=>(
                    <PostCommentVideo key={post.id} post={post} comment={comment} handleComment={handleComment} />
                ))
            }
            <form onSubmit={handleSubmit}>
                <input type='text' 
                placeholder='comment'
                value={title}
                className='input inputvideo'
                onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </div>
        </>
            }
            </div>
        </div>
    )
}
export default BlogPageVideo