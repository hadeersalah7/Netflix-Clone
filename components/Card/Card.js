import Image from 'next/image'
import styles from "./card.module.css"
import { useState } from 'react'
import { motion } from "framer-motion"
import cls from 'classnames'
function Card(props) {
    const {imgUrl = "/static/clifford.webp", size="medium"} = props
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem
    }
    const [imgSrc, setImgSrc, id] = useState(imgUrl)

    const handleOnError = () => {
console.log("shit")
setImgSrc("/static/clifford.webp")
    } 
    const scale = id === 0 ? {scaleY: 1.1} : {scale: 1.1}
  return (
    <div className={styles.contianer} >
     <motion.div className={cls(styles.imgMotionWrapper,classMap[size])} whileHover={{...scale}}>
        <Image src={imgSrc}  alt='image' layout='fill' onError={handleOnError} className={styles.cardImg}/>
    </motion.div>   
    </div>
    
  )
}

export default Card