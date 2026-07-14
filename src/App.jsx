import { useState } from "react";

function App() {
  function handleclick(){
    alert("Hello!");
  }

  const [text, setText] = useState("siema");

  const [liked, setLiked] = useState(false);

  return (
    <div>
      <button onClick={handleclick}>Touch me</button>

     <br></br>

      <h2>{text}</h2>
      <button onClick={() => setText("Welcome to react")}>Change Text</button>

      <br></br>
    
    <button onClick={() => setLiked(!liked)}>
      {liked ? "Liked": "Like"}
    </button>
      
    </div>
  );
}

export default App;