import React, { useState } from "react";
/* useState - is the function for setting the state */
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const name = "Bokisa";

  // State
  const [devName, setDevName] = useState("HTML CSS Boxton");
  // [ variableName, variableSetter] = useState('Default Value)
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  const sayHelloHandler = () => {
    setDevName("Boxton React Boxton");
  };

  return (
    <div>
      <h1>App Component</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
      {/* Component propName={propValue} 
        - we can pass variableSetter and functions as a props too  */}
      <h1>Hello {devName}</h1>
      <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
}

export default App;
