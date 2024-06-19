import { useState } from "react";
import { fts } from "../component/Data";
const Fts = () =>{

const [country, setCountry] = useState('') 

let options
   
        options = fts.map(ocean => {
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


export default Fts