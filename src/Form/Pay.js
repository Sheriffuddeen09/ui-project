import useFormContext from "./hook/useFormContext"

const Pay = () =>{
     const {data, handleChange} = useFormContext()
    return (
        <div className="payform">
            <span className="ship">
            <input className="check1"
            type='checkbox'
            checked={data.payCheckbox}
            onChange={handleChange}
            name="payCheckbox"
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