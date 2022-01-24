import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { addPoint } from '../store/actions';
import { renderGraph, drawDot } from '../resources/static/js/drawGraph';
import { sendAjax } from '../utils/sendAjax';
import store from '../store/store';
import * as actions from '../store/actions';

export const Graph = (props) => {
    const dispatch = useDispatch();
    const size = () => props.size;
    const shift = () => props.shift;
    const r = () => store.getState().radius;
    const canvas = () => document.getElementById('graph');
    const ctx = () => canvas().getContext('2d');
    
    const method = () => "post";
    const url = () => "http://localhost:8080/api/v1/points";
    const contentType = () => "application/json";
    
    useEffect(()=>{
        updateCanvas();
        store.subscribe(() => updateCanvas());
    },[])
    
    const updateCanvas = () => {
        renderGraph(size(), shift(), canvas(), ctx(), r(), store.getState().points);
    }
    
    const handleResponse = (points) => {
        if (points){
            for (let i = 0; i<points.length; i++){
                dispatch(actions.addPoint(points[i]));
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
    
    
    const hit = (_event) => {
        let coords = coordsFromClick(_event, canvas(), size(), shift());
        let point = { x: coords.x, y:coords.y, r:r() };
        hitPoint(JSON.stringify(point), method(), url(), contentType());
    }
    
    return <canvas id="graph" width={props.size} height={props.size} onClick={(_event) => hit(_event)}/>
}

function coordsFromClick(_event, canvas, size, shift){
    let mouseX = _event.clientX;
    let mouseY = _event.clientY;
    let graphX = canvas.getBoundingClientRect().left;
    let graphY = canvas.getBoundingClientRect().top;
    let x = mouseX - graphX - size/2;
    let y = size/2 - mouseY + graphY;
    let frame = size - shift*2;
    x = x/frame*5*2;
    y = y/frame*5*2;
    return { x:x, y:y };
}
