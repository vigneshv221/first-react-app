import React from "react";

const Alert = ({ alert }) => {
    return alert !== null && <div className='width-auto alert'>{alert}</div>;
};

export default Alert;
