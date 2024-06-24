import './post.css';
import { useState } from "react"
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
import { useParams } from 'react-router-dom';
import MessageComment from './MessageComment';
const MessagePage = ({chatme,ChatSubmit, ChatDelete,chatTitle, setChatTitle, chatMessages}) =>{

    const {id} = useParams()
    const post = chatme.find(post => (post.id).toString() === id)

    const [isVisible, setIsVisible] = useState(false)

    const [share, setShare] = useState(false)

    const toggleShare = () =>{
        setShare(!share)
    }
    
    const showUrl = window.location.href 
   
    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }

    return(
        <div className='bodymessage'>
        <div className='allcomment'>
        {post &&
        <>      
        <div className='messageFlex'>
        <img src={post.logo} alt='iphone' width={60} height={60} className='messimage'/>
            <span className=''>
                <p className='messagetitle'> {post.surname}</p>
                <p className='messagemin'> {post.min}</p>
            </span>
            <div className='menu-me' onClick={toggleSubmit} >
            <span>
        <button onClick={toggleSubmit} className={`'button-bar' ${isVisible ? 'button-bar' : 'invision'}`}> 
            <div className='menu-button'> </div>
          </button>
        </span>   
        <button onClick={() => ChatDelete(post.id)} className="deletebutton">
                X
        </button>
        <div>
        <span className={`'menu-shares' ${isVisible ? 'menu-shares' : 'button-menu'}`}>
            <div className="menu-backgroud">
            <button onClick={toggleSubmit} className={`'close-bar' ${isVisible ? 'closed' : 'close-bar'}`}> 
            X
            </button>
            <button className='btn-fl' onClick={toggleShare}>share</button>
        <div className={`'menu-shareds' ${share ? 'menu-shareds' : 'button-menu'}`}>
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
        
       </div>
        </div>
        <p className='messageline'> </p>
<p className="co">12 August 2022</p>
<p className="coo">addChat and calls are end-to-end encrypted No one outside of this chat, not even WhatsApp, can read or listen to them. tap to learn more</p>

</>
        }
        </div>
        {
            chatMessages.map(comment =>(
                <MessageComment comment={comment} ChatDelete={ChatDelete}/>
            ))
        }
                <form onSubmit={ChatSubmit} >
                <input type='text' 
                placeholder='Message'
                className={`'menu-shar' ${isVisible ? 'menu-shar' : 'commentinput'}`}
                value={chatTitle}
                onChange={(e) => setChatTitle(e.target.value)}
                />
            </form>    
        </div>           

   
    )
}
export default MessagePage