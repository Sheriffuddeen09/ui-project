import { useState } from "react";

const FreightWeight = () =>{

const [search, setSearch] = useState('') 

    return (
        <div>
           
                <input 
                className="inputline"
                type="text"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            
        </div>
    )
}


export default FreightWeight