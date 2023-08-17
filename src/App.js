import About from "./Containers/About/About";
import Header from "./Containers/Header/Header";
import Navigation from "./Containers/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <About/>
    </div>
  );
}

export default App;
