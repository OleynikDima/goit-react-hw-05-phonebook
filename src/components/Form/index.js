import React, {Component, useState}from 'react';
import {CSSTransition} from 'react-transition-group'
import styles from './Form.module.css'
import './transition/animation.css'
import redAlert from './transition/alert.module.css'
import MessageRed from './alert.js'

export default class Form extends Component {
    state={
        text:'',
        number:'',
    }
//change text in state
    handleChangeText = e => {
        this.setState({
            text: e.target.value,
        })
    }
//change number in state 
    handleChangeNumber = e => {
        this.setState({
            number: e.target.value,
        })
    }

// push in App state
    handleSubmit = e =>{
       e.preventDefault();
       const {text,number} = this.state

        this.props.onAddText({text,number})
    //remove input
        this.setState({
            text:'',
            number:'',
        })
    }

render(){
return (
    <div className={styles.container}>
        <div className={styles.header}>
            <CSSTransition  in={true} timeout={250} appear={true} classNames="titleIn" unmountOnExit>
                    <h2 className={styles.title}> Phonebook </h2>
            </CSSTransition>

            <CSSTransition in={this.props.eventShow} timeout={250} classNames={redAlert} unmountOnExit>
                     <MessageRed text="Contact is already" />
            </CSSTransition>
        </div>

    <form  className={styles.form} onSubmit={this.handleSubmit} >
        <label>Name
            <input 
            className={styles.input}
            type="input" 
            value={this.state.text}
            onChange={this.handleChangeText}
            placeholder="please write name"
            />
         </label>

         <label> Number
            <input 
            className={styles.input_number}
            type="input" 
            country="US"
            value={this.state.number}
            onChange={this.handleChangeNumber}
            placeholder="number phone"
            />
         </label>


         <button 
            className={styles.button} 
            type="submit"
            disabled={!this.state.text}
            >
                Add contact 
         </button>
    </form>   
    </div>
  )
 }
}

