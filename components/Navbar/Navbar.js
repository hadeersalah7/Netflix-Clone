import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import {BiChevronDown, BiChevronUp  } from "react-icons/bi";
import Image from "next/image";
import netflixLogo from "../../public/static/Netflix-Logo.wine.png"
const Navbar = (props) => {
  const { userName } = props;
  const router = useRouter()

  const handleHomeClick = (e) => {
e.preventDefault()
router.push("/")
  }

  const handleMyListClick = (e) => {
    e.preventDefault()
    router.push("/browse/my-list")
  }

  const [showDropdown, setShowDropdown] = useState(false)
//   const showArrowDropdown = showDropdown ? <BiChevronDown /> : <BiChevronUp />
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown)
    // showArrowDropdown()
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
          <Image src={'/static/netflix.svg'} alt="Netflix Red Logo" width={128} height={34}/>
          
          </div>
        </a>
      
      <ul className={styles.navItems}>
        <li className={styles.navItem} onClick={handleHomeClick}>Home</li>
        <li className={styles.navItem2} onClick={handleMyListClick}>My List</li>
      </ul>
      <nav className={styles.navContainer}>
        <div>
          <button className={styles.usernameBtn} onClick={handleDropdownClick}>
            <p className={styles.username}>{userName} {showDropdown ? <BiChevronUp /> : <BiChevronDown />} </p>
          </button>
         {showDropdown && (
         <div className={styles.navDropdown}>
            <Link href="/login" legacyBehavior>
                <a className={styles.linkName}>Sign out </a>
            </Link>
            <div className={styles.lineWrapper}></div>
          </div>
          )} 
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
