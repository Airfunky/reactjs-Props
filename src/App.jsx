import { useState } from "react";

function App() {
 
const isLogin = true;

if (isLogin){
  return <h1>Welcome Back!</h1>;
}

  return <h1>Please Login</h1>;
   
}

export default App;