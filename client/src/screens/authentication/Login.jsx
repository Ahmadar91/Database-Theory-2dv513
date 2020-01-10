import React from 'react'
import {login} from '../../controllers/Authentication'

export default class Login extends React.Component{
    render(){
        return(
            <button onClick={()=>this.loginPress()}>
                Login
            </button>
        )
    }

    loginPress(){
        login('test', 'test')
    }
}