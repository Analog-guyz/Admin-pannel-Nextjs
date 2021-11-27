import React,{useState} from 'react'
import styles from '../styles/Nav.module.scss'
import { Dashboard_svg,Analytics_svg,Crypto_svg,Notifications_svg,Logout_svg } from '../svg/svg'
import { useRouter } from "next/router";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'
const Nav = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const router = useRouter();
    
    return (
        <>  <div className={styles.mobile_menu_Wrapper} onClick={()=>setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <CloseIcon fontSize='medium'/> : <MenuIcon  fontSize='medium'/> }

            </div>
            <div className={styles.sidenav_wrapper}>
                <div className={styles.list_items}>
                    <Link href="/" passHref>
                    <div className={router.pathname == "/" ? styles.active : ""}>
                        <Dashboard_svg color={router.pathname == "/" ? "#1F64FF" : "#8990ad"}   />
                        <p>Dashboard</p>
                    </div>
                    </Link>
                    <Link href="/analytics" passHref>
                    <div  className={router.pathname == "/analytics" ? styles.active : ""}> 
                        <Analytics_svg color={router.pathname == "/analytics" ? "#1F64FF" : "#8990ad"}/>
                        <p>Analytics</p>
                    </div>
                    </Link>
                    <Link href="/crypto" passHref>
                    <div  className={router.pathname == "/crypto" ? styles.active : ""}>
                        <Crypto_svg color={router.pathname == "/crypto" ? "#1F64FF" : "#8990ad"}/>
                        <p>Trading</p>
                    </div>
                    </Link>
                    <Link href="/Notifications" passHref>
                    <div  className={router.pathname == "/Notifications" ? styles.active : ""}>
                        <Notifications_svg color={router.pathname == "/Notifications" ? "#1F64FF" : "#8990ad"}/>
                        <p>Notifications</p>
                    </div>
                    </Link>
      
                    <div>
                        <Logout_svg/>
                        <p>Logout</p>
                    </div>
                    
                </div>    
            </div>
            <div 
            className={showMobileMenu ? ` ${styles.sidenav_wrapper_mobile} ${styles.mobile_active} `: styles.sidenav_wrapper_mobile}
           
            >
                <div className={styles.list_items}>
                    <Link href="/" passHref>
                    <div className={router.pathname == "/" ? styles.active : ""}>
                        <Dashboard_svg color={router.pathname == "/" ? "#1F64FF" : "#8990ad"}   />
                        <p>Dashboard</p>
                    </div>
                    </Link>
                    <Link href="/analytics" passHref>
                    <div  className={router.pathname == "/analytics" ? styles.active : ""}> 
                        <Analytics_svg color={router.pathname == "/analytics" ? "#1F64FF" : "#8990ad"}/>
                        <p>Analytics</p>
                    </div>
                    </Link>
                    <Link href="/crypto" passHref>
                    <div  className={router.pathname == "/crypto" ? styles.active : ""}>
                        <Crypto_svg color={router.pathname == "/crypto" ? "#1F64FF" : "#8990ad"}/>
                        <p>Trading</p>
                    </div>
                    </Link>
                    <Link href="/Notifications" passHref>
                    <div  className={router.pathname == "/Notifications" ? styles.active : ""}>
                        <Notifications_svg color={router.pathname == "/Notifications" ? "#1F64FF" : "#8990ad"}/>
                        <p>Notifications</p>
                    </div>
                    </Link>
      
                    <div>
                        <Logout_svg/>
                        <p>Logout</p>
                    </div>
                    
                </div>       
            </div>
            
         
        </>
    )
}

export default Nav
