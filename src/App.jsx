import styles from "./App.module.css";
import Display from "./components/Display";
import Buttoncont from "./components/Buttoncont";

function App() {
 
  return (
    <>
     <div className={styles.calculator}>
    <Display></Display>
    <Buttoncont></Buttoncont>
   </div>
    </>
  )
}

export default App
