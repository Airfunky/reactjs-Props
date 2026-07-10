import Header from "./Header";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function App(){
  return(
    <>
    <div>
      <Header
      title="Lorenzo's Portfolio"
      nav1="Home"
      nav2="About me"
      nav3="Studies"
      nav4="Contact"
      />

      <Hero
        headline="About me"
        description="Hi im Lorenzo, im deeply interested in programming"
      />

      <Sidebar
      title="Contact"
      phone="607922395"
      email="lorenzo8banachewicz@gmail.com"
      />

      <Footer
      text="@ 2026 Lorenzo"
      />
      
      

    </div>
    </>
  );
}

export default App;


