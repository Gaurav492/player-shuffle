import { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playerCount, setPlayerCount] = useState(1);
  const [playerNamesArr, setPlayerNamesArr] = useState(
    Array.from({ length: playerCount }, () => "")
  );

  return (
    <PlayerContext.Provider
      value={{
        playerCount,
        playerNamesArr,
        setPlayerCount,
        setPlayerNamesArr,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
