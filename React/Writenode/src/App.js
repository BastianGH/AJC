import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
