import React, { useState } from 'react';
import { sendAjax } from '../utils/sendAjax';
import { useNavigate } from 'react-router-dom';
import { removePoints } from '../store/actions';
import { useDispatch } from 'react-redux';

export const LogoutForm = () => {
    const method = () => "post";
    const url = () => "http://localhost:8080/auth/logout";
    const contentType = () => "application/json";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleResponse = (response) => {
        navigate('/login');
    }
    
    const logout = (_event) => {
        _event.preventDefault();
        dispatch(removePoints());
        sendAjax("", method(), url(), contentType(), (response) => handleResponse(response));
    }
        return(
          <form action="/auth/logout" method="POST">
            <button type="submit" onClick={ (_event) => logout(_event) }>Log out</button>
          </form>  
        )
}