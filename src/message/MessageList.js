import { Link } from "react-router-dom"
import { useState } from "react"
const MessageList = ({post, length}) =>{

    const [isImage, setIsImage] = useState(false)

    const toggleFlex = () =>{
        setIsImage(!isImage)
    }

    return(
        <div>
        <div className='allmessage '>
            
            <div className='postflex postflexmessage'>
            <span onClick={toggleFlex}>
            <img src={post.logo} alt='iphone' width={60} height={60} className='messimage'/>

         </span>
       <Link to={`/mes/${post.id}`} className="bloglink"> 
            <div className='mesFlex'>
                <div className="mes"> 
            <p className="name">
                {post.surname}
            </p>
            <p className="mins">
                {post.min}
            </p>
            </div>
            <div className="mes">
                <p className="message">
                {
                    (post.text).length <= 30 ?
                    post.text : `${(post.text).slice(0,25)}...see more`
                }
                </p>
                <p className="num">
                <p className="nu">{length}</p>
                </p>
            </div>
            </div>
            </Link>
            </div>
            
        </div>
      
        </div>
    )
}
export default MessageList