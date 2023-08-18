
import { Provider } from "react-redux";
import About from "./Containers/About/About";
import Header from "./Containers/Header/Header";
import Navigation from "./Containers/Navigation/Navigation";
import { store } from "./Redux/store";

function App() {


  return (
    <Provider store={store} >
      <div className="App">
        <Navigation/>
        <Header/>
        <About/>
      </div>
    </Provider>
   
  );
}

export default App;
