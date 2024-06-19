import { useState } from "react";
import Ports from "./Ports";
import { oceans } from "../component/Data";
import Fit from "./Fit";
const Shipment = () =>{

const [country, setCountry] = useState('') 
const [date, setDate] = useState('') 
//const [input, setInput] = useState('') 

let options
   
        options = oceans.map(ocean => {
            return (
                <option key={`opt${ocean.id}`} value={ocean.id}>
                    {ocean.title}
                    
                </option>
            )
        })
        const titleValue = <option key="opt0" value="0">city</option>
        options.push(titleValue)
    
    let content
   
        content = (
            <select className='select'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >{options}</select>
        )
    

    return (
<div> 
        <p className="book"> 
        Book Your International 
        </p>
        <p className="book2 h8a"> 
        Shipments In Minutes
        </p> 
    <div className="shipment">
        <div className="shipline">
        <span>
        <p className="p"> Port of Loading</p>
        {content}
        </span>
        <span>
        <p className="p"> Port of Destination</p>
        <Ports />
        </span>
       </div>
       <div className="shipline">
        <span>
        <p className="pp pp2"> Cargo Ready Date</p>
        <input 
        type="date"
        className="inputline"
        placeholder='11/31/2023'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />
        </span>
        <span>
        <p className="p pty">Container Size & Types</p>
        <Fit />
        </span>
        </div>
        <button className="buttons btn">
        Process
        </button>
    
    </div>
</div>
        )
}


export default Shipment

/*
<span>
        <input 
        type="input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input"
        />
        </span>*/