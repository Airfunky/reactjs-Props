import { useState } from "react";

function App() {
 
 function handleSubmit(event) {
  event.preventDefault();
  alert("Form Submitted!");
 }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;