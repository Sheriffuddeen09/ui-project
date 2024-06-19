import ListItem from "./ListItem"
import { pils } from "../component/Data"
const Pil = () =>{

    return (
       <ul>
        {
            pils.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default Pil