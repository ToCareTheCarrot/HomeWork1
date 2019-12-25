import React from 'react';
import './App.css';
import SocialButton from './SocialButton.jsx';
import IconBar from './IconBar.jsx';

function App(){
  return (
    <div>
      <SocialButton type="facebook">
        FacebookButton
      </SocialButton>
      <SocialButton type="twitter">
        TwitterButton
      </SocialButton>
      <IconBar orientation="horizontal"/> 
      <IconBar orientation="vertical"/> 
      <IconBar/> 
    </div>
  );
}

export default App;
