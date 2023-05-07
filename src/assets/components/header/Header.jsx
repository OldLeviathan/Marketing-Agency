import styles from "./Header.module.css"

function Header(){
  return(
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.image}
            style={{
              backgroundImage: 'url(/icon1.svg)'
            }}
          />
          <div className={styles.text}>
            <b>Marketing</b>
            <p>Agency</p>
          </div>
        </div>
        <div className={styles.right}>
          <p>"Marketing & Sales Solution<br/> To<mark> Grow Your Buisness</mark>"</p>
        </div>
      </div>
    </>
  )
}

export default Header