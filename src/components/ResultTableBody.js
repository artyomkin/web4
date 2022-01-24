import React from 'react';
import { ResultRow } from './ResultRow';

export const ResultTableBody = (props) => {

    const rows = () => {
        let content = [];
        if (props && props.points){
            for (let i = 0; i < props.points.length; i++){
                content.push(<ResultRow point={props.points[i]}></ResultRow>);
            }
        }
        return content;
    }
    
  return (
            rows()
         ) 
};