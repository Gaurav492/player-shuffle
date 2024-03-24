import { useContext, useState } from "react";
import { FaShuffle } from "react-icons/fa6";
import { PlayerContext } from "../context/PlayerContext";

function Playerinput() {
  // const [playerCount, setPlayerCount] = useState(1);
  // const [playerNamesArr, setPlayerNamesArr] = useState(
  //   Array.from({ length: playerCount }, () => "")
  // );

  const { playerCount, setPlayerCount, playerNamesArr, setPlayerNamesArr } =
    useContext(PlayerContext);

  const handleAddPlayer = () => {
    setPlayerCount((prev) => prev + 1);
  };

  const handleInputChange = (index, value) => {
    setPlayerNamesArr((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = value;
      return newInputs;
    });
  };

  return (
    <>
      <div className="main_container flex items-center justify-center flex-col flex-1">
        <div className="btn_container pb-8">
          {/* ADD Player Button */}
          <button className="btn btn-primary mr-4" onClick={handleAddPlayer}>
            <FaShuffle size={20} />
            Add Player
          </button>
        </div>
        <div className="main_input_container flex flex-col gap-4">
          {[...Array(playerCount)].map((e, i) => {
            return (
              <input
                key={i}
                type="text"
                placeholder={`Player ${i + 1} Name Here`}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleInputChange(i, e.target.value)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Playerinput;
