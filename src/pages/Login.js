import React from 'react';
import { LoginInput } from '../components/LoginInput';
import { PasswordInput } from '../components/PasswordInput';
import { Header } from '../components/Header';
import { usrFromForm } from '../utils/fromForm';
import { sendAjax } from '../utils/sendAjax';
import { useDispatch } from 'react-redux';
import { addUserId } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import store from '../store/store';
import '../resources/static/css/login.css';

export const Login = (props) => {
    const method = () => "post";
    const url = () => "http://localhost:8080/auth/login";
    const contentType = () => "application/json";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleResponse = () => {
        navigate('/');
    }
    
    const login = (_event) => {
        _event.preventDefault();
        
        let data = JSON.stringify(usrFromForm(new FormData(document.getElementById("form-signin"))));
        sendAjax(data, method(), url(), contentType(), () => handleResponse());
    }

    return (
        <div>
        <Header first_name="Артем" second_name="Артемкин" patronymic="Владимирович" group="P3211" option="970000"/>
        <div className="container">
        <form id="form-signin" className="form-signin" method="post" action="#">
            <h2 className="form-signin-heading">{ props.header }</h2>
            <div>
            <LoginInput/>
            <PasswordInput/>
            </div>
            <button onClick={(_event)=>login(_event)} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        <div className="ref">
        <a href="/registration"> Add new account </a>
        </div>
        </div>
        </div>
    )
    
}
