

function App() {
 
const stock = 5;

return(
  <div>
  {stock > 0
    ? <h2>✅ In stock</h2>
    : <h2>❌ Out of Stock</h2>
  }
  </div>
); 
}

export default App;