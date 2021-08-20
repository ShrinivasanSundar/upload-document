import React from 'react';
import LandingPage from '../pages/landingPage/LandingPage'; 
import styles from './App.module.css'
const App:React.FC=()=> {
  return (
    <div className={styles.app}>
      <LandingPage/>
    </div>
  );
}

export default App;
