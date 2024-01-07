import { useState } from "react";

export const SimpleButton: () => JSX.Element = () => {
  const [buttonState, changeOnOff] = useState(false);

  const handleClick = () => {
    changeOnOff((prevState) => !prevState);
  };

  return (
    <>
      <input placeholder="This is html"></input>
      <button onClick={handleClick}>
        {buttonState ? "ON" : "OFF"}
      </button>
    </>
  );
}
