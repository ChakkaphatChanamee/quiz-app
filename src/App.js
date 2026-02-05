import {useState} from "react"
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";

function App() {
  const [appState,setAppAtate] = useState("menu")
  return (
    <div className='App'>
        <h1>Web Devalopment Quiz</h1>
        {appState === "menu" && <Menu/>}
        {appState === "quiz" && <Quiz/>}
        {appState === "score" && <Score/>}
    </div>
  );
}

export default App;