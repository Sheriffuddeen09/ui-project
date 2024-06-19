import PostList from "./PostList"
const Postmap = ({posts, handleDelete, comment}) =>{


    return (
       <div className="">

        {
            posts.map((post) =>(
                <PostList key={post.id} post={post} comment={comment} handleDelete={handleDelete} />
            ))
        }
    </div>
    )
}
export default Postmap