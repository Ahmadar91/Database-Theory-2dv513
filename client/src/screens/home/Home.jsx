import React from 'react';
import BuildsList from './BuildsList';

export default class Home extends React.Component{
    render(){

        let list =[]
        list.push({
            name:"Whatevs",
            cpu:"i7",
            gpu:"GTX 1080ti",
            mobo:"X470",
            ram:"Corsair Vengeance",
            owner:"Whatevs",
            description:"Whatevs",
        })
        list.push({
            name:"Whatevs",
            cpu:"asdf",
            gpu:"Whatasdfasdfevs",
            mobo:"Whaasdfasdfastevs",
            ram:"Whatedsafasdfasdvs",
            owner:"Whatasdfadsfasdevs",
            description:"Whasdfasdfasdatevs",
        })
        list.push({
            name:"Whatasdgasdgevs",
            cpu:"Whasgfdasgdasatevs",
            gpu:"Whaasdfasgfstevs",
            mobo:"Whasgfasfsdatevs",
            ram:"Whaasgdsagdastevs",
            owner:"Whaasdgasdgtevs",
            description:"Wasdgasdgasdghatevs",
        })
        return(
            <div>
                <BuildsList build = {list}/>
            </div>
        )
    }
}