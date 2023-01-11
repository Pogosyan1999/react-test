import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./homePage/HomePage";

function App() {
  return (
  
  <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path= "/" element = {<HomePage/>}/>
      </Route>
    </Routes>
  
  );
}

export default App;
