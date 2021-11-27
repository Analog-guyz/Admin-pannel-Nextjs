import React from 'react'
import styles from '../styles/TeamMembers.module.scss'
import { TeamMembersData } from '../DummyData/TeamData'
import Image from 'next/image'
import Link from 'next/link'
const TeamMembers = () => {
    
    return (
        <div className={styles.TeamMembers_wrapper}>
           <div className={styles.title_Wrapper}>
               <h2>Team Members</h2>
               <Link href="/TeamMembersPage">
                <a>View all</a>
                </Link>
            </div> 
            <div className={styles.Members_Wrapper}>
                {TeamMembersData.slice(0, 8).map((memberdata)=>{
                     return(
                    <div className={styles.Member_Wrapper} key={memberdata.name}>
                        <div className={styles.leftside}>
                            <div className={styles.image_Wrapper}>
                            <Image 
                            alt={`${memberdata.role} picture`}
                            // src={`/img/${memberdata.picture}`}
                            src={memberdata.picture}
                            width="150"
                            height= "150"
                            objectFit="cover"
                            className={styles.img}
                            />
                            </div>
                            <p>{memberdata.name}</p>
                        </div>
                        <div className={styles.rightside}>
                            <div 
                            className={styles.role_button} 
                            style={{backgroundColor: memberdata.role === "Manager" ? '#6c9aff93' : '',
                            color: memberdata.role === "manager" ? '#0e2968' : ''}}>
                            {memberdata.role}
                            </div>
                        </div>
                    </div>)
                    
                })}
            </div>
            
        </div>
    )
}

export default TeamMembers
