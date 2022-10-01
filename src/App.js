import { useContext } from "react";
import {AppContext} from "./States/AppContext";
import Header from "./Components/Header";
import List from "./Components/List";
import "./Style/app.scss";

function App() {
  const {initSample} = useContext(AppContext);
  const [sample, setSample] = initSample;
  return (
      <section class="app">
        <Header />         
        <List/>
      </section>
  );
}

export default App;
