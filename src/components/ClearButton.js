// button to clear all local storage
import React from 'react';

const ClearButton = ({clearFunction}) => {
    return <button style={{
        width: '100px',
        height: '50px',
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: 'red',
        border: '5px solid blue',
        borderRadius: '15px',
    }} 
    onClick={clearFunction}>מחק הכל</button>
};

export default ClearButton;