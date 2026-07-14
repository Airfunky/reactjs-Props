import Header from "./Header";
import Hero from "./Hero";
import ProductList from "./ProductList";
import Footer from "./Footer";

function App() {
  
  return (
    <div>
      <Header title="SigmaShop" a1="Home" a2="Products" a3="About" a4="Contact"/>

      <Hero search="Search Product..."  submit="Search" button1="Laptop" button2="Mobile" button3="Accessories" button4="Gaming"/>

      <ProductList/>

      <Footer text="&copy; SigmaShop | All rights reserved"/>
    </div>
  )
}

export default App;