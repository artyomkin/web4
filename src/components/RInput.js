import React from 'react';
import { redrawGraph } from '../store/actions';
import { useDispatch } from 'react-redux';

export const RInput = () => {
    
    const getSelectContent = (start, end, step) => {
        let content = [];
        for (let i = start; i <= end; i+=step){
            content.push(<option value={i}> {i} </option>)
        }
        return content;
    }
                         
    const dispatch = useDispatch();
            
    const handleChange = () => {
        let radius = document.getElementById("r").value;
        if (radius >= 0){
            dispatch(redrawGraph(radius));
        } else {
            alert("radius cannot be negative");
        }
    }
    
    return (
            <p>
              <label for="r">r</label>
              <select name="r" id="r" onChange={ () => handleChange() }>
                {getSelectContent(-3,5,1)}
              </select>
            </p>
    )
}