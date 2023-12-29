import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import styles from "./App.module.css";
import Footer from "./Footer";

function App() {
  
  console.log(styles);
  return (
    <>
      <Nav className={styles.nav}/>
      <div className={styles.body}/>
      <div>
        <Outlet />
      </div>
      <Footer className={styles.footer}/>
    </>
  );
}

export default App;
