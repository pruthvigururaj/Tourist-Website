import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Mysore from "./Components/Mysore";
import Places from "./Components/Places";
import Reach from "./Components/Reach";
import Footer from "./Components/Footer";
import PlaceDetails from "./Components/PlaceDetails";
import Nav from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Mysore />
              <Places />
              <Reach />
            </>
          }
        />

        {/* Place Details Page */}
        <Route path="/places/:slug" element={<PlaceDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
