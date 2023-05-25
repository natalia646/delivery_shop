import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Shop/Products/Cart";
import Shops from "./components/Shop/Shops";

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Shops />
        <Cart />
      </div>
    </div>
  );
}

export default App;
