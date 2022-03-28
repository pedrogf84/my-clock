import "./App.css";
//import { Countdown, DigitalClock } from "./components";
import DigitalClock from "./components/DigitalClock.jsx";
import Countdown from "./components/Countdown.jsx";
import Stopwatch from "./components/Stopwatch.jsx";

function App() {
  return (
    <div className="App">
      <h1>Clock</h1>
      <DigitalClock />
      <h1>Timer</h1>
      <Countdown />
      <h1>StopWatch</h1>
      <Stopwatch />
    </div>
  );
}

export default App;
