/* API COMPONENT - Receives api response and displays in table format. */

import React from 'react'

function ApiComponent(props) {
    //initialize
    const jsonone = props.headone.toLowerCase();
    const jsontwo = props.headtwo.toLowerCase();
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>{props.headone}</th>
                        <th>{props.headtwo}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.responseData.map((res,idx) => (
                            <tr key={idx}>
                                <td>{res[jsonone]}</td>
                                <td>{res[jsontwo]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ApiComponent
