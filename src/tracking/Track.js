import { useState } from "react";

const Track = () =>{

const [search, setSearch] = useState('') 

    return (
    <div> 
        <p className="book h7a"> 
        Seamlessly Track Your 
        </p>
        <p className="book2 h7a"> 
        Shipments in One Place
        </p>  
        <div className="track">
            <span>
            <p className="p2 pc"> Job Number</p>
                <input 
                className="input2"
                type="text"
                id="search"
                placeholder="Enter your job number"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            </span>
                <button className="buttons">
                Process
                </button>
        </div>
    </div> 
    )
}


export default Track