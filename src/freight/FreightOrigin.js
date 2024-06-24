import { useState } from "react";
import FreightLocation from "./FreightLocation";
import FreightWeight from "./FreightWeight";
import { ports } from "../component/Data";
const FreightOrigin = () =>{

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
    

    return (
<div> 
        <p style={{
            color: 'white'
        }} className="book3 ha1"> 
        We Ensure Your Cargo Reaches
        </p>
        <p className="book2 ha2"> 
        Destination Safely And On Time
        </p>
    <div className="shipment">
        <div className="shipline">
        <span>
        <p className="p"> Origin port</p>
        {content}
        </span>
        <span>
        <p className="pp" style={{translate:'10px'}}> Drop off Location</p>
        <FreightLocation />
        </span>
        </div>
        <div className="shipline">
        <span>
        <p className="pp cp"> Goods Total Weight</p>
        <FreightWeight />
        </span>
        <button className="buttons">
            Process
        </button>
        </div>
    </div>
</div>
        )
}


export default FreightOrigin