
const ListItem = ({item}) =>{

    return (
        <div className="mainer">
            <div className="main">
                <div className="main2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>
</p>
                    <p>{item.week}</p>
                </div>
                <div className="main3">
                    <p>{item.sale}</p>
                    <p className="main11">{item.volume}</p>
                    <p className="main12">{item.completed}</p>

                </div>
                <div className="main4">
                    <div className="small2">
                    <p>{item.price}</p>
                    <p className="small">{item.adde}</p>
                    </div>
                    <div className="small2">
                    <p>{item.pric} </p>
                    <p className="small">{item.add}</p>
                    <p className="main13">{item.pri}</p>
                    </div>
                </div>
            </div>
            <div className="main force">
                <div className="main2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>
</p>
                    <p>{item.week}</p>
                </div>
                <div className="main3">
                    <p>{item.customer}</p>
                    <p className="main11">{item.active}</p>
                    <p className="main12">{item.prices}</p>

                </div>
                <div className="main4">
                    <div className="small2">
                    <p>{item.prics}</p>
                    <p className="small">{item.adds}</p>
                    </div>
                    <div className="small2">
                    <p>{item.pria} </p>
                    <p className="small">{item.adde}</p>
                    <p className="main13">{item.pri}</p>
                    </div>
                </div>
            </div>
            <div className="main force1">
                <div className="main2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>
</p>
                    <p>{item.week}</p>
                </div>
                <div className="main3">
                    <p>{item.order}</p>
                    <p className="main11">{item.pending}</p>
                    <p className="main12">{item.complete}</p>

                </div>
                <div className="main4">
                    <div className="small2">
                    <p>{item.pricee}</p>
                    <p className="small">{item.prica}</p>
                    </div>
                    <div className="small2">
                    <p>{item.pris} </p>
                    <p className="small">{item.add}</p>
                    <p className="main13">{item.pri}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListItem