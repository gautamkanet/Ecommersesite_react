import { useEffect, useState, useTransition } from 'react';
import '../App.css';
 
const CartList = ({ cart }) => {

    const [CART, setCart] = useState([])
    
    useEffect(() => {
        setCart(cart)
    }, [cart])

    return (
        <div>
            {
                CART?.map((cartItem, cartIndex) => {
                    return (
                        <div>
                            <img src={cartItem.img} width={40} />
                            <span>{cartItem.Name}</span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCart(_CART)
                                }}
                            ><pre>  -  </pre></button>
                            <span>{cartItem.quantity}</span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCart(_CART)
                                }}
                            ><pre>  +  </pre></button>
                            <span>Rs. {cartItem.price * cartItem.quantity}</span>
                        </div>
                    )
                })
            }

            <p> Total: <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
        </div>
    )
}

export default CartList