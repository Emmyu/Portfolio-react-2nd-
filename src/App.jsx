import styles from "./App.module.css";
import { About } from "./components/About";

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";


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