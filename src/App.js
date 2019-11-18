import React from 'react';
import './App.css';

let url = "https://pro-api.coinmarket.com/v1/cryptocurrency/quotes/latest",
qString = "?CMC_PRO_API_KEY=" + "5370a625-752d-4be8-98be-187aa5d6c4a4" + "&start=1&limit=5&convert=USD";

fetch(url + qString)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
    })

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>
          Welcome to Crypto Currency Dashboard
        </h1>
      </header>
    </div>
  );
}

export default App;
