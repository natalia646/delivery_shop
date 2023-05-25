import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Carts from "./components/Shop/Products/Carts";
import Shops from "./components/Shop/Shops/Shops";

function App() {
  return (
    <div>
      <Navigation />
      <div className="padeShop" >
        <Shops />
        <Carts />
      </div>
    </div>
  );
}

export default App;
