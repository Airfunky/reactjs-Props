function Sidebar() {
  return (
    <aside
      style={{
        width: "200px",
        background: "#ddd",
        padding: "20px",
        float: "left",
        minHeight: "300px", 
      }}
    >
      <h3>Categories</h3>
      <ul>
        <li>Laptops</li>
        <li>Phones</li>
        <li>Headphones</li>
      </ul>
    </aside>
  );
}

export default Sidebar;