import React from "react";
import './Order.css';
import moment from "moment-js";
import CheckoutProduct from "./CheckoutProduct";

function Order({order}){
    return(
        <div className="order">
           <h2>Order</h2>

           <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

           <p className="order_id">
               <small>{order.id}</small>
           </p>
           {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}

            <h3 className="order_total">Order Total :{order.data.amount}</h3>

        </div>
    );
}

export default Order;