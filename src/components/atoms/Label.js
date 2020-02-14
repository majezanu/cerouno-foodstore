import React from 'react';

const Label = (props) => {
    return <div className={props.style ? props.style : ''}>{props.children}</div>
}

export default Label