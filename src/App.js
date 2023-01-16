import React from 'react';
import Navbar from './components/navbar/Navbar';
import AuthContextProvider from './Context/authContext';
import Routing from './routes/Routing';

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar/>
      <Routing/>
      </AuthContextProvider>
  );
};

export default App;