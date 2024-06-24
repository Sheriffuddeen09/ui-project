import { useState } from "react";
import Location from "./Location";
import Container from "./Container";
import Weight from "./Weight";
import { ports } from "../component/Data";
const Origin = () =>{

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
        }} className="book3 ha1 ha4"> 
        We Ensure Your Cargo Reaches Its
        </p>
        <p className="book4 ha2"> 
        Destination Safely And On Time
        </p>
    <div className="shipment">
        <div className="shipline">
        <span>
        <p className="p"> Origin port</p>
        {content}
        </span>
        <span>
        <p className="pp py"> Drop off Location</p>
        <Location />
        </span>
        </div>
        <div className="shipline">
        <span>
        <p className="p pty"> Container Size &  Type</p>
        <Container />
        </span>
        <span>
        <p className="pp cp"> Container Weight</p>
        <Weight />
        </span>
        </div>
        <button className="buttons btn">
            Process
        </button>
    </div>
</div>
        )
}


export default Origin