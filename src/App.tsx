import React from 'react';
import Header from './components/header/header';
import MainRouter from './routers/main.router';

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainRouter />
    </div>
  );
}

export default App;
