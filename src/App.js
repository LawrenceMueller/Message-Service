import React from 'react';
import './App.css';
import Splash from './components/splash/splash';
import SignUp from './components/sign-up-section/sign-up-section';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Splash/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
