import Header from "./components/Header";
import SkilsLine from "./components/SkilsLine";
import CardList from "./components/CardList";
import styles from "./style/index.module.scss";
import "./index.css";
function App() {
  return (
    <div className={styles.bg}>
      <Header />

      <SkilsLine />
      <CardList />
    </div>
  );
}

export default App;
