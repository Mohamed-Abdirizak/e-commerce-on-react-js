import Recommended from "./Recommended/Recommended";
import Category from "./Sidebar/Category/Category";
import Colors from "./Sidebar/Colors/Colors";
import Price from "./Sidebar/Price/Price";
import Navigation from "./navigations/Nav";
import Products from "./products/Products";


function App() {
  return (
    <>
       <Navigation />
       <Products/>
       <Recommended/>
      

    </>

  );
}

export default App;
