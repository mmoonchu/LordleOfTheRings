import { Route, Routes, } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Play from "./pages/Play/Play";
import './style.css';

function App() {
  let speakingCharacters = [];
  const apiKey = process.env.REACT_APP_KEY;
  const [lordleKey, setLordleKey] = useState(null);
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
  const createLordleKey = async() => {
    function generateRandomInt(max) {
      return Math.floor(Math.random() * max)
    }

    const keyCharacterID = speakingCharacters[generateRandomInt(speakingCharacters.length)];
    const keyCharacterData = (await fetchData(`https://the-one-api.dev/v2/character/${keyCharacterID}`)).docs[0];
    const keyCharacter = {
      name: keyCharacterData.name,
      race: keyCharacterData.race,
      realm: keyCharacterData.realm,
      gender: keyCharacterData.gender,
      height: keyCharacterData.height,
      // death: keyCharacterData.death,
    }
    setLordleKey(keyCharacter)
    console.log(keyCharacter)
  }


  useEffect(() => {
    (async function() {
      await collectSpeakingCharacters(movie1Url);
      createLordleKey();
    })()
  }, []);

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
