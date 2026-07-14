

function ProductList(){
  const products = [
    {
      name: "Laptop",
      price: "$800",
      img: "laptop.jpg",
    },
    {
      name: "Phone",
      price: "$500",
      img: "phone.jpg",
    },
    {
      name: "Headphones",
      price: "$100",
      img: "headphone.jpg",
    },
  ];

    return(
    <div
     style={{
        display: "flex",
        gap: "20px",
        flex: 1,
        padding: "20px",
        justifyContent: "space-evenly",
      }}
      >

        {products.map((product, index) => 
        <h2 key={index}>
            {product.name}
              <br/>
            {product.price} <br/>
            <img src={product.img} alt={product.name} style={{ width: "150px", height: "300px"}}/>
             <br/><br/>
        </h2>)
        }

    </div>
    );
}

export default ProductList;