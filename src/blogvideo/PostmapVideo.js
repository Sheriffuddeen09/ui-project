import PostListVideo from "./PostListVideo"
const PostmapVideo = ({video, handleDelete, comment}) =>{


    return (
       <div>

        {
            video.map((post) =>(
                <PostListVideo key={post.id} post={post} comment={comment} handleDelete={handleDelete} />
            ))
        }
    </div>
    )
}
export default PostmapVideo