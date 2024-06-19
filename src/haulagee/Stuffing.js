import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select'
const Stuffing = () =>{

const [value, setValue] = useState('') 


    return (
        <div>
           <div>
                <ReactFlagsSelect 
                className='stuff'
                placeholder='.'
                searchPlaceholder="Input pick up location"
                value={value}
                onSelect={(code) => setValue(code)}
                searchable
                />
        </div>
        </div>
    )
}

export default Stuffing
/*import { useState } from "react";

const Stuffing = () =>{

const [value, setValue] = useState('') 
const [data, setData] = useState([]) 

const handleChange = async (e) =>{
    setValue(e.target.value)
    const response = await fetch('')
    const data = await response.json()
    setData(data)
}

    return (
        <div>
           <div>
                <input 
                className="inputs"
                type="text"
                id="value"
                placeholder="Input pick up location"
                value={value}
                onChange={handleChange}/>
        </div>
        <div className="dropdown">
               {
                data.filter(item => item.country.startWith(value) && item.country !== value).map((item) =>{
                    <div key={item.id} onClick={(e) => setValue(item.country)}>
                        {item.country}
                    </div>
                })
               }
        </div>
        </div>
    )
}


export default Stuffing
*/
