import { useState } from "react";
import { ports } from "../component/Data";
const Ports = () =>{

const [country, setCountry] = useState('') 

let options
    
        options = ports.map(ocean => {
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
            <select className='select'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >{options}</select>
        )
    

    return content
}


export default Ports