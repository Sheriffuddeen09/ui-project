import ListItem from "./ListItem"
import { ones } from "../component/Data"
const One = () =>{

    return (
       <ul>
        {
            ones.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default One