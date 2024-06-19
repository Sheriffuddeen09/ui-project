import { useState } from "react";
import PortName from "./PortName";
import ContainerSize from "./ContainerSize";
import Commodity from "./Commodity";

const ShipType = () =>{

const [type, setType] = useState('') 

    return (
    <div> 
        <p className="book ha5"> 
        We Handle Your Customs
        </p>
        <p className="book2 h8a"> 
        Clearance With Precision.
        </p>
        <div className="shipment">
            <div className="shipline">
           <span>
                <p className="p">Shipment Type</p>
                <select
                className="select"
                value={type}
                onChange={(e) => setType(e.target.value)}>
                    <option value=''> 
                    </option>
                    <option value='import'>
                    Import
                    </option>
                    <option value='export'>
                    Export
                    </option>
                </select>
            </span>
            <span>
            <p className="p"> Port Nmae</p>
            <PortName />
            </span>
            </div>
            <div className="shipline">
            <span>
             <p className="p pty"> Container Size & Type</p>
            <ContainerSize />
            </span>
            <span>
            <p className="pp cp"> Commodity Type</p>
            <Commodity />
            </span>
            </div>
            <button className="buttons btn">
                Process
            </button>
        </div>
    </div>
    )
}


export default ShipType