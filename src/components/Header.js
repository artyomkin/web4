import React from 'react';

export const Header = (props) => {
    
    return (
        <header>
        <div className="header-container">
        <div className="student-info">
        <div className="name">
            <span>{props.second_name}</span>
            <span>{props.first_name}</span>
            <span>{props.patronymic}</span>
        </div>
            <span>{props.group}</span>
            <span>{props.option}</span>
        </div>
        </div>
        </header>
    )
    
}