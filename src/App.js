import React, { useState } from "react";
import "./styles.css";
var dictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "🥲": "Smiling Face with Tear"
  // 😋 Face Savoring Food
  // 😛 Face with Tongue
  // 😜 Winking Face with Tongue
  // 🤪 Zany Face
  // 😝 Squinting Face with Tongue
  // 🤑 Money-Mouth Face
  // 🤗 Hugging Face
  // 🤭 Face with Hand Over Mouth
  // 🤫 Shushing Face
  // 🤔 Thinking Face
  // 🤐 Zipper-Mouth Face
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
