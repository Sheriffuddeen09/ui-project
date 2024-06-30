

const FilterButtons =({orders, setOrders}) =>{

    const filterResult = (cartItem) =>{
        const result = orders.filter((curData) =>{
            return curData.category === cartItem
        })
        setOrders(result)
    }

    return (
        <div>
            <button className="filter-button" category='show' type="button" onClick={() => filterResult('shoe')}>Shoe</button>
            <button className="filter-button" category='watch'type="button" onClick={() => filterResult('watch')}>Watch</button>
            <button className="filter-button" category='jewelry' type="button" onClick={() => filterResult('jewelry')}>Jewelry</button>
            <button className="filter-button" category='electronic'type="button" onClick={() => filterResult('electronic')}>Electronic</button>
            <button className="filter-button" category='iphone'type="button" onClick={() => filterResult('iphone')}>Iphone-13</button>
        </div>
    )
}
export default FilterButtons