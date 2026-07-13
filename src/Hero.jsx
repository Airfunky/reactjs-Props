function Hero() {
  return (
    <section
      style={{
        background: "#f4f4f4",
        padding: "40px",
        textAlign: "center",
        color: "black"
      }}
    >
      <input style={{ height: "20px"}}type="text" placeholder="Search Product"></input>
      <button>Search</button>
      <p>Find the best products at the best prices.</p>
      <button>Shop Now</button>
    </section>
  );
}

export default Hero;