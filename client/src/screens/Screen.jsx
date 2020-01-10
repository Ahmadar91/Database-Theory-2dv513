import React from 'react'
import Home from './home/Home'

export default class Screen extends React.Component{
    render(){
        switch(this.props.page){
            case 1:
                return(<Home></Home>)
            default:
                return(<Home></Home>)
        }
    }
}