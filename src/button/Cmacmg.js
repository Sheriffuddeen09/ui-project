import ListItem from "./ListItem"
import { cmacmgs } from "../component/Data"
const Cmacmg = () =>{

    return (
       <ul>
        {
            cmacmgs.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default Cmacmg