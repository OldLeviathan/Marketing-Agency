import MyButton from "../ui/button/MyButton.jsx";
import styles from "./Footer.module.css"


function Footer(){
  return(
    <>
      <div className={styles.wrapper}>
        <div className={styles.contacts}>
          <MyButton/>
          <a href="#" className={styles.link}>www.websitename.com</a>
        </div>
        <div className={styles.info}>
          <div className={styles.image}
            style={{
              backgroundImage: 'url("/phone.png")'
            }}
          />
          <div className={styles.text}>
            <p>More info</p>
            <a href="tel: +00000000000" className={styles.tel}>+000 123 456 789</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer