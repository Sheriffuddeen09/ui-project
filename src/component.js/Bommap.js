import { boms } from "./Mapout"
import BomPost from "./BomPost"
const Bommap = () =>{

    return (
        <div>
            {
                boms.map(bom =>(
                    <BomPost bom={bom} key={bom.id}/>
                ))
            }
        </div>
    )
}
export default Bommap