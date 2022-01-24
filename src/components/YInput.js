import React from 'react';

export class YInput extends React.Component{
    
    render(){
        return (
            <p>
              <label for="y">y</label>
              <input type="text" id="y" name="y" className="form-control" placeholder="y" maxLength="10" required/>
            </p>
        )
    }
}