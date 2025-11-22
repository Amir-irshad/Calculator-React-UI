import styles from "./Buttoncont.module.css"
const Buttoncont = () => {

   const buttoncontain = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];;
    return <>
    <div className={styles.buttonContainer}>       
     {buttoncontain.map((buttonname) => (<button className={styles.button}>{buttonname}</button> ))}
      
    </div>
    </>
}

export default Buttoncont;