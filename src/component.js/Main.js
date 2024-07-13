import { getPosts } from "./api/axios"
import Post from "./Post"
import { useQuery } from "react-query"
import { posts } from "./Mapout"

const Main = () => {

    const{
        isLoading,
        error,
        isError,
        data: post
    } = useQuery('posts', getPosts)


    let content

    if (isLoading) {
    content = <p className=""></p>
    }
    else if (isError) {
    content = <p>{error.message}</p>
    }
    
   
        content=(
            <div className="mainbackground">
           {
            posts.map(post =>(
                <Post post={post} key={post.id}/>
            ))
           }
        </div>
        )
    
    return content
}
export default Main