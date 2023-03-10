import "./App.css";
import Header from "./Components/Navbar/Navbar.js";
import Bodysection from "./Components/Bodysection/Bodysection.js";
import RescentList from "./Components/Tables/RescentTable";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Bodysection />
      <RescentList />
      <Footer />
    </div>
  );
}

export default App;
