import React, { useState } from "react";
import "../App.css";
const Quote = ({ quote, getQuote,setQuote, prev, setPrev}) => {

  const [isClicked, setIsClicked] = useState(false)

  const getPrevQuote = () => {
    setIsClicked(true);
    setQuote(prev)    
  }
  const getRandomQuote = () => {
    setPrev(quote)
    getQuote();
    setIsClicked(false);
  }
  return (
    isClicked ? (  
      <>
      <div className="quote">
        <p>{prev.quote ? prev.quote : ''}</p>
        <p className="author">{prev.author ? prev.author : ""}</p>
        <div className="btnContainer">
          <button onClick={getRandomQuote} className="btn">
            Get Quote
          </button>  
        </div>
      </div>
    </>

    ) : (
      <>
      <div className="quote">
        <p>{quote && quote.quote}</p>
        <p className="author">{`${quote.author ?
         quote.author : ""}`}</p>
        <div className="btnContainer">
          <button onClick={getRandomQuote} className="btn">
            Get Quote
          </button>
          {prev && <button onClick={getPrevQuote} className="btn">
            Prev Quote
          </button>}
        </div>
      </div>
    </>
    )
  )

  
};

export default Quote;
