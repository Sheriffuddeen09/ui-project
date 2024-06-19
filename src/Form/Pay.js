import useFormContext from "./hook/useFormContext"

const Pay = () =>{
     const {data, handleChange} = useFormContext()
    return (
        <div>
            <span className="ship">
            <input className="check1"
            type='checkbox'
            checked={data.payCheckBox}
            onChange={handleChange}
            name="payCheckBox"
             />
            </span>
             <div>
            <p className="pay"> Receive our newsletter </p>
            <p>Save 10% Now </p>
            <p> Receive Discount Coupons </p>
            <p> Find Out About New Product </p>
           
            </div>
        </div>
    )
}
export default Pay