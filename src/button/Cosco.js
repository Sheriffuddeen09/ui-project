import ListItem from "./ListItem"
import { coscos } from "../component/Data"
const Cosco = () =>{

    return (
       <ul>
        {
            coscos.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default Cosco