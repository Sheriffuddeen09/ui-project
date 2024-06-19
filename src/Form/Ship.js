import useFormContext from "./hook/useFormContext"

const Ship = () =>{

    const {data, handleChange} = useFormContext()

    return (
        <section>
             <span className="ship">
            <input className="check"
            type='checkbox'
            checked={data.sameAsBilling}
            onChange={handleChange}
            name="sameAsBilling"
             />
             <p className="label2"> Same Fill</p>
            </span>
            <div>
            <div className="div1">
            <span className="span1">
                <label className="label1">FirstName </label>
                <input className="input2"
            type='text' placeholder="Firstname"
             disabled={data.sameAsBilling}
             value={data.shipFirstName}
             pattern="([A-Z])[\w+.]{1,}"
            onChange={handleChange}
            name="shipFirstName"
             />
            </span>
            <span className="span1">
            <label className="label2">LastName </label>
            <input className="input2"
            type='text' placeholder="Lastname"
            pattern="([A-Z])[\w+.]{1,}"
             value={data.shipLastName}
             disabled={data.sameAsBilling}
            onChange={handleChange}
            name="shipLastName"
             />
            </span>
            </div>
            <div>
                <p className="label1"> Address 1</p>
            <input className="input3"
            type='text' placeholder="Address 1"
             value={data.shipAddress1}
             disabled={data.sameAsBilling}
            onChange={handleChange}
            pattern="[\w\d\s.#]{2,}"
            name="shipAddress1"
             />
            </div>
            <span>
            <p className="label1"> Address 2</p>
            <input className="input4"
            type='text' placeholder="Address 2"
             disabled={data.sameAsBilling}
             value={data.shipAddress2}
             name="shipAddress2"
             pattern="[\w\d\s.#]{2,}"
            onChange={handleChange}
             />
            </span>
            </div>
            <div>
            <p className="label1"> State</p>
            <input className="input5"
            type='text' placeholder="State"
             disabled={data.sameAsBilling}
             value={data.shipCity}
             name="shipCity"
             pattern="([A-Z])[\w\s.]{1,}"
            onChange={handleChange}
             />
            </div>
            <div className="div1">
            <span className="span1">
                <p className="label1">Country</p>
            <select className="input6"
             disabled={data.sameAsBilling}
            type='text'
             value={data.shipState}
            name='shipState'
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
             disabled={data.sameAsBilling}
            name='shipZipCode'
             value={data.shipZipCode}
            onChange={handleChange}
             />
            </span>
            </div>
        </section>
    )
}
export default Ship