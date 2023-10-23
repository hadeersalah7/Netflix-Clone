import Image from "next/image";
import dogImage from "../../public/static/clifford.webp";
import styles from "./banner.module.css";
import { BiSolidRightArrow } from "react-icons/bi";

function Banner(props) {
  const { title, subTitle, imgUrl } = props;
  const handleClick = () => {
    console.log("handle Play!");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <div className={styles.left}>
            <div className={styles.nseriesWrapper}>
               <p className={styles.firstLetter}>N</p>
               <p className={styles.series}>S E R I E S</p>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.subTitle}>{subTitle}</h3>
            {/* <div style={{backgroundImage: `url${imgUrl}`, width: "100%", height: "100%", position:"absolute", backgroundSize:"cover",
    backgroundPosition: "50% 50%"}}></div> */}
            <div className={styles.playBtnWrapper}>
              <button className={[styles.btnWithIcon]} onClick={handleClick}>
                <span className={styles.playText}><BiSolidRightArrow className={styles.arrow}/> Play </span>
                </button>
            </div>
          </div>
        </div>
        <div>
          <Image
          className={styles.bannerImg}
            src={dogImage}
            alt="red cute dog"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
