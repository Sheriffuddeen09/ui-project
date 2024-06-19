import ProgressBar from "./ProgressBar"
import ListItem from "./ListItem"
import Order from "./Order"
import Main from "./Main"
import { items } from "./Map"
const List = () =>{

   return (
<div className='div30'>
<div>
       <ul className="">
        {
            items.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    <div className="join">
    <div className="col">
       <div>
        <Main />
       </div>
       <div className="pro">
       <ProgressBar/>
       </div>
    </div>
        <div className='div31'>
        <Order/>
         </div>
    </div>
    </div>
</div>
    )
}
export default List