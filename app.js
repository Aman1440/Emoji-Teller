import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😂": "laughing",
  "😊": "smiling",
  "😎": "U r Stud",
  "❤": "Love"
};



export default function App() {
  const [meaning, setMeaning] = useState("");
  var emojiWeKnow = Object.keys(emojiDictionary);
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "UMM emoji not found";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emo-ji </h1>
      <input onChange={emojiInputHandler} />

      <div>{meaning}</div>
      <div>
        <h4>Emoji we Detect!!</h4>
        <br></br>
        {/* another way of doing! */}
        {/* <span> {emojiWeKnow} </span>  */}
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ cursor: "pointer", padding: "1rem" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
