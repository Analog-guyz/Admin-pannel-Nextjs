import React from 'react'
import styles from "../styles/TeamMembers_card.module.scss"
import Image from 'next/image'
import LocationOnIcon from '@material-ui/icons/LocationOn';

const TeamMembers_card = ({img,name,role,location}) => {
    return (
        <div className={styles.card_Wrapper}>
            <div className={styles.img_container}>
                <div className={styles.img_Wrapper}>
                <Image 
                            alt=""
                            src={img}
                            width="150"
                            height= "150"
                            objectFit="cover"
                            className={styles.img}
                            />
                </div>
            </div>
            <div className={styles.name_wrapper}>
                <p>{name}</p>
            </div>
            <div className={styles.role_Wrapper}>
                <div className={styles.role_button}><p>{role}</p></div>
            </div>
            <div className={styles.location_Wrapper}>
                <LocationOnIcon/>
                <p>{location}</p>
            </div>
            
        </div>
    )
}

export default TeamMembers_card

