import React from 'react';
import './StudentsListItem.css';
import {Link} from 'react-router-dom'

const StudentsListItem = ({listItem}) => {
    const {name, photo, activity, rating} = listItem;
    return (
        <li className="list-item">
            <Link to={`/${listItem.id}`} className="list-link"> 
                <div className="list-name">{name}</div>
                <img className="list-img" src={photo} alt="Биг Босс"></img>
            </Link>
            <div className="list-activity">Activity: <span>{activity}</span></div>
            <div className="list-rating">Rating: <span>{rating}</span></div>
        </li>
    );
};

export default StudentsListItem;