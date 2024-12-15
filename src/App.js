import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {
  
  const [Product, setProduct] = useState([
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aHirwJKn0YA4FdETNFmGl7ngDBwdrgbEaw&s",
      title: "Man Shirt",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "499",
      Name: "Silver shirt",
      Material: "Cotton"
    },
    {
      id: 2,
      img: "https://images.mehar.com/product_thumbnail1/1695474166-1.jpg",
      title: "Man Shirt",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "599",
      Name: "Darki shirt",
      Material: "Policotton"
    },
    {
      id: 3,
      img: "https://sslimages.shoppersstop.com/sys-master/images/h8d/ha1/32929581695006/S24LCDCSH160BE_BEIGE.jpg_2000Wx3000H",
      title: "Man Shirt",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "559",
      Name: "Pink shirt",
      Material: "cotton"
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/71lbQYx4lzL._AC_UY1100_.jpg",
      title: "Man Shirt",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "650",
      Name: "simben shirt",
      Material: "Purecotton"
    },
    {
      id: 5,
      img: "https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg",
      title: "Man Shirt",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "540",
      Name: "Rytoon shirt",
      Material: "cotton"
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVBukCj6kJthWl2dLvASXMQ2DJiL_GBdwMA&s",
      title: "Man Pents",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "499",
      Name: "Black Pent",
      Material: "Cotton"
    },
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79YASixy45XUFLtJ6r3gzBBwWbZJtZAvfhDxW1WKlWrG3Q3cQP4WX_QNWHGgtlDZIigs&usqp=CAU",
      title: "Man Pents",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "599",
      Name: "Dark Pent",
      Material: "Policotton"
    },
    {
      id: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_shgsaHMk-Uwz3cd7DrV9qDJOIlKSfkKabK4kS6HUG2dJbIedcM61vnPBRJKaQCHkcFc&usqp=CAU",
      title: "Man Pents",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "559",
      Name: "UsPolo Pent",
      Material: "cotton"
    },
    {
      id: 9,
      img: "https://i.etsystatic.com/39609446/r/il/977619/4689165234/il_570xN.4689165234_7o44.jpg",
      title: "Man Pents",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "650",
      Name: "simben Pent",
      Material: "Purecotton"
    },
    {
      id: 10,
      img: "https://i.pinimg.com/564x/8f/dc/ea/8fdcea39797235b1d7e551ed26794f5a.jpg",
      title: "Man Pents",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "540",
      Name: "Rytoon Pent",
      Material: "cotton"
    }
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  console.log(cart);
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
    console.log(data)
  }
  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow} ></Header>
      {
        showCart ?
          <CartList cart={cart}></CartList> :
          <ProductList Product={Product} addToCart={addToCart}></ProductList>
      }

    </div>
  );
}

export default App;
