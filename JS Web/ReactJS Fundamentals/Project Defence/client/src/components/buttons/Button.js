import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({className, text, redirectRoute}) => <Link to={redirectRoute} className={className}>{text}</Link>;

export default Button;