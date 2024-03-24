import { useContext, useState } from "react";
import PlayerContext from "../context/PlayerContext";
import { FaCirclePlus } from "react-icons/fa6";

function ShuffledList() {
  const { playerCount, playerNamesArr } = useContext(PlayerContext);

  const [playerList, setPlayerList] = useState([]);

  const handleShufflePlayer = () => {
    // Check if any input is empty
    if (playerNamesArr.some((name) => (name || "").trim() === "")) {
      alert("Please fill in all player names before shuffling.");
      return;
    }

    setPlayerList(playerNamesArr);

    console.log(playerList);
  };

  return (
    <div className="flex-1">
      <h2 className="text-center text-4xl font-black">Shuffle List</h2>

      <button className="btn btn-primary" onClick={handleShufflePlayer}>
        <FaCirclePlus size={20} />
        Shuffle Players
      </button>

      <ul className="py-5">
        {playerList.map((splayer) => (
          <li className="p-2 bg-orange-600 text-black my-4 text-xl font-bold uppercase rounded-md">
            {splayer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShuffledList;
