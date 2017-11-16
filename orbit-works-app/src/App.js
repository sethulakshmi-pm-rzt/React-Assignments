import React from 'react';
import FullContent from './containers/fullContent/FullContent.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className = "app">
          <FullContent />
      </div>
    );
  }
}

export default App;
