
const ListItem = ({item}) =>{

    return (
<div className="spe">
<div className="special">
    <div className="rates ratenot1">
       <div className="ratt">
        <p>
        {item.title}
        </p>
        <p className="blur">
        {item.title}
        </p>
        <p className="blur">
        {item.title}
        </p>
        </div>
        <div className="blur"> 
        {item.title} port
        </div>
       <span className="hr"> </span>
    <div className="rate">
        <p className='p10'>
        {item.sail}
        </p>
        <p className='p11'> 
        {item.transit}
        </p>
        <p className='p12'>
        {item.free}
        </p>
    </div>
    <div className="ratex"> 
        <button className="b1"> </button>
        <button className="b1"> </button>
        <button className="b1"> </button>
    </div>
</div>
       <div className="rates ratenot">
       <div className="ratt">
        <p>
        {item.title}
        </p>
        <p className="blur">
        {item.title}
        </p>
        <p className="blur">
        {item.title}
        </p>
        </div>
        <div className="blur"> 
        {item.title} port
        </div>
        <span className="hr"> </span>
       <div className="rate">
        <p className='p10'>
        {item.sail}
        </p>
        <p className='p11'>
        {item.transit}
        </p>
        <p className='p12'>
        {item.free}
        </p>
    </div>
    <div className="ratex"> 
        <button className="b1"> </button>
        <button className="b1"> </button>
        <button className="b1"> </button>
    </div>
      </div>
      <div className="rates">
      <div className="ratt">
        <p>
        {item.title}
        </p>
        <p className="blur">
        {item.title}
        </p>
        <p className="blur">
        {item.title}
        </p>
        </div>
        <div className="blur"> 
        {item.title} port
        </div>
        <span className="hr"> </span>
      <div className="rate">
        <p className='p10'>
        {item.sail}
        </p>
        <p className='p11'>
        {item.transit}
        </p>
        <p className='p12'>
        {item.free}
        </p>
    </div>
    <div className="ratex"> 
        <button className="b1"> </button>
        <button className="b1"> </button>
        <button className="b1"> </button>
    </div>
    </div>
    </div>
        <p className="pi"> {item.body}  </p >
        <p className="pii"> {item.paragraph} &nbsp; <p className="pi4">{item.id}</p></p>
        <p className="piii"> {item.paragraph2} </p>

        <button className="buttsi"> Create an Account </button>
        <p p className="pii2">Already have an account? &nbsp;<p className="pi4">Sign in</p></p>
    </div>
    )
}
export default ListItem