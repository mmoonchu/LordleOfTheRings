import { Route, Routes, } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Play from "./pages/Play/Play";
import './style.css';

function App() {
  const createLordleKey = function() {

  }

  const apiKey = process.env.REACT_APP_KEY;
  // const moviesUrl = `https://the-one-api.dev/v2/movie`;
  const movie1Url = `https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote`;
  const movie2Url = `https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5b/quote?limit=1100`;
  const movie3Url = `https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5d/quote`;

  let speakingCharacters = [];
  const convertJSONToArray = function(JSONData) {
    speakingCharacters.push(...new Set(JSONData.docs.map(quote => quote.character)));
  }
  const collectSpeakingCharacters = async(url) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      }
    });
    const data = await response.json();
    convertJSONToArray(data);
    speakingCharacters = [...new Set(speakingCharacters)];
    return speakingCharacters
  }
  // collectSpeakingCharacters(movie1Url);
  // collectSpeakingCharacters(movie2Url);
  // collectSpeakingCharacters(movie3Url);
  // console.log(speakingCharacters)
  const yeah = async() => {
    const testresult = await collectSpeakingCharacters(movie1Url);
    const response = await fetch(`https://the-one-api.dev/v2/character/${testresult[12]}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      }
    });
    const data = await response.json();
    console.log(data.docs[0].name)
  }
  yeah();

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
