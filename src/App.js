import { useState } from 'react';
import quote from './quotes.json';


function App() {
  const [val,setVal] = useState(Math.floor(Math.random() * 1642))
  console.log(quote.length)
  const randomNumber = ()=>{
    setVal(Math.floor(Math.random() * 1642)) 
    return val
  }
  const quotes = quote[val].text;
  const author = quote[val].author;
  return (
    <div id='container'>
      <div id = 'quote-box'>
        <div id='text'>
          <p>{quotes}</p>
        </div>
        <div id='author'>
          <p>-{author}</p>
        </div>
        <div id='new-quote'>
          <button onClick={randomNumber} >New Quote</button>
          
        </div>
        <div id='tweet-quote-button' >
        <a href={"https://twitter.com/intent/tweet?text="+quotes+"  -"+author} id='tweet-quote'> <i className="fa-brands fa-2x fa-twitter-square" ></i> </a>
        </div>
      </div>
    </div>
  );
}

export default App;
