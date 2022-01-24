import React from 'react';

export const PasswordInput = (props) => {
    
    return (
        <p>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" class="form-control" placeholder="Password" required/>
        </p>
    )
    
}