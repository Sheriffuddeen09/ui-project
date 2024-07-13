import { getBoms } from "./api/axios"
import BomPost from "./BomPost"
import { useQuery } from "react-query"
import { boms } from "./Mapout"
const Bommap = () =>{
    const{
        isLoading,
        error,
        isError,
        data: bom
    } = useQuery('boms', getBoms)


    let content

    if (isLoading) {
    content = <p className=""></p>
    }
    else if (isError) {
    content = <p>{error.message}</p>
    }
    
        content=(
            <div>
            {
                boms.map(bom =>(
                    <BomPost bom={bom} key={bom.id}/>
                ))
            }
        </div>
        )
    return content
}
export default Bommap