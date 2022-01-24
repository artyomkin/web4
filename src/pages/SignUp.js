import React from 'react';
import { LoginInput } from '../components/LoginInput';
import { PasswordInput } from '../components/PasswordInput';
import { Header } from '../components/Header';
import { usrFromForm } from '../utils/fromForm';
import { sendAjax } from '../utils/sendAjax';
import { useNavigate } from 'react-router-dom';
import '../resources/static/css/login.css';

export const SignUp = (props) => {
    
    const navigate = useNavigate();
    const method = () => "post";
    const url = () => "http://localhost:8080/auth/registration";
    const contentType = () => "application/json";
    
    const handleResponse = () => {
        navigate('/login');
    }
    
    const signUp = (_event) => {
        _event.preventDefault();
        
        let data = JSON.stringify(usrFromForm(new FormData(document.getElementById("form-signup"))));
        sendAjax(data, method(), url(), contentType(), () => handleResponse());
    }

    
    return (
        <div>
        <Header first_name="Артем" second_name="Артемкин" patronymic="Владимирович" group="P3211" option="970000"/>
        <div className="container">
        <form id="form-signup" className="form-signup" method="post" action="#">
            <h2 className="form-signup-heading">{ props.header }</h2>
            <div>
            <LoginInput/>
            <PasswordInput/>
            </div>
            <button onClick={ (_event) => signUp(_event) } className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        </form>
        <div className="ref">
        <a href="/login"> Have account? </a>
        </div>
        </div>
        </div>
    )
    
}
