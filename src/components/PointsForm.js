import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'react-bootstrap';
import { XInput } from './XInput';
import { YInput } from './YInput';
import { RInput } from './RInput';
import { ptFromForm } from '../utils/fromForm';
import { sendAjax } from '../utils/sendAjax';
import { addPoint } from '../store/actions';
import store from '../store/store';
export const PointsForm = (props) => {
    
    const dispatch = useDispatch();
    const addPointMethod = () => "post";
    const readPointMethod = () => "get";
    const url = () => "http://localhost:8080/api/v1/points";
    const contentType = () => "application/json";
    
    useEffect(()=>{
        sendAjax("", readPointMethod(), url(), contentType(), (response) => handleResponse(JSON.parse(response)));
    },[])
    
    const handleResponse = (points) => {
            if (points){
                for (let i = 0; i<points.length; i++){
                    dispatch(addPoint(points[i]));
                }
            }
    }
    
    const hitPoint = (data, method, url, contentType) => {
        sendAjax(data, method, url, contentType, (response) => {
            let points = [];
            points.push(JSON.parse(response));
            handleResponse(points);
        })
    }
    
    const validateVal = (val) => {
        return val && !isNaN(val);
    }
    
    const validate = (formData) => {
        let x = formData.get('x');
        let y = formData.get('y');
        let r = formData.get('r');
        return validateVal(x) && validateVal(y) && validateVal(r) &&
            x >= -3 && x <= 5 && y > -5 && y < 5 && r >= 0 && r < 5;
            
    }
    
    const hit = (_event) => {
        _event.preventDefault();
        let form = document.getElementById("point-form");
        let formData = new FormData(form);
        if (validate(formData)){
            let data = JSON.stringify(ptFromForm(formData));
            hitPoint(data, addPointMethod(), url(), contentType());
            document.getElementById("err_msg").innerHTML = "";
        } else {
            document.getElementById("err_msg").innerHTML = "Incorrect point data";
        }
    }
    
        return (
            <form id="point-form" className="point-form" action="#">
                <h2 className="form-points-heading">Add Point</h2>
                <XInput/>
                <YInput/>
                <RInput/>
                <div id="err_msg"></div>
                <button onClick={ (_event)=>hit(_event) } className="btn btn-lg btn-primary btn-block point-submit" type="submit">Add new point</button>
            </form>
        )
    
}