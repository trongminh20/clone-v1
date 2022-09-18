import { useContext } from "react";
import {AppContext} from "./States/AppContext";
function App() {
  const {initSample} = useContext(AppContext);
  const [sample, setSample] = initSample;
  return (
      <section class="app">
          <h1>{sample}</h1>
      </section>
  );
}

export default App;
