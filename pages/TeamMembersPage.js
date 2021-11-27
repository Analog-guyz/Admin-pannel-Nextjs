import React from 'react'
import styles from "../styles/TeamMembersPage.module.scss"
import TeamMembers_card from '../components/TeamMembers_card'
import {TeamMembersData} from "../DummyData/TeamData"
const TeamMembersPage = () => {
    const img_src="https://images.unsplash.com/photo-1631640687399-067a45d2dd9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    const location ="Tehran"
    return (
        <>
        
        <div className={styles.TeamMembersPage_container}>
            <div className={styles.header}>
                <p>Team Members</p>
                </div>
            
            {TeamMembersData.map((Data)=>{
                return (
                    <div key={Data.id}>
                        <TeamMembers_card name={Data.name} role={Data.role} img={Data.picture} location={Data.location}/>
                    </div>


                )
            })}

            
        </div>
        </>
    )
}

export default TeamMembersPage
