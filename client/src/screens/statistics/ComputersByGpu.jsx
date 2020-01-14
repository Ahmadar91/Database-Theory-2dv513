import React from 'react';
import BuildsList from './BuildsList';
import { getGpuStatistics } from '../../controllers/Network';

export default class ComputersByGpu extends React.Component{

    state = {
        loading: true
    }


    async componentDidMount(){
        this.setState({
            loading:false,
            gpuBrands:await getGpuStatistics()
        })
    }

    render(){
        if(this.state.loading === true) return (<h1>Loading...</h1>)
        return(
            <div>
                <BuildsList build = {this.state.gpuBrands}/>
            </div>
        )
    }
}