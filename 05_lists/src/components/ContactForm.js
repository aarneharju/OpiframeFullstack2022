import { useState } from 'react';

const ContactForm = (props) => {

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    })

    const onChange = (event) => {
        setState((state) => {
            return {
                ...state,
                [event.target.name]: event.target.value
            }
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        let contact = {
            ...state
        }
        props.addContact(contact);
        setState({
            firstname: '',
            lastname: '',
            email: '',
            phone: ''
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='firstname'>First name</label>
            <input type='text'
                name='firstname'
                id='firstname'
                value={state.firstname}
                onChange={onChange}
            />
            <br />
            <label htmlFor='lastname'>Last name</label>
            <input type='text'
                name='lastname'
                id='lastname'
                value={state.lastname}
                onChange={onChange}
            />
            <br />
            <label htmlFor='email'>Email</label>
            <input type='email'
                name='email'
                id='email'
                value={state.email}
                onChange={onChange}
            />
            <br />
            <label htmlFor='phone'>Phone</label>
            <input type='text'
                name='phone'
                id='phone'
                value={state.phone}
                onChange={onChange}
            />
            <br />
            <input type='submit' value='Add' />
        </form>
    )
}

export default ContactForm;