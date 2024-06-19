import ListItem from "./ListItem"
import { maresks } from "../component/Data"
const Maresk = () =>{

    return (
       <ul>
        {
            maresks.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default Maresk