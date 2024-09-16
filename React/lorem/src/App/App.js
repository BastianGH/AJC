import "./App.css";
import Lorem from "../Components/Lorem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lorem Ipsum</h1>
      </header>
      <main>
        <Lorem limit={10} />
      </main>
    </div>
  );
}

export default App;
