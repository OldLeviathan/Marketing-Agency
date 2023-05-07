import styles from "./Decorations.module.css"

function Decorations(){
  return(
    <>
      <div className={styles.wrapper}>
        <div className={styles.line}>
          <div className={styles.main}/>
          <div className={styles.end}/>
        </div>
        <ul className={styles.dots}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  )
}

export default Decorations