
import React from "react";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AuthContextProvider from "./Context/authContext";
import CommContextProvider from "./Context/commContext";
import FavoritesContextProvider from "./Context/favorite";
import OrgaContextProvider from "./Context/organContext";
import ProductContextProvider from "./Context/productContext";
import Routing from "./routes/Routing";

const App = () => {
  return (

    <AuthContextProvider>
      <ProductContextProvider>
        <OrgaContextProvider>
         <CommContextProvider>
          <FavoritesContextProvider>
      <Navbar/>
      <Routing />
      <Footer/>
      </FavoritesContextProvider>
      </CommContextProvider>
      </OrgaContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default App;
