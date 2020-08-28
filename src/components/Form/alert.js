import React from 'react'
import style from './Alert.module.css'


const Alert = ({text, onClick}) => {
    return (
           <div className={style.container}>
                <span className={style.text}> {text} </span>
            </div>
    )
}

export default Alert;