import "./App.css";
import Routing from "./routes";
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routing />
      </main>
    </div>
  );
}

export default App;
