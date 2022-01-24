import React from 'react';

export const ResultRow = (props) => {
        return (
            <tr>
                <th>{props.point.x.toPrecision(2)}</th>
                <th>{props.point.y.toPrecision(2)}</th>
                <th>{props.point.r}</th>
                <th>{props.point.hit.toString()}</th>
            </tr>
        )
}