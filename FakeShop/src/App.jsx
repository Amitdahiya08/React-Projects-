import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>  
          <Route path="/" element={<ProductListing />} />  
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<h2>404 Not Found!</h2>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
