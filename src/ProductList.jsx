import Product from "./Product";

function ProductList({products}){
    return(
    <div
     style={{
        display: "flex",
        
        gap: "20px",
        flex: 1,
        padding: "20px",
      }}
      >

        {products.map((product, index) => 
        <h2 key={index}>
            {product.name}
              <br/>
            {product.price} <br/>
            <img src={product.img} alt={product.name} width="150"/>
             <br/><br/>
        </h2>)
        }

    </div>
    );
}

export default ProductList;