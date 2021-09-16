 import LandingPage from "./module/landingpage";
 import { useSelector } from "react-redux";
function App() {
  const store = useSelector(store=>store)
  console.log(store);
  return (
    <div className="App">
      <LandingPage/>
      
    </div>
  );
}

export default App;
