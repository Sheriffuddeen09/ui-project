import ListItem from "./ListItem"
import { mscs } from "../component/Data"
const Msc = () =>{

    return (
       <ul>
        {
            mscs.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default Msc