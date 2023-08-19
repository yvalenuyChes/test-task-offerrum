
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import AppWrapper from "./AppWrapper/AppWrapper";

function App() {

  return (
    <Provider store={store} >
      <div className="App">
      <AppWrapper/>
      </div>
    </Provider>
   
  );
}

export default App;
