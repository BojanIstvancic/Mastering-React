import React, { useState, useEffect } from "react";
/* useState - is the function for setting the state */
/* useEffect - */
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const name = "Bokisa";
  // State
  const [devName, setDevName] = useState("HTML CSS Boxton");
  // [ variableName, variableSetter] = useState('Default Value)
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log("Tweets is changed");
  }, [tweets]);
  /* 
  this function starts runing everytime when the app is mounted (load/refresh - fetch data)
  1 - function
  2 - we can also define when the useEffect activates -> which state should change to change to activate useEffect
  we can use this also for suggestion list: as we are searching, we update the suggestion list data
  */

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
