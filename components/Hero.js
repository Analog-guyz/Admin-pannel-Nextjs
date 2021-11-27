import React,{useState} from 'react'
import styles from "../styles/Hero.module.scss"
import TeamMembers from './TeamMembers'
import { Plus,Bitcoin_svg,Dollar_Svg,Euro_svg,Yen_svg } from '../svg/svg'
import Comparison from './Comparison'
import AddUnit from './modals/addunit'
import Modal_Success_message from './modals/Modal_Success_message'
import Mini_Profile from './Mini_Profile'
import HomepageChart from "./charts/HomepageChart"
import {Chart_1_data} from "../DummyData/ChartsData"

const Hero = () => {
    const [ShowModal, setShowModal] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    const [showModalMessage, setShowModalMessage] = useState(false)
   
    return (
        <>
        
        <div className={styles.hero} onClick={()=> setShowDropDown(false)}>
            {/* Header section starts*/}
            <div className={styles.header}>
                <div className={styles.Modal_Message_Wrapper}>
                    {showModalMessage ? <Modal_Success_message message="Unit Added Succefully!"/> : null}
                </div>
                <div className={styles.header_left_side}>
                    <h1>Dashboard</h1>
                    <p>Welcome back, Andrew</p>
                </div>
                <div className={styles.header_right_side}>
                    <div className={styles.button_wrapper}>
                        {/* modal button */}
                        <div className={styles.button} onClick={() => setShowModal(!ShowModal)}><Plus/><a>Add Unit</a></div>
                        <AddUnit ShowModal={ShowModal} setShowModal={setShowModal} showModalMessage={showModalMessage} setShowModalMessage={setShowModalMessage} />
                        {/* modal button */}
                    </div>
                    {/* profile section starts */}
                    <Mini_Profile showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
                    {/* profile section ends */}
                </div>
            </div>
            {/* Header section ends*/}
            <div className={styles.button_small_Screen_Wrapper}>
            <div className={styles.button_small_Screen} onClick={() => setShowModal(!ShowModal)}><Plus/><a>Add Unit</a></div>
                <AddUnit ShowModal={ShowModal} setShowModal={setShowModal} showModalMessage={showModalMessage} setShowModalMessage={setShowModalMessage} />
            </div>
            {/* balance section starts */}
            <div className={styles.balance_section}>
                <div className={styles.balance_section_unit_Wrapper}>
                    <p>BALANCE</p>
                    <h2>5900.00$</h2>
                </div>
                <div className={styles.divider}/>
                <div className={styles.balance_section_unit_Wrapper}>
                    <p>PROFITS</p>
                    <h2>950.00$</h2>
                </div>
                <div className={styles.divider}/>
                <div className={styles.balance_section_unit_Wrapper}>
                    <p>LOSSES</p>
                    <h2>450.00$</h2>
                </div>
                <div className={styles.divider}/>
                <div className={styles.balance_section_unit_Wrapper}>
                    <p>CURRENCIES</p>
                    <div className={styles.currency_icons}>
                        <Bitcoin_svg/>
                        <Dollar_Svg/>
                        <Euro_svg/>
                        <Yen_svg/>
                    </div>
                </div>
            </div>
            
            {/* balance section ends */}

            {/* chart section starts */}
            <div className={styles.chart_container}>
                <div className={styles.chart_title_Wrapper}><h2>Analytics Monthly Sales</h2></div>
                <div className={styles.chart_Wrapper}> 
                 <HomepageChart data={Chart_1_data} grid dataKey="Products Sold"/>
                </div>
            </div>

            {/* chart section ends */}

            {/* widget section starts */}
            <div className={styles.widgets_Wrapper}>
                <TeamMembers/>
                <Comparison/>
            </div>
            {/* widget section ends */}
            
        </div>
        </>
    )
}

export default Hero
