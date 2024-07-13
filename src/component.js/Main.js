import { posts } from "./Mapout"
import Post from "./Post"
//import { useQuery } from "react-query"

const Main = () => {
    return (
        <div className="mainbackground">
           {
            posts.map(post =>(
                <Post post={post} key={post.id}/>
            ))
           }
        </div>
    )
}
export default Main