import ListItem from "./ListItem"
import { esls } from "../component/Data"
const Esl = () =>{

    return (
       <ul>
        {
            esls.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    )
}
export default Esl