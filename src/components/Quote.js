import React, { useState } from 'react';
import quotes from '../quotes.json'

const Quote = () => {
    
    const [ random, setRandom ] = useState(quotes[getRandom()]);
     
    const colors = ["#2C73D2", "#0081CF", "#0089BA", "#008E9B", "#008F7A"]

    const color = colors[Math.floor(Math.random()*6)];
    const changeQuote = () =>{
    setRandom(quotes[getRandom()])
  }

  document.body.style = `background: ${color}`

    
    return (
        <div>

            <div className="quote" style={{color:color}}>
                <span className='icon'><i class="fa-solid fa-quote-left"></i></span>
                <div className="textquote">
                    {random.quote}
                </div>
                
                <h3>{random.author}</h3>
                <button onClick={changeQuote} style={{color:color}}><i class="fa-solid fa-right"></i></button>
            </div>
        </div>
    );
};

const getRandom = () => Math.floor(Math.random()*quotes.length);

export default Quote;