import React from 'react'



export default class BuildsList extends React.Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Build Name</td>
                            <td>CPU</td>
                            <td>GPU</td>
                            <td>Motherboard</td>
                            <td>RAM</td>
                            <td>Owner</td>
                            <td>Case</td>
                            <td>Storage</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.build.map((item) => (
                                <tr key={`${item.owner} + ${item.name}`}>
                                    <td>{item.name}</td>
                                    <td>{item.cpu_name}</td>
                                    <td>{item.gpu_name}</td>
                                    <td>{item.mobo_name}</td>
                                    <td>{item.ram_name}</td>
                                    <td>{item.user_name}</td>
                                    <td>{item.case}</td>
                                    <td>{item.memory}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}