function Product({product}) {
  return (
    <div
      style={{
        width: "220px",
        background: "#fff",
        borderRadius: "8px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={product.img}
        alt={product.name}
        style={{
          width: "180px",
          height: "150px",
          objectFit: "cover",
        }}
      />

      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <button>Buy Now</button>
    </div>
  );
}

export default Product;