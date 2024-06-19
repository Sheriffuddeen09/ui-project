import Origin from "./haulage/Origin"
import { useState } from "react"
import Drop from "./haulagee/Drop"

const SeamLes = () =>{

    const [toggle, setToggle] = useState(1)

    const handleToggle = (id) => {
        setToggle(id)
    }
return(

    <div className="">
        <ul className="">
        <li onClick={() => handleToggle(1)} className={toggle === 1 ? "selecte2" : "li2"}>
                Port to Door
            </li >
            <li onClick={() => handleToggle(2)} className={toggle === 2 ? "selecte2" : "li2"}>
                Door to Port
            </li >
        </ul>
        <div className={toggle === 1 ? "show-content" : "content"}>
            <Origin/>
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
            <Drop/>
        </div>
</div>

    )
}
export default SeamLes