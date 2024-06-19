import { useState } from "react";

const Commodity = () =>{

const [search, setSearch] = useState('') 

    return (
        <div>
           
                <input 
                className="inputline"
                type="text"
                id="search"
                placeholder="e.g Grains"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            
        </div>
    )
}


export default Commodity