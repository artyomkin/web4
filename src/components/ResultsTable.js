import React, { useState, useEffect } from 'react';
import { ResultRow } from './ResultRow';
import { ResultTableBody } from './ResultTableBody';
import store from '../store/store'
import * as actions from '../store/actions';

export const ResultsTable = (props) => {
    
    const[points, setPoints] = useState([]);
    
    useEffect(()=>{
        store.subscribe(() => setPoints(store.getState().points));
    },[])
    
    return (
            <table id="results">
                <tr>
                    <th>x</th>
                    <th>y</th>
                    <th>r</th>
                    <th>hit</th>
                </tr>
                <ResultTableBody points={points}/>
            </table>
            )
}