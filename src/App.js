import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./Context/authContext";
import CommContextProvider from "./Context/commContext";
import DellContextProvider from "./Context/deliveryContext";
import FavoritesContextProvider from "./Context/favorite";
import OrgaContextProvider from "./Context/organContext";
import ProductContextProvider from "./Context/productContext";

import Routing from "./routes/Routing";

const App = () => {
  return (
    <AuthContextProvider>
      <DellContextProvider>
        <ProductContextProvider>
          <OrgaContextProvider>
            <CommContextProvider>
              <FavoritesContextProvider>
                <Navbar />
                <Routing />
              </FavoritesContextProvider>
            </CommContextProvider>
          </OrgaContextProvider>
        </ProductContextProvider>
      </DellContextProvider>
    </AuthContextProvider>
  );
};

export default App;
