import React from 'react'
import styles from "../styles/SearchBar.module.scss"
const SearchBar = () => {
    return (
        <div>
            <div className={styles.content}>
            <div className={styles.search}>
                <input type="text" className={styles.search__input} aria-label="search" placeholder="enter your search"/>
                <button className={styles.search__submit} aria-label="submit search"><i className="fas fa-search"></i></button>
            </div>
            </div>
            
        </div>
    )
}

export default SearchBar
