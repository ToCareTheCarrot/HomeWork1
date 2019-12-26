import React from 'react';
import './App.css';
import SocialButton from './SocialButton.jsx';
import IconBar from './IconBar.jsx';
import TwitterButton from './TwitterButton.jsx';
import FacebookButton from './FacebookButton.jsx';

function App(){
  return (
    <div>
      <SocialButton type="facebook"/>
      <SocialButton type="twitter"/>
      <FacebookButton/>
      <TwitterButton/>
      <IconBar orientation="horizontal"/> 
      <IconBar orientation="vertical"/> 
      <IconBar/> 

  
    </div>
  );
}

export default App;
