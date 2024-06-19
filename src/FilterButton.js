

const FilterButtons =({filteResult}) =>{

    return (
        <div>
            <button className="filter-button" category='iphonex' type="button" onClick={() => filteResult('iphonex')}>Iphone-Xr</button>
            <button className="filter-button" category='iphonei'type="button" onClick={() => filteResult('iphonei')}>Iphone-11</button>
            <button className="filter-button" category='iphoneii' type="button" onClick={() => filteResult('iphoneii')}>Iphone-12</button>
            <button className="filter-button" category='iphoneiii'type="button" onClick={() => filteResult('iphoneiii')}>Iphone-13</button>
        </div>
    )
}
export default FilterButtons