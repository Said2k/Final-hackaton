import React from "react";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./Context/authContext";
import CommContextProvider from "./Context/commContext";
import OrgaContextProvider from "./Context/organContext";
import ProductContextProvider from "./Context/productContext";
import Routing from "./routes/Routing";

const App = () => {
  return (
    <CommContextProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <OrgaContextProvider>
            <Navbar />
            <Routing />
          </OrgaContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </CommContextProvider>
  );
};

export default App;
