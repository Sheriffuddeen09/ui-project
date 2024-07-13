import { getBoms } from "./api/axios"
import BomPost from "./BomPost"
import { useQuery } from "react-query"
const Bommap = () =>{
    const{
        isLoading,
        error,
        isError,
        data: boms
    } = useQuery('boms', getBoms)


    let content

    if (isLoading) {
    content = <p className=""></p>
    }
    else if (isError) {
    content = <p>{error.message}</p>
    }
    
    else{
        content=(
            <div>
            {
                boms.map(bom =>(
                    <BomPost bom={bom} key={bom.id}/>
                ))
            }
        </div>
        )
    }
    return content
}
export default Bommap