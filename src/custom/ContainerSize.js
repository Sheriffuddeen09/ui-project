import { sizes } from "../component/Data";
import { useState } from "react";
const ContainerSize = () =>{

const [fit, setFit] = useState('')
let options
    
        options = sizes.map(ocean => {
            return (
                <option key={`opt${ocean.id}`} value={ocean.id}>
                    <p className="option">{ocean.title}</p>
                    <br />
                    <p className="option">{ocean.city}</p>
                </option>
            )
        })

    let content
    
        content = (
            <select className='select selectmedia'
                value={fit}
                onChange={(e) => setFit(e.target.value)}
            >{options}</select>
        )

    return content
}

export default ContainerSize