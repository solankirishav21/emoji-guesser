import React, { useState } from "react";
import "./styles.css";
var dictionary = {
  "ð": "Grinning Face",
  "ð": "Grinning Face with Big Eyes",
  "ð": "Grinning Face with Smiling Eyes",
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Squinting Face",
  "ð": "Grinning Face with Sweat",
  "ðĪĢ": "Rolling on the Floor Laughing",
  "ð": "Face with Tears of Joy",
  "ð": "Slightly Smiling Face",
  "ð": "Upside-Down Face",
  "ð": "Winking Face",
  "ð": "Smiling Face with Smiling Eyes",
  "ð": "Smiling Face with Halo",
  "ðĨ°": "Smiling Face with Hearts",
  "ð": "Smiling Face with Heart-Eyes",
  "ðĪĐ": "Star-Struck",
  "ð": "Face Blowing a Kiss",
  "ð": "Kissing Face",
  "ð": "Kissing Face with Closed Eyes",
  "ð": "Kissing Face with Smiling Eyes",
  "ðĨē": "Smiling Face with Tear"
  // ð Face Savoring Food
  // ð Face with Tongue
  // ð Winking Face with Tongue
  // ðĪŠ Zany Face
  // ð Squinting Face with Tongue
  // ðĪ Money-Mouth Face
  // ðĪ Hugging Face
  // ðĪ­ Face with Hand Over Mouth
  // ðĪŦ Shushing Face
  // ðĪ Thinking Face
  // ðĪ Zipper-Mouth Face
};
var emojisWeKnow = Object.keys(dictionary);

export default function App() {
  var [emoji, setEmoji] = useState(" ");

  function emojiGuesser(event) {
    var input = event.target.value;
    // console.log(event.target.value)
    var emoji = dictionary[input];
    // console.log(emoji);
    if (emoji === undefined) {
      emoji = "We dont have this in our database . We will update it soon";
    }
    setEmoji(emoji);
  }
  function emojiClick(emoji) {
    var meaning = dictionary[emoji];
    setEmoji(meaning);
  }

  return (
    <div className="App">
      <h1>Lets Find a Suitable Word For your Emoji!</h1>
      <input onChange={emojiGuesser}></input>
      <div className="output"> {emoji} </div>
      <h4> Emoji we know</h4>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
      <h4>
        {" "}
        This is a Simple Web App which helps you find the meaning of emoji.{" "}
      </h4>
    </div>
  );
}
