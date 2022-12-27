import Header from "./components/Header";
import Body from "./components/Body";
import AddWorker from "./components/AddWorker";
import Search from "./components/Search";
function App() {
  return (
    <div className="App container">
      <Header/>
      <Search/>
      <Body/>
      <AddWorker/>
    </div>
  );
}

export default App;
