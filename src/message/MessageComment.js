import {useState} from 'react'

const MessageComment = ({comment, ChatDelete}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    } 
   

    return(

        <div>
            
            <span className="postsitem commentnow">
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