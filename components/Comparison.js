import React from 'react'
import styles from"../styles/Comparison.module.scss"
import { ComparisonData } from '../DummyData/ComparisonData'

const Comparison = () => {
    const progressbar_color_logic_function = (cityData) =>{
        let color = ""
        if (cityData >= 0 && cityData <= 24) {
             color="rgb(204, 0, 0)"
        }
        if (cityData >= 25 && cityData <= 49) {
            color="rgb(237, 153, 69)"
        }
        if (cityData >= 50 && cityData <= 74) {
           color="rgb(237, 237, 0)"
        }
        if (cityData >= 75 && cityData <= 100) {
           color="rgb(0, 158, 40)"
        }
        return color;
    
    }
        
    
    return (
        <div className={styles.Comparison_Wrapper}>
            <div className={styles.title_Wrapper}>
               <h2>Sales Comparison</h2>
               {/* <a>View all</a> */}
            </div> 
            <div className={styles.Comparison}>
                {ComparisonData.map((cityData)=>{

                        return(
                            <div key={cityData.CityName} className={styles.cityData}>
                                <div className={styles.city_title_wrapper}>
                                    <p>{cityData.CityName}</p>
                                </div>
                                <div className={styles.city_progress_wrapper}>
                                    <div className={styles.progress_bar} 
                                    style={{width: cityData.progress_percent+"%",backgroundColor:progressbar_color_logic_function(cityData.progress_percent) }}
                                    />
                                    <p>{cityData.progress_percent} %</p>

                                </div>
                            </div>
                        )
                        
                        
                    })}

            </div>
            
        </div>
    )
}

export default Comparison
