import Heading from './Component/Heading'
import Content from './Component/Content'
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const App = () => {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);

  const searchWord = async () => {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    const data = await response.json();

    if (data && data.length > 0) {
      setResults(data[0]);
      setError(false); // Reset error state
    } else {
      setResults(null);
      setError(true); // Set error state
    }
  };

  const heading = () => {
    const audio = results?.phonetics.find(phone => phone.audio !== "").audio;
    return {
      audioUrl: audio,
      word: results?.word,
      phonetic: results?.phonetic,
    };
  };

  return (
    <div className="container mx-auto px-10">
      <nav className="my-4 h14 flex flex-row items-center">
        <h3 className="text-indigo-600 font-bold text-2xl">WordFinder</h3>
      </nav>
      <div className="flex">
        <input
          type="text"
          value={word}
          onChange={e => setWord(e.target.value)}
          className={`w-full bg-gray-100 border ${
            error ? "border-red-500" : "border-none"
          } outline-none rounded-lg px-3 py-4 shadow`}
        />
        <button
          className="-mx-12 px-2 py-4 rounded-lg"
          onClick={searchWord}
        >
          <FaSearch size={18} />
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">Word not found</p>}
      {results?.meanings?.length > 0 && (
        <>
          <Heading {...heading()} />
          {results.meanings.map((content, index) => {
            return <Content {...content} key={index} />;
          })}
        </>
      )}
    </div>
  );
};

export default App;
