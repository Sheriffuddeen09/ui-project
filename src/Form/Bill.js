import useFormContext from "./hook/useFormContext"
const Bill = () =>{

    const {data, handleChange} = useFormContext()

    return (
        <section>
            <div>
            <div className="div1">
            <span className="span1">
                <label className="label1">FirstName </label>
                <input className="input2 inputs1"
            type='text' placeholder="Firstname"
             value={data.billFirstName}
             pattern="([A-Z])[\w+.]{1,}"
            onChange={handleChange}
            name="billFirstName"
             />
            </span>
            <span className="span1">
            <label className="label2">LastName </label>
            <input className="input2 inputs2"
            type='text' placeholder="Lastname"
            pattern="([A-Z])[\w+.]{1,}"
             value={data.billLastName}
            onChange={handleChange}
            name="billLastName"
             />
            </span>
            </div>
            <div>
                <p className="label1"> Address 1</p>
            <input className="input3"
            type='text' placeholder="Address 1"
             value={data.billAddress1}
            onChange={handleChange}
            pattern="[\w\d\s.#]{2,}"
            name="billAddress1"
             />
            </div>
            <span>
            <p className="label1"> Address 2</p>
            <input className="input4"
            type='text' placeholder="Address 2"
             value={data.billAddress2}
             name="billAddress2"
             pattern="[\w\d\s.#]{2,}"
            onChange={handleChange}
             />
            </span>
            </div>
            <div>
            <p className="label1"> State</p>
            <input className="input5"
            type='text' placeholder="State"
             value={data.billCity}
             name="billCity"
             pattern="([A-Z])[\w\s.]{1,}"
            onChange={handleChange}
             />
            </div>
            <div className="div1">
            <span className="span1">
                <p className="label1">Country</p>
            <select className="input6"
            type='text'
             value={data.billState}
            name='billState'
            onChange={handleChange}>
                <option value=''></option>
                <option value='nig'>Nigeria</option>
                <option value='alg'>Algeria</option>
                <option value='bel'>Belgium</option>
                <option value='gha'>Ghana</option>
                <option value='bra'>Brazil</option>
                <option value='usa'>USA</option>
            </select>
            </span>
            <span className="span1">
            <p className="label1">Zip Code </p>
            <input className="input7"
            type='text' placeholder="Zip Code"
            name='billZipCode'
             value={data.billZipCode}
            onChange={handleChange}
             />
            </span>
            </div>
        </section>
    )
}
export default Bill