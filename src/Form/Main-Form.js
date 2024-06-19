import Form from "./Form"
import Progress from "./Progress"
import './form.css'
import { FormProvider } from "./context/FormContext"
const MainForm = () =>{

    return (
        <div>
        <FormProvider>
        <Progress/>
        <Form />
        </FormProvider>
        </div>
    )
}
export default MainForm