import React from 'react'
import login from '../../controllers/Authentication'

export default class Login extends React.Component{
    render(){
        return(
            <button onClick={login('test', 'test')}>
                Login
            </button>
        )
    }
}