import ListItem from "./ListItem"
import { oocls } from "../component/Data"
const Oocl = () =>{

    return (
       <ul>
        {
            oocls.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default Oocl