import { Route, Routes, } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Play from "./pages/Play/Play";
import './style.css';

function App() {
  let speakingCharacters = [];
  const apiKey = process.env.REACT_APP_KEY;

  const createLordleKey = function() {

  }

  // const moviesUrl = `https://the-one-api.dev/v2/movie`;
  const movie1Url = `https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote`;
  const movie2Url = `https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5b/quote?limit=1100`;
  const movie3Url = `https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5d/quote`;

  const fetchData = async(url) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      }
    });
    const data = await response.json();
    return data;
  }
  const collectSpeakingCharacters = async(movieQuotesUrl) => {
    function convertJSONToArray(JSONData) {
      speakingCharacters.push(...new Set(JSONData.docs.map(quote => quote.character)));
    }
    const data = await fetchData(movieQuotesUrl);
    convertJSONToArray(data);
    speakingCharacters = [...new Set(speakingCharacters)];
    return speakingCharacters;
  }  
  useEffect(() => {
     collectSpeakingCharacters(movie1Url);
  }, []);

  const [lordleKey, setLordleKey] = useState(null);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Play' element={<Play/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
