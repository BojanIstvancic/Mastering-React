import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  // Functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    // Spread operator -> save old value, add new value
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <br />
      <Button primary>Submit</Button>
    </form>
  );
};

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "tomato" : "green")};
  color: white;
`;

export default CreateTweet;
