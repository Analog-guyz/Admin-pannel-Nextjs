import React,{useState} from 'react'
import Dropdown from '../components/Dropdowns/Dropdown'
import Image from 'next/dist/client/image'
import styles from "../styles/Mini_Pofile.module.scss"
const Mini_Profile = ({showDropDown,setShowDropDown}) => {
    const img_src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    return (
        <div className={styles.profile_wrapper} >
            <div className={styles.handle_click_out_div} onClick={e => {e.stopPropagation();}}>
                <div className={styles.profile_pic_div} >
                    <Image className={styles.profile_pic} alt="profile_pic"
                    onClick={()=>setShowDropDown(!showDropDown)} 
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    src={img_src} />
                    
                </div>
                {showDropDown ? <Dropdown name="Andrew Johnstons" pic={img_src}/> : null}
            </div>
                <p className={styles.profile_name}>Andrew Johnstons</p>
        </div>
        
    )
}

export default Mini_Profile
