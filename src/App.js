import React from "react";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./Context/authContext";
import FavoritesContextProvider from "./Context/favorite";
import OrgaContextProvider from "./Context/organContext";
import ProductContextProvider from "./Context/productContext";
import Routing from "./routes/Routing";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <OrgaContextProvider>
          <FavoritesContextProvider>
      <Navbar />
      <Routing />
      </FavoritesContextProvider>
      </OrgaContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default App;
