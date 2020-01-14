import React from 'react';
import BuildsList from '../home/BuildsList';
import { getComputersByUser } from '../../controllers/Network';

export default class Home extends React.Component{

    state = {
        loading: false,
        user:'',
        builds:null,
        submitted:false
    }


    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        if(this.state.loading === true) return (<h1>Loading...</h1>)
        if(this.state.builds === null || this.state.builds === []){
            if(this.state.user !== '' && this.state.submitted === true){
                alert("User has no computers or it doesn't exists")
                this.setState({submitted:false})
            }
            return this.form();
        }
        return(
            <div>
                <BuildsList build = {this.state.builds}/>
            </div>
        )
    }


    handleSubmit(event){
        if(this.state.user === '') alert("Please input a username")
        else{
            this.setState({loading:true, submitted:true})
            this.getBuilds()
        }
        event.preventDefault()
    }

    handleChange(event){
        this.setState({
            user:event.target.value
        })
    }

    async getBuilds(){
        this.setState({
            builds: await getComputersByUser(this.state.user),
            loading:false
        })
    }

    form(){
        return(
            <form onSubmit={this.handleSubmit} className="username-form">
                <label>
                    Input username:
                    <input type="text" value={this.state.user} onChange={this.handleChange}  required/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}