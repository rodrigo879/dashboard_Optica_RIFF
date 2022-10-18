import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td className="align-middle">{props.name}</td>
                    <td className="align-middle">{props.nameBrand}</td>
                    <td className="align-middle">{props.nameCategory}</td>
                    <td className="align-middle text-center">{props.price}</td>
                    <td className="align-middle text-center">{props.discount}</td>
                    <td className="align-middle">{props.images}</td>
                </tr>
            )
    }

export default ChartRow;