import React, { useState } from "react";
import Recommended from "./Recommended/Recommended";
import Category from "./Sidebar/Category/Category";
import Colors from "./Sidebar/Colors/Colors";
import Price from "./Sidebar/Price/Price";
import Sidebar from "./Sidebar/Sidebar";
import Navigation from "./navigations/Nav";
import Products from "./products/Products";
import products from "./db/data";
import Card from "./compnonents/Card";

function App() {
  const [selectedCategory, seSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // .............................input filter........................................

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );
  // .............................radio filter........................................
  const handleChange = (event) => {
    seSelectedCategory(event.target.value);
  };

  // .............................buttons filter........................................

  const handleClick = (event) => {
    seSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filTeredProducts = products;

    // filtering input items
    if (query) {
      filTeredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filTeredProducts = filTeredProducts.filter(
        ({category, color, company, newPrice, title}) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }



  
    return filTeredProducts.map(({img,title,star,reviews,newPrice,prevPrice} )=>(
      <Card  
      key={Math.random()}
      img = {img}
      title={title}
      star = {star}
      reviews = {reviews}
      newPrice ={newPrice}
      prevPrice ={prevPrice}

      
      
      />

    ))



  }
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar  handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick}/> 
      <Products result={result} />
    </>
  );
}

export default App;
