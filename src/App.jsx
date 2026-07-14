import { useState } from "react";

function App() {
 
const isAdmin = true;

return(
  <div>
    {isAdmin && <h2>Admin Panel</h2>}
  </div>
);
   
}

export default App;