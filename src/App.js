import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1}/>
        <TimerChallenge title={"not Easy"} targetTime={3}/>
        <TimerChallenge title={"Getting tough"} targetTime={6}/>
        <TimerChallenge title={"pros only"} targetTime={5}/>
      </div>
    </>
  );
}

export default App;
