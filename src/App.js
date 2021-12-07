import { useState } from "react";
import "./App.css";
import axios from "axios";
import Quote from "./components/Quote";
const API =
  "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json?";

function App() {
  const [quote, setQuote] = useState({
    quote: '',
    author:''
  });
  const [prev, setPrev] = useState({});

  const getQuote = async() => {
    await axios.get(API).then((res) => {
      const data = res.data;
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote({
        quote: data[randomIndex].quote,
        author: data[randomIndex].author
      });
    });
  };

  return (
    <div className="App">
      <Quote prev={prev} setPrev={setPrev} setQuote={setQuote} quote={quote} getQuote={getQuote} />
    </div>
  );
}

export default App;
