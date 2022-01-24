import React from 'react';

export class XInput extends React.Component{
    
    getSelectContent(start, end, step){
        let content = [];
        for (let i = start; i <= end; i+=step){
            content.push(<option value={i}>{i}</option>)
        }
        return content;
    }
    
    render(){
        return (
            <p>
              <label for="x">x</label>
              <select name="x" id="x">
                {this.getSelectContent(-3,5,1)}
              </select>
            </p>
        )
    }
}