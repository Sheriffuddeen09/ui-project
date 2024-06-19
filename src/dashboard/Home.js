import List from "./List"
import './main.css'
import SideDashboard from "./SideDashboard"
const HomeDashboard = ({items, posts}) =>{

return(
<div className="sidedashboard">
    <div className="maindashboard">
        <List items={items}
        posts={posts}
        />
    </div>
    <div className="">
        <SideDashboard />
    </div>

</div>
)
}
export default HomeDashboard