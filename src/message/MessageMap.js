import './post.css'
import MessageList from "./MessageList"
const MessageMap = ({chatme, length}) =>{


    return (
       <div>

        {
            chatme.map((post) =>(
                <MessageList key={post.id} post={post} length={length} />
            ))
        }
    </div>
    )
}
export default MessageMap