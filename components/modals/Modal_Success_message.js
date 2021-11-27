import React from 'react'
import styles from "../../styles/Modal_Success_message.module.scss"
const Modal_Success_message = ({message}) => {
    return (
        <div className={styles.Success_Message_Wrapper}>
            <p>{message}</p>
            
        </div>
    )
}

export default Modal_Success_message
