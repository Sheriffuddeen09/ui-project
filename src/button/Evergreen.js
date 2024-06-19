import ListItem from "./ListItem"
import { evergreens } from "../component/Data"
const Evergreen = () =>{

    return (
       <ul>
        {
            evergreens.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default Evergreen