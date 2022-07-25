import { useState } from 'react';
import quote from './quotes.json';


function App() {
  const [val,setVal] = useState(Math.floor(Math.random() * 1642))
  console.log(quote.length)
  const randomNumber = ()=>{
    setVal(Math.floor(Math.random() * 1642)) 
    return val
  }
  return (
    <div id='container'>
      <div id = 'quote-box'>
        <div id='text'>
          <p>{quote[val].text}</p>
          <p>{val}</p>
        </div>
        <div id='author'>
          <p>-{quote[val].author}</p>
        </div>
        <div id='new-quote'>
          <button onClick={randomNumber} >New Quote</button>
          
        </div>
        <div id='tweet-quote'>
        <a href='https://twitter.com/intent/tweet' ><i class="fa-brands fa-twitter-square"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
