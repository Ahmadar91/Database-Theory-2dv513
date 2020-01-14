import React from 'react'
import './Create.css'
import {
    getGPU,
    getCPU,
    getRam,
    getMotherboard,
    createComp
} from '../../controllers/Network'
export default class Create extends React.Component {

    state = {
        name: "",
        username: "",
        gpu: "",
        cpu: "",
        ram: "",
        motherboard: "",
        cCase: "",
        gpuList: [],
        cpuList: [],
        moboList: [],
        ramList: [],
        loading: true,
        succesfull:false
    }



    constructor() {
        super()
        this.handleName = this.handleName.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleCase = this.handleCase.bind(this);
        this.handleGPU = this.handleGPU.bind(this);
        this.handleCPU = this.handleCPU.bind(this);
        this.handleRAM = this.handleRAM.bind(this);
        this.handleMotherboard = this.handleMotherboard.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async componentDidMount() {

        this.setState({
            cpuList: await getCPU(),
            gpuList: await getGPU(),
            moboList: await getMotherboard(),
            ramList: await getRam(),
            loading: false
        })

    }

    handleName(event) {

        this.setState({ name: event.target.value });
    }
    handleUsername(event) {
        this.setState({ username: event.target.value });
    }
    handleCase(event) {
        this.setState({ cCase: event.target.value });
    }
    handleGPU(event) {
        this.setState({ gpu: event.target.value });
    }
    handleCPU(event) {
        this.setState({ cpu: event.target.value });
    }
    handleRAM(event) {
        this.setState({ ram: event.target.value });
    }
    handleMotherboard(event) {
        this.setState({ motherboard: event.target.value });
    }
    async handleSubmit(event) {
        let response = 0;
        if(this.state.cpu === 0 || this.state.gpu === 0 || this.state.motherboard === 0 || this.state.ram === 0)
            alert("Please select all components")
        else {
           response = createComp(this.state.name, this.state.username, this.state.cpu, this.state.gpu, this.state.motherboard, this.state.ram, this.state.cCase)
        }
        if(response != 0 && response === 200) this.setState({succesfull:true})
        event.preventDefault();
        
    }

    render() {
        if (this.state.loading === true) return (<p>Loading</p>)
        if (this.state.succesfull === true) return (<h1>Succesfuly created</h1>)
        else return (
            <form onSubmit={this.handleSubmit} className="username-form">
                <label>
                    Name your build:
                    <input type="text" value={this.state.name} onChange={this.handleName}  required/>
                </label><br></br>

                <label>
                    What's your username:
                    <input type="text" value={this.state.username} onChange={this.handleUsername} required/>
                </label>
                <br></br>
                <label>
                    What case do you use:
                    <input type="text" value={this.state.cCase} onChange={this.handleCase} required/>
                </label><br></br>
                <select value={this.state.cpu} onChange={this.handleCPU}>
                    <option value={0}>Select CPU</option>
                    {
                        this.state.cpuList.map((item) => (
                            <option value={item.id} key={item.id}>{item.brand} {item.name}</option>
                        ))
                    }
                </select> <br></br>
                <select value={this.state.gpu} onChange={this.handleGPU}>
                    <option value={0}>Select GPU</option>
                    {
                        this.state.gpuList.map((item) => (
                            <option value={item.id}>{item.brand} {item.name}</option>
                        ))
                    }
                </select> <br></br>
                <select value={this.state.ram} onChange={this.handleRAM}>
                    <option value={0}>Select Ram</option>
                    {
                        this.state.ramList.map((item) => (
                            <option value={item.id}>{item.brand} {item.name}</option>
                        ))
                    }
                </select> <br></br>
                <select value={this.state.motherboard} onChange={this.handleMotherboard}>
                    <option value={0}>Select Motherboard</option>
                    {
                        this.state.moboList.map((item) => (
                            <option value={item.id} key={item.id}>{item.brand} {item.name}</option>
                        ))
                    }
                </select><br></br>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}