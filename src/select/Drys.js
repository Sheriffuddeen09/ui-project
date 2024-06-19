import { useState } from "react";
import { drys } from "../component/Data";
const Drys = () =>{

const [country, setCountry] = useState('') 

let options
    
        options = drys.map(ocean => {
            return (
                <option className="option" key={`opt${ocean.id}`} value={ocean.id}>
                    <p className="option">{ocean.title}</p>
                    <br />
                    <p className="option">{ocean.city}</p>
                </option>
            )
        })
    

    let content
   
        content = (
            <select className='selec'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >{options}</select>
        )
    

    return content
}


export default Drys