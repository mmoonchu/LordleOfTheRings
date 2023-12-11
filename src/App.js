import { Route, Routes, } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Play from "./pages/Play/Play";
import './style.css';

export const characterNameListContext = React.createContext();
export const lordleKeyContext = React.createContext();
 
function App() {
  const [speakingCharactersCodes, setSpeakingCharactersCodes] = useState([]);
  const [speakingCharactersIDs, setSpeakingCharactersIDs] = useState([]);
  const [speakingCharacters, setSpeakingCharacters] = useState([]);
  const apiKey = process.env.REACT_APP_KEY;
  const [lordleKey, setLordleKey] = useState(null);
  // const moviesUrl = `https://the-one-api.dev/v2/movie`;
  const movie1Url = `https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote`;
  const movie2Url = `https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5b/quote?limit=1100`;
  const movie3Url = `https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5d/quote`;

  let movieData;
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
  const collectSpeakingCharactersCodes = async(movieQuotesUrl) => {
    function convertJSONToArray(JSONData) {
      speakingCharactersCodes.push(...new Set(JSONData.docs.map(quote => quote.character)));
      speakingCharactersIDs.push(...new Set(JSONData.docs.map(quote => quote.id)));
    }

    movieData = await fetchData(movieQuotesUrl);
    convertJSONToArray(movieData);
    setSpeakingCharactersCodes([...new Set(speakingCharactersCodes)]);
    return speakingCharactersCodes;
  }  
  const createCharacterList = async () => {
    const characterData = await fetchData(`https://the-one-api.dev/v2/character`);
    const arrayOfNames = speakingCharactersCodes.map((characterID) => {
      const character = characterData.docs.find((element) => element._id == characterID);
      return character.name;
    });
    setSpeakingCharacters([...new Set(arrayOfNames)]);
    return speakingCharacters;
  }
  const createLordleKey = async() => {
    function generateRandomInt(max) {
      return Math.floor(Math.random() * max)
    }

    const keyCharacterID = speakingCharactersCodes[generateRandomInt(speakingCharactersCodes.length)];
    const keyCharacterData = (await fetchData(`https://the-one-api.dev/v2/character/${keyCharacterID}`)).docs[0];
    const keyCharacterQuoteList = (await fetchData(`https://the-one-api.dev/v2/character/${keyCharacterID}/quote`)).docs;
    const keyQuote = keyCharacterQuoteList[generateRandomInt(keyCharacterQuoteList.length)].dialog;
    const keyCharacter = {
      name: keyCharacterData.name,
      race: keyCharacterData.race,
      realm: keyCharacterData.realm !== '' ? keyCharacterData.realm : 'N/A',
      gender: keyCharacterData.gender,
      height: keyCharacterData.height !== '' ? keyCharacterData.height : 'N/A',
      quote: keyQuote
      // death: keyCharacterData.death,
    }
    setLordleKey(keyCharacter);
    console.log(keyCharacter)
    console.log(keyQuote)
  }


  useEffect(() => {
    (async function() {
      await collectSpeakingCharactersCodes(movie1Url);
      createCharacterList();
      createLordleKey();
    })()
  }, []);

  return (
    <div className="App">
      <lordleKeyContext.Provider value={lordleKey}>
      <characterNameListContext.Provider value={speakingCharacters}>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Play' element={<Play/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </characterNameListContext.Provider>
      </lordleKeyContext.Provider>
    </div>
  );
}

export default App;
