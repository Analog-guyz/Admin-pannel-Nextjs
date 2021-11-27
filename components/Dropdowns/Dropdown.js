import React from 'react'
import styles from "../../styles/Dropdown.module.scss"
import Image from 'next/dist/client/image'

const Dropdown = ({name,pic}) => {
    return (
        <div className={styles.Dropwdown_Wrapper} >
            <div className={styles.profile_pic_Wrapper}>
            <Image className={styles.profile_pic} alt="profile_pic"
                                
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                src={pic} />
            </div>
            <div className={styles.profile_name_wrapper}>
                <p >{name}</p>
            </div>
            <div className={styles.buttons_Wrapper}>
                <button className={styles.Acount_button}>manage acount</button>
                <button className={styles.Signout_button}>signout</button>  
            </div>
            <div className={styles.footer}>
                <p>Privacy Policy</p>
                <div className={styles.divider}></div>
                <p>Terms of Service</p>

            </div>
            
        </div>
    )
}

export default Dropdown
