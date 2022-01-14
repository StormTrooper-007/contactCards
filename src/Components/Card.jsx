import React from 'react';
import ButtonCard from './ButtonCard';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import '../Styles/Card.css';

function firstLetter(str){
    let firstArr = str.split('');
    return firstArr[0];
}

function Card({card}) {
    return (
        <>
            <div className="card-container">
                <div className="circle"><h1>{firstLetter(card.name)}</h1></div>
                <div className="card-content">
                    <h3>{card.name}</h3>
                    <Typography variant="body2" color="text.secondary">@{card.email}</Typography>
                    <Link to="*">http://{card.website}</Link>
                    <Link to={`/details/${card.id}`} className="link"><ButtonCard/></Link>
                </div>
            </div>
        </>
    );
}

export default Card;