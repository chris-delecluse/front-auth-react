import React from 'react';

const SpanError = (props) => {
    const spanStyle = {
        position: 'absolute',
        top: props.customeStyle.top,
        left: props.customeStyle.left,
        color: 'red',
    }

    return (
        <span style={spanStyle}>{props.value}</span>
    );
};

export default SpanError;