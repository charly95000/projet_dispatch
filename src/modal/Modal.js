import React, {useState} from 'react'
import ReactDOM from "react-dom";

import styles from './Modal.module.css'


const Modal = ({children, isShowing,  hide}) =>{
    
    const handleClick =(e)=>{
    if(e.target !== e.currentTarget) return;
        hide()
    }
    console.log(isShowing)
    return (isShowing
    ? ReactDOM.createPortal(
        <div class={styles.modalOverlay} onClick={(e)=>handleClick(e)}>
            <div class={styles.modal}>
                {children}
                <button onClick={hide}>Fermer</button>
                
            </div>
        </div>
        ,
        document.body
    )
    : null
    )
}

export default Modal
