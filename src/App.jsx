import { useState } from "react";

function App() {
 
 const [text, setText] = useState("");

  return (
    <div>
      <h1>Character Counter</h1>
      <input type="text"
      placeholder="Enter Your text"
      onChange={(e) => setText(e.target.value)} />
      <h2> {text}</h2>
      <p>Characters: {text.length}</p>
    </div>
 
  );
}

export default App;