import React from 'react'



export default class BuildsList extends React.Component {
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>GPU Brand</td>
                            <td>Number of computers</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.build.map((item) => (
                                <tr key={`${item.gpu_brand} + ${item.number}`}>
                                    <td>{item.gpu_brand}</td>
                                    <td>{item.number}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}