import Order from "./Order"
import ListOrder from "./order/component/ListOrder"
const OrderElement = ({orders, setOrders}) =>{

    return (
        <div className="columnorders">
            <div>
            <Order orders={orders} setOrders={setOrders}/>
            <ListOrder />
            </div>
            <div>
            
            </div>
        </div>
    )
}
export default OrderElement