import ProductList from "./ProductList";
import Header from "./Header";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
function App() {
  const products = [
  {
    name: "Laptop",
    price: 800,
    img: "laptop.jpg"
    
  },
  {
    name: "Phone",
    price: 500,
    img: "phone.jpg"
  },
  {
    name: "Headphone",
    price: 100,
    img: "headphone.jpg"
  }
];

  return (
    <div>

    <Header
    />

    <Hero

    />

     <div>
        <Sidebar />
        <ProductList  products={products} />
      </div>

    <Footer/>

    
    </div>
  );
}

export default App;