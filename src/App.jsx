import Playerinput from "./components/Playerinput";
import ShuffledList from "./components/ShuffledList";
import { PlayerProvider } from "./context/PlayerContext";

function App() {
  return (
    <PlayerProvider>
      <div className="container mx-auto">
        <div className="main_heading_container text-center py-14 bg-slate-800 my-10 rounded-md">
          <h1 className="text-4xl font-black uppercase">Player Shuffle! 🔀</h1>
          <p className="pt-8 text-3xl">
            Add players and press shuffle button!!
          </p>
        </div>

        <div className="main_conttainer flex md:flex-col sm:gap-10 lg:flex-row lg:gap-0 flex-col gap-10">
          {/* Player Input */}
          <Playerinput />
          {/* Shuffled Playelist */}
          <ShuffledList />
        </div>
      </div>
    </PlayerProvider>
  );
}

export default App;
