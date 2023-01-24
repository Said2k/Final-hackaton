import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./Context/authContext";
import BusketContextProvider from "./Context/busket";
import CommContextProvider from "./Context/commContext";
import DellContextProvider from "./Context/deliveryContext";
import FavoritesContextProvider from "./Context/favorite";
import OrgaContextProvider from "./Context/organContext";
import ProductContextProvider from "./Context/productContext";
import RecommendContextProvider from "./Context/recommendation";

import Routing from "./routes/Routing";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <OrgaContextProvider>
          <DellContextProvider>
            <CommContextProvider>
              <FavoritesContextProvider>
                <BusketContextProvider>
                  <RecommendContextProvider>
                    <Navbar />
                    <Routing />
                  </RecommendContextProvider>
                </BusketContextProvider>
              </FavoritesContextProvider>
            </CommContextProvider>
          </DellContextProvider>
        </OrgaContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default App;
