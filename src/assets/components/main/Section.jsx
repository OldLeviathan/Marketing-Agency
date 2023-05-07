import styles from "./Section.module.css"

function Section (){
  return(
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>best</h1>
          <h1><b>agency</b></h1>
          <h1>for your</h1>
          <h1><b>business</b></h1>
        </div>
        <div className={styles.subtitle}>
          <p>Lorem ipsum dolor isth consectetur <br/> adipsici usmod tempor incidiunt<br/> labore dolore magna aliqua.</p>
        </div>
      </div>
    </>
  )
}

export default Section