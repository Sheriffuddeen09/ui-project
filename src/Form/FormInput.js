import Pay from "./Pay"
import Ship from './Ship'
import Bill from "./Bill"
import useContent from "./hook/useFormContext"
const FormInput = () =>{

    const {page} = useContent()
    
    const display = {
        0: <Bill/>,
        1: <Ship/>,
        2: <Pay/>,
    }
    return (
        <div>
             {display[page]}
        </div>
    )
}
export default FormInput