import styles from "./GalaxyWork.module.scss";
const GalaxyWork = () => {
  return (
    <>
      <div className={styles.galaxy_work}>
        <div className={styles.galaxy_work_container}>
          <h4>Works</h4>
          <div className={styles.galaxy_work_list}>
            <div
              className={styles.galaxy_item}
              style={{
                "--bg":
                  "url(https://i.pinimg.com/736x/f0/75/be/f075be8d0625c7b8be38a1be572b4aa3.jpg)",
              }}
            >
              <h6>Ridge Drinks</h6>
            </div>
            <div
              className={styles.galaxy_item}
              style={{
                "--bg":
                  "url(https://i.pinimg.com/736x/f0/75/be/f075be8d0625c7b8be38a1be572b4aa3.jpg)",
              }}
            >
              <h6>Ridge Drinks</h6>
            </div>
            <div
              className={styles.galaxy_item}
              style={{
                "--bg":
                  "url(https://i.pinimg.com/736x/f0/75/be/f075be8d0625c7b8be38a1be572b4aa3.jpg)",
              }}
            >
              <h6>Ridge Drinks</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalaxyWork;
