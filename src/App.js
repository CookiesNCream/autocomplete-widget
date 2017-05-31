/* By Linda Lim | Autocomplete Widget | BSD 3-Clause License | https://github.com/CookiesNCream/autocomplete-widget */
import React from 'react'; /* Imports the React component */
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
                    
          <h2>Autocomplete Widget using Draft.js</h2>
        
        </div>
        
        <p className="App-intro">
          
          I can help you type less. All you need to do is to type &#35;, &#64;, &#60; and select the rest from a list.

          Click <a href="">&#35;</a> for &#35; autocomplete, <a href="">&#64;</a> for &#64; autocomplete, <a href="">&#60;&#62;</a> for &#60;&#62; autocomplete, and <a href="">autocomplete mentions and pure &#35; </a> for the hybrid.     
        </p>
    
      </div>
    );
  }
}

export default App;