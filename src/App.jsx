import Header from "./components/Header";
import SkilsLine from "./components/SkilsLine";
import CardList from "./components/CardList";
import "./index.css";
function App() {
  return (
    <div className=" flex flex-col items-center w-large h-screen">
      <Header />

      <SkilsLine />
      <CardList />
    </div>
  );
}

export default App;
