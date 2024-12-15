import "../App.css";

const ProductList = ({ Product, addToCart }) => {
    return (
        <div className="flex container">
            {
                Product.map((ProductValue, ProductIndex) => {
                    return (
                        <div className="cart">
                            <img src={ProductValue.img} className="setimg" />
                            <p>{ProductValue.Name} | {ProductValue.Material}</p>
                            <p>{ProductValue.title}</p>
                            <p><b> Rs. {ProductValue.price}/-</b></p>
                            <button className="Addtocart" onClick={() => addToCart(ProductValue)}>Add To Cart</button>
                        </div>
                    )
                })
            }
        </div>
    );
} 

export default ProductList;

