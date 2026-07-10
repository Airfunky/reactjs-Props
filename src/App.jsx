import Layout from "./layout";

function App(){
  return(
    <>
      <div>
        <Layout
        title="first title"
        description="first Description"
        />
      
          <Layout
        title="second title"
        description="second Description"
        />
      
       <Layout
        title="third title"
        description="third Description"
        />

      </div>
    </>
  );
}

export default App;
