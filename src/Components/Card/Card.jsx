import React from 'react';
import Button from '../Button/Button';
import classes from './Card.module.css';

const Card = props => {
    return (
        <div className={classes.card}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.description}>{props.description}</div>
            <Button onClick={props.onClick}>Delete</Button>
        </div>
    )
}

export default Card;