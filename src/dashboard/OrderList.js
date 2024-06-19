const OrderList = ({post}) =>{

    return(
        <div className='div32'>
            <p className='div33'>
                Recent Orders 
            </p>
            <div className='div28'>
                <span>
                <img src={post.icons} alt='iphone' width={30} height={30} className='phone'/>
                </span>
            <div className='div27i'>
            <p>
                {post.name}
            </p>
            <p >
                {post.amount}
            </p>
            </div>
            <div className='div27i'>
            <p className='div29'>
                {post.date}
            </p>
            <p className='div29a'>
                {post.complet}
            </p>
            </div>
            </div>
            <div className='div28'>
                <img src={post.icona} alt='iphone' width={30} height={30} />
            <div className='div27i'>
            <p>
                {post.name}
            </p>
            <p >
                {post.amount}
            </p>
            </div>
            <div className='div27i'>
            <p className='div29'>
                {post.date}
            </p>
            <p className='div29b'>
                {post.pend}
            </p>
            </div>
            </div>
            <div className='div28'>
                <img src={post.icons} alt='iphone' width={30} height={30} />
            <div className='div27i'>
            <p>
                {post.name}
            </p>
            <p >
                {post.amount}
            </p>
            </div>
            <div className='div27i'>
            <p className='div29'>
                {post.date}
            </p>
            <p className='div29a'>
                {post.complet}
            </p>
            </div>
            </div>
            <div className='div28'>
                <img src={post.icona} alt='iphone' width={30} height={30} />
            <div className='div27i'>
            <p>
                {post.name}
            </p>
            <p >
                {post.amount}
            </p>
            </div>
            <div className='div27i'>
            <p className='div29'>
                {post.date}
            </p>
            <p className='div29b'>
                {post.pend}
            </p>
            </div>
            </div>
            <div className='div28'>
                <img src={post.icona} alt='iphone' width={30} height={30} />
            <div className='div27i'>
            <p>
                {post.name}
            </p>
            <p >
                {post.amount}
            </p>
            </div>
            <div className='div27i'>
            <p className='div29'>
                {post.date}
            </p>
            <p className='div29b'>
                {post.pend}
            </p>
            </div>
            </div>
            <div className='div28'>
                <img src={post.icona} alt='iphone' width={30} height={30} />
            <div className='div27i'>
            <p>
                {post.name}
            </p>
            <p >
                {post.amount}
            </p>
            </div>
            <div className='div27i'>
            <p className='div29'>
                {post.date}
            </p>
            <p className='div29b'>
                {post.pend}
            </p>
            </div>
            </div>
            <div className='div28'>
                <img src={post.icons} alt='iphone' width={30} height={30} />
            <div className='div27i'>
            <p>
                {post.name}
            </p>
            <p >
                {post.amount}
            </p>
            </div>
            <div className='div27i'>
            <p className='div29'>
                {post.date}
            </p>
            <p className='div29a'>
                {post.complet}
            </p>
            </div>
            </div>
            
            <div className='div28'>
                <img src={post.icona} alt='iphone' width={30} height={30} />
            <div className='div27i'>
            <p>
                {post.name}
            </p>
            <p >
                {post.amount}
            </p>
            </div>
            <div className='div27i'>
            <p className='div29'>
                {post.date}
            </p>
            <p className='div29b'>
                {post.pend}
            </p>
            </div>
            </div>
        </div>
    )
}
export default OrderList