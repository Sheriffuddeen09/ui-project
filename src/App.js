import SideBar from "./component.js/SideBar"
import Main from "./component.js/Main"
import Bom from "./component.js/Bom"
import Jfk from "./component.js/Jfk"
const App = () =>{

    return (
        <div className="flex">
            <SideBar />
            <div>
            <Main />
            <div className="flexjoin">
            <Bom />
            <Jfk />
            </div>
            </div>
        </div>
    )
}
export default App