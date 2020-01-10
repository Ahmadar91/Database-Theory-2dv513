import React from 'react';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.test()}>Whatevs</button>
                muie
            </div>
        )
    }

    async test(){
        let response = await fetch('http://192.168.226.1:4000/');
        console.log(response)
    }
}