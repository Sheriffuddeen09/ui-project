import { useState } from "react";

const Weight = () =>{

const [search, setSearch] = useState('') 

    return (
        <div>
           
                <input 
                className="inputs int"
                type="text"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            
        </div>
    )
}


export default Weight