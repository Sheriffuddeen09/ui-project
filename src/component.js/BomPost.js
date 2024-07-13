
const BomPost = ({bom}) =>{

return (
    <div>
        <div className="flexbomout">
            <img src={bom.image} alt="imagebom" width={60}
            height={50} />
            <div>
                <p className="p16">{bom.title}</p>
                <p>{bom.date}</p>
            </div>
            <div>
                <p className="p15">{bom.emirate}</p>
                <p className="p17">{bom.min}</p>
                <p>{bom.non}</p>
            </div>
            <div>
                <p className="p18">{bom.bom}</p>
                <p className="p19">{bom.time}</p>
            </div>
            <div>
                <p className="p21">{bom.price}</p>
                <p className="p20">{bom.button}</p>
            </div>
        </div>

    </div>
)
}
export default BomPost