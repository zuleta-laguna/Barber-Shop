import Main from "./components/Main";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contentbarber from "./components/Contentbarber";
import ContentOurBarbers from "./components/ContentOurBarbers";
import "./index.css";
import PriceTable from "./components/PriceTable";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/products";

function App() {
  return (
    <div className="Container">
      
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <>
             <Header />
              <section className="ContentMain-Flex">
                <Sidebar />
                <Main />
              </section>
              <Contentbarber />
              <ContentOurBarbers />
              <PriceTable />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
