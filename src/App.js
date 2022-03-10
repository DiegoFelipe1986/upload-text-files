import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './App.css';

function App() {

  /*
  * Stating initial values of states as empty strings
  */
  const [myValue, setMyValue] = useState('');
  const [counting, setCounting] = useState('');

  /*
  * Create a new .txt file
  */
  const createFile = () => {
    const blob = new Blob([myValue], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'new-text-file.txt')
  }

  /*
  * To proccess the file, the function reads event from the input onChage
  */
  const readFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    /*
     * File reader is the native tool for JS to read documents from input
     */
    const fileReader = new FileReader();

    fileReader.readAsText(file);
    /*
     * File reader has function to resolve on load event
     */
    fileReader.onload = () => {
      const counting = fileReader.result.replace(/\r?\n|\r/g, '').split(' ').length;
      setMyValue(`this is your text: ${fileReader.result}`);
      setCounting(`Your document has ${counting} words`);
    }
    /*
     * File reader has function to response on error event
     */
    fileReader.onerror = () => {
      setMyValue(fileReader.error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Read and write .txt files</h1>
        <textarea
          cols="30"
          rows="10"
          placeholder="Type something..."
          value={myValue}
          onChange={e => setMyValue(e.target.value)}
        >
        </textarea>
        <br />
        <button
          onClick={createFile}
        >
          Create file
        </button>
        <br />
        <p>Or, if you preffer proccess a ".txt file:"</p>
        <input
          type="file"
          multiple={false}
          onChange={readFile}
          accept=".txt"
        />
        <br />
        {counting}
      </header>
    </div>
  );
}

export default App;
