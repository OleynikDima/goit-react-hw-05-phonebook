import React, {Component} from 'react'
import Section from './Section'
import Form from './Form'
import ContactsList from './Contacts'
import ContactFilter from './Contacts/ContactFilter'
const shortid = require('shortid');


export default class App extends Component {

    state = { 
        contacts: [
                {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
                {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
                  ],
        filter:'',
        showAlert:false,
    };
// function searching input contacts in filter
    changeFilter = event => {
        this.setState({filter:event.target.value})
    }
// search similar name
    updateInfo = () =>{      
        const {filter, contacts} = this.state
         return contacts.filter(contack => contack.name.toLowerCase().includes(filter.toLowerCase()))  
    }
//function recovery contacts
    handleCreateObjectContact = ({text,number}) =>{

        const {contacts} =this.state
        const filterName = contacts.map(contact => contact.name)
    // see if new contacts
        if (filterName.includes(text)){
             setTimeout(() => this.setState({showAlert:false}),2000)
             this.setState({showAlert:true})
        }else {

    //create Object          
            const newObj ={
                id:shortid(),
                name:text,
                number:number,
               }
    // recover stae.contacts  add new array
            this.setState((prevState)=>{
                return {
                    contacts:[newObj,...prevState.contacts],
                }
            })

        }
    }
// Delete contact
    onRemoveItem = itemId =>{
        this.setState((prevState)=>{
            return {
                contacts: prevState.contacts.filter(contact => contact.id.indexOf(itemId) === -1)
            }
        })        
    }

    // delayAlert = () => {
    //     const {showAlert}=this.state
    //     setTimeout(this.setState({isShow:!isShow}), 2000)
    // }
    render (){
        const {filter, contacts} = this.state;
        const visible = this.updateInfo();
        const isShowInput = contacts.length > 1 ? true : false
        return (
            <>
            <Section>
                <Form 
                    onAddText={this.handleCreateObjectContact}
                    eventShow={this.state.showAlert}
                    />
            </Section>

            <Section>
                {isShowInput && 
                    <ContactFilter 
                        onChangeFilter={this.changeFilter}
                        value={filter}
                        />
                }
                
                <ContactsList 
                    contacts ={visible}  
                    onDelete={this.onRemoveItem}
                    />
            </Section>
            </>

        )
    }
}