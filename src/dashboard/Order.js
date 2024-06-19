import OrderList from "./OrderList"
import { posts } from "./Dashboard"
const Order = () =>{

    return(
        <div>
            <ul className=" ">
        {
            posts.map((post) =>(
                <OrderList key={post.id} post={post}/>
            ))
        }
       </ul>
        </div>
    )
}
export default Order