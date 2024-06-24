import useFormContext from "./hook/useFormContext"
import { useNavigate } from "react-router-dom"
import { useMemo } from "react"
const Progress = () => {
    const {page, title} = useFormContext()
    const navigate = useNavigate()
   
 
    return useMemo(() => {
    
        const goBack = () => navigate(-1)
    const interval = 100 / Object.keys(title).length
    const progress = ((page + 1) * interval).toFixed(2)
    const steps = Object.keys(title).map((step, i) => (
        <div className="step fontstep" key={i}>Step { i + 1} 
        
        </div>
    ))

    
    return(

        <div>

            <div >
             <span className="step-flex">
             {steps}
            </span>
             <span className="border"> </span>
             <span className="border1"> </span>
            </div>
            
            <progress 
            value={progress}
            max={100}
            />
            <div> <button className="gobuttonform" onClick={goBack}>Go Back</button> </div>
        </div>
    ) 

    }, [page,title, navigate])
}
export default Progress