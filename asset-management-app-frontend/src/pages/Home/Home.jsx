import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

function Home() {
  
  return (
    <div>
      <HeaderComponent />
      <div className="page-background">
        <h1>Financial Tracker Dashboard</h1>
      </div>
      <FooterComponent isLoggedIn={true}/>
    </div>
  );
}

export default Home;
