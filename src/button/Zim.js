import ListItem from "./ListItem"
import { zims } from "../component/Data"
const Zim = () =>{

    return (
       <ul>
        {
            zims.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default Zim