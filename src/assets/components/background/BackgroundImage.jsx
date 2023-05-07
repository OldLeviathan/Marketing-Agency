import styles from "./BackgroundImage.module.css"

function  BackgroundImage({children}){
  return (
    <>
      <div
        className={styles.image}
        style={{
          backgroundImage: 'url(/agency3.jpg)',
        }}
      >
        {children}
      </div>
    </>
  )
}

export default BackgroundImage