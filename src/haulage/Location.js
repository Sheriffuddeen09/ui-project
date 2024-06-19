import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select'
const Location = () =>{

const [value, setValue] = useState('') 


    return (
        <div>
           <div>
                <ReactFlagsSelect 
                className="stuff"
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


export default Location