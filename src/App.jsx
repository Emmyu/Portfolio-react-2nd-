import styles from "./App.module.css";
import { Navbar } from "./components/Navbar"; // Remove .jsx
import { Hero } from "./components/Hero"; // Remove .jsx

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
