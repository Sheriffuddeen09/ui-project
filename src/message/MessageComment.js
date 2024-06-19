import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
import {useState} from 'react'

const MessageComment = ({comment, ChatDelete}) =>{

    const [share, setShare] = useState(false)
    const showUrl = window.location.href 
    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    } 
    const toggleShare = () =>{
        setShare(!share)
    }
    

    return(

        <div>
            
            <span className="postsitem">
            <p className="postpara">{comment.messageMe} </p>
            <p className="postparagr">{comment.date}</p>
            
            <div className='menu' onClick={toggleSubmit}>
        <span>
        <button className={`'button-bar' ${isVisible ? 'button-bar' : 'invision'}`}> 
            <div className='menu-button'> </div>
          </button>
        </span>   
        <div className='postba'>
        <span className={`'menu-shared' ${isVisible ? 'menu-shared' : 'button-menu'}`}>
        <div className="menu-backgroud">
          <button className={`'close-bar' ${isVisible ? 'closed' : 'close-bar'}`}> 
          X
          </button>
        
        <button onClick={() => ChatDelete(comment.id)} style={{
                textDecoration: 'none',
                marginTop: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: 'black',
                border: 'none',
                padding: '10px',
                width: '100px',
                borderRadius: '10px',
                color: 'white'
            }}> Delete</button>
          
          </div>
        </span>
          </div> 
        </div>
    </span>
    </div>
    )

}

export default MessageComment