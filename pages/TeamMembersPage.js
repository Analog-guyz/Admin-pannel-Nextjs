import React,{useState} from 'react'
import styles from "../styles/TeamMembersPage.module.scss"
import TeamMembers_card from '../components/TeamMembers_card'
import {TeamMembersData} from "../DummyData/TeamData"
import SearchIcon from '@material-ui/icons/Search';
const TeamMembersPage = () => {
    const [searchInput, setSearchIput] = useState("")


    return (
        <>
        {console.log(searchInput)}
        <div className={styles.TeamMembersPage_container}>
            <div className={styles.header}>
                <p>Team Members</p>
                <div className={styles.search_wrapper}>
                    <input type="text" placeholder="Search name here" className={styles.Search_input} onChange={(e)=> {setSearchIput(e.target.value)}}/>
                    <button type="submit" ><SearchIcon fontSize="small"/></button>
                </div>
            </div>

            {TeamMembersData.filter((val)=>{
                if (searchInput == ""){
                    return val
                }
                else if (val.name.toLowerCase().includes(searchInput.toLowerCase())){
                    return val
                }
            }).map((Data)=>{
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
