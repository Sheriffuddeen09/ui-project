
const ListItem = ({item}) =>{

    return (
<div className="spe">
<div className="special">
    <div className="rates ratenot1" data-aos="fade-left">
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
       <div className="rates ratenot " data-aos="zoom-in">
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
      <div className="rates" data-aos="fade-right">
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
    
        <p className="pi" data-aos="fade-left"> {item.body}  </p >
        <p className="pii" data-aos="fade-right"> {item.paragraph} &nbsp; <p className="pi4">{item.id}</p></p>
        <p className="piii" data-aos="zoom-in"> {item.paragraph2} </p>

        <button className="buttsi" data-aos="flip-right"> Create an Account </button>
        <p p className="pii2" data-aos="fade-right">Already have an account? &nbsp;<p className="pi4">Sign in</p></p>
    </div>
    )
}
export default ListItem