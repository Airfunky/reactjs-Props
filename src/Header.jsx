function Header() {
  return (
    <header
      style={{
        background: "SaddleBrown",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Product List</h1>
      <nav>
        <clickable>
            <h3><a href="#">Home</a></h3>
            <h3><a href="#">About us</a></h3>
            <h3><a href="#">Contact</a></h3>
        </clickable>
      </nav>
    </header>
  );
}

export default Header;