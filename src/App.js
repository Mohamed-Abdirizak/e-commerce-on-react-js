import Recommended from "./Recommended/Recommended";
import Category from "./Sidebar/Category/Category";
import Colors from "./Sidebar/Colors/Colors";
import Price from "./Sidebar/Price/Price";
import Sidebar from "./Sidebar/Sidebar";
import Navigation from "./navigations/Nav";
import Products from "./products/Products";


function App() {
  return (
    <>
    <Sidebar/>
       <Navigation />
       
       <Recommended/>
       <Products/>
       
      

    </>

  );
}

export default App;
