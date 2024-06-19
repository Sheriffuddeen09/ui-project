import moment from 'moment'
import { Lists } from './blogpost/Posts'
import './media.css'
import BlogPage from "./blogpost/BlogPage"
import { Route, Routes } from "react-router-dom"
import { order } from './order/component/PostOrder'
import Header from "./Header"
import { userList } from './userpage/UserPost'
import SkeletonPost from "./skeleton/SkeletonPost"
import Home from "./Home"
import BlogPost from "./BlogPost"
import { useState, useEffect } from "react"
import EditPost from './blogpost/EditPost'
import BlogPageVideo from './blogvideo/BlogPageVideo'
import BlogPostVideo from './BlogPostVideo'
import Order from './Order'
import HomeDashboard from './dashboard/Home'
import Cart from './order/Page/Cart'
import MessageNow from './MessageNow'
import MainForm from './Form/Main-Form'
import { ChatList } from './message/Posts'
import MessagePage from './message/MessagePage'
import { ListVideo } from './blogvideo/PostsVideo'
import HomeUser from './userpage/HomeUser'
import UserIdPage from './userpage/UserIdPage'
import { Videomap } from './userpage/Videomap'
import LoginPage from './login/LoginPage'
import Register from './login/Register'
const App = () =>{
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem('commentlist')) || [])
    const [chats, setChats] = useState(JSON.parse(localStorage.getItem('commentlist')) || [])
    const [title, setTitle] = useState('')
    const [orders, setOrders] = useState(order)
    const [users] = useState(userList)
    const [posts, setPosts]= useState(JSON.parse(localStorage.getItem('bloglist')) || Lists)
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [chatme] = useState(ChatList)
    const [chatTitle, setChatTitle] = useState('')
    const [video] = useState(JSON.parse(localStorage.getItem('videolist')) ||ListVideo)
    const [uservideos] = useState(Videomap)
    const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('chatlist')) || [])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
    
        setIsLoading(true)
        setTimeout(() =>{
        
        setIsLoading(false)
        }, 6000)
    }, [])

    useEffect(() =>{

        localStorage.setItem('bloglist', JSON.stringify(posts))
    },[posts])
    useEffect(() =>{

        localStorage.setItem('videolist', JSON.stringify(video))
    },[video])

    const filterResult = (cartItem) =>{
        const result = orders.filter((curData) =>{
            return curData.category === cartItem
        })
        setOrders(result)
    }

   useEffect(() =>{

    const BlogPostSearch = posts.filter((post) => ((post.title).toLowerCase().includes(search.toLowerCase())) 
    || ((post.name).toLowerCase().includes(search.toLowerCase())))

    setSearchResults(BlogPostSearch)
    }, [posts, search])

    const saveListItem = (newposts) =>{
        setComments(newposts)
        localStorage.setItem('commentlist', JSON.stringify(newposts))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!title) return 
        addItem(title)
        setTitle('')
    }
    const addItem = (item) =>{
        const date= moment().format('h:mm:ss a')
        const id = comments.length ? comments[comments.length - 1].id + 1 : 1
        const posts = {id,item, date}
        const results = [...comments, posts]
        saveListItem(results)
    }
    const handleDelete = async(id) =>{
        const listItem = posts.filter((post) => post.id !== id)
        setPosts(listItem)
        localStorage.setItem('postlist', JSON.stringify(listItem))
    }
    const userDelete = async(id) =>{
        const listItem = posts.filter((post) => post.id !== id)
        setPosts(listItem)
        localStorage.setItem('postlist', JSON.stringify(listItem))
    }
    const handleComment = async(id) =>{
        const listItem = comments.filter((comment) => comment.id !== id)
        setPosts(listItem)
        localStorage.setItem('commentlist', JSON.stringify(listItem))
    }
    
    const saveChatsMe = (newChats) =>{
        setChatTitle(newChats)
        localStorage.setItem('chatlist', JSON.stringify(newChats))
    }
    const ChatSubmit = (e) =>{
        e.preventDefault()

        if(!chatTitle) return 
        ChatAdd(chatTitle)
        setChatTitle('')
    }
    const ChatAdd = (messageMe) =>{
        const date= moment().format('h:mm:ss a')
        const id = chatMessages.length ? chatMessages[chatMessages.length - 1].id + 1 : 1
        const chatme = {id,messageMe, date}
        const results = [...chatMessages, chatme]
        saveChatsMe(results)
    }
    const ChatDelete = async(id) =>{
        const listItem = chatMessages.filter((post) => post.id !== id)
        setChatMessages(listItem)
        localStorage.setItem('chatlist', JSON.stringify(listItem))
    } 

    const MessagesaveListItem = (newposts) =>{
        setChats(newposts)
        localStorage.setItem('commentlist', JSON.stringify(newposts))
    }
    const handleMessageSubmit = (e) =>{
        e.preventDefault()

        if(!message) return 
        MessageaddItem(message)
        setMessage('')
    }
    const MessageaddItem = (item) =>{
        const date= moment().format('h:mm:ss a')
        const id = chats.length ? chats[chats.length - 1].id + 1 : 1
        const messages = {id,item, date}
        const results = [...chats, messages]
        MessagesaveListItem(results)
    }
    const handleMessageDelete = async(id) =>{
        const listItem = messages.filter((post) => post.id !== id)
        setMessages(listItem)
        localStorage.setItem('postlist', JSON.stringify(listItem))
    }
    const handleMessageComment = async(id) =>{
        const listItem = chats.filter((comment) => comment.id !== id)
        setMessages(listItem)
        localStorage.setItem('commentlist', JSON.stringify(listItem))
    }
    

    return(

        <div>
        <Header search={search} setSearch={setSearch} />

        {isLoading ? ([...Array(10).keys()].map(i =>{
            return <SkeletonPost key={i} />
      }) ) : 
      <Routes>

      <Route path="/home" element={<Home filterResult={filterResult} />} />
      <Route path="/post" element={<BlogPost posts={searchResults} comment={comments.length} handleDelete={handleDelete} />} />
      <Route path="/mes" element={<MessageNow chatme={chatme} length={chatMessages.length} />} />
      <Route path="/user" element={<HomeUser users={users} userDelete={userDelete} uservideos={uservideos} comment={comments.length}/> } />
      <Route path="/mes/:id" element={
      <MessagePage chatme={chatme} ChatSubmit={ChatSubmit} ChatDelete={ChatDelete}
      chatTitle={chatTitle} setChatTitle={setChatTitle} chatMessages={chatMessages} />} />
      <Route path="/form" element={<MainForm />} />
      <Route path="/video" element={<BlogPostVideo video={video} comment={comments.length} handleDelete={handleDelete} />} />
      <Route path="/video/:id" element={<BlogPageVideo video={video} comments={comments} title={title} setTitle={setTitle} comment={comments.length} handleMessageDelete={handleMessageDelete} handleMessageSubmit={handleMessageSubmit} handleMessageComment={handleMessageComment} />} />
      <Route path="/post/:id" element={<BlogPage posts={searchResults} comments={comments} title={title} setTitle={setTitle} comment={comments.length} handleDelete={handleDelete} handleSubmit={handleSubmit} handleComment={handleComment} />} />
      <Route path="/user/:id" element={<UserIdPage users={users} comments={comments} title={title} setTitle={setTitle} comment={comments.length} userDelete={userDelete} handleSubmit={handleSubmit} handleComment={handleComment} />} />
      <Route path="/update/:id" element={ 
            posts.map((post) =>(
                <EditPost key={post.id} post={post} posts={posts} setPosts={setPosts}/>
            ))
        } />
        <Route path="/order" element={ <Order orders={orders} setOrders={setOrders}/>} />
        <Route path="/" element={ <LoginPage/>} />
        <Route path="/register" element={ <Register />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/dashboard" element={ <HomeDashboard />} />
      </Routes>

    }
        </div>
    )
}
export default App