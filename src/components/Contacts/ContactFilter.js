import React from 'react';
import style from './Contact.module.css';
import { CSSTransition } from 'react-transition-group';
import filterStyle from './transition/filter.module.css';


//Filter input for Contacts 
function ContactEditor ({value,onChangeFilter}){
    return (

        // не могу понять почему не работает CSSTransition
        <CSSTransition
            in={true}
            classNames={filterStyle}
            timeout={250}
            unmountOnExit
            >
        <div className={style.filter}>
                <label  className={style.label}>
                    Find contacts by name 
                        <input 
                            className={style.input_cont}
                            type="text"
                            value={value}
                            onChange={onChangeFilter}
                        />
                </label>
            </div>
        </CSSTransition>
    )
}
export default ContactEditor;