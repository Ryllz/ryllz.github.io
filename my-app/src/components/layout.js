import React from 'react';

export const Grid = ({ children, className = '', style = {} }) => (
  <div className={`grid-row ${className}`.trim()} style={style}>{children}</div>
);

export const Cell = ({ children, col, className = '', style = {}, align, hidePhone, id }) => {
  const classes = [
    col ? `col-${col}` : '',
    align === 'middle' ? 'align-middle' : '',
    hidePhone ? 'hide-phone' : '',
    className,
  ].filter(Boolean).join(' ');
  return <div className={classes} style={style} id={id}>{children}</div>;
};

export const Card = ({ children, style = {}, className = '', id }) => (
  <div className={`card ${className}`.trim()} style={style} id={id}>{children}</div>
);

export const CardTitle = ({ children, style = {}, className = '' }) => (
  <div className={`card-title ${className}`.trim()} style={style}>{children}</div>
);

export const CardText = ({ children, style = {}, className = '', id }) => (
  <div className={`card-text ${className}`.trim()} style={style} id={id}>{children}</div>
);

export const CardActions = ({ children, style = {} }) => (
  <div className="card-actions" style={style}>{children}</div>
);

export const Button = ({ children, onClick, className = '' }) => (
  <button className={`btn btn-primary ${className}`.trim()} onClick={onClick}>{children}</button>
);

export const Chip = ({ children }) => (
  <span className="chip">{children}</span>
);
