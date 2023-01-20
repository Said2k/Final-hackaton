import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Routing from './routes/Routing';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routing/>
      <Footer/>
    </div>
  );
};

export default App;