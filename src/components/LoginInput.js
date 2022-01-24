import React from 'react';

export const LoginInput = (props) => {
    
    return (
        <p>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" className="form-control" placeholder="Username" required/>
        </p>
    )
    
}