import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import styles from "./App.module.css";
import "./App.font.css"
import Footer from "./Footer";
import { useState } from "react";

function App() {  
  console.log(styles);
  return (
    <>
      <Nav className={styles.nav}/>
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer}/>
    </>
  );
}

export default App;
