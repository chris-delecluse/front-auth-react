import React from 'react'

const useHovering = (initialState = false) => {
    const [state, setState] = React.useState(initialState);

    const handleTrue = () => setState(true);
    const handleFalse = () => setState(false);

    return [
        state,
        {
            setTrue: handleTrue,
            setFalse: handleFalse,
        },
    ];
};

export default useHovering;