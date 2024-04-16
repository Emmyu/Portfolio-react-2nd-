import styles from "./App.module.css";
import { Navbar } from "./components/Navbar"; // Remove .jsx
import { Hero } from "./components/Hero"; // Remove .jsx
import About from "./components/About";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
