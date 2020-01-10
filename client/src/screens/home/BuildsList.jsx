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
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.build.map((item) => (
                                <tr key={item.owner}>
                                    <td>{item.name}</td>
                                    <td>{item.cpu}</td>
                                    <td>{item.gpu}</td>
                                    <td>{item.mobo}</td>
                                    <td>{item.ram}</td>
                                    <td>{item.owner}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}