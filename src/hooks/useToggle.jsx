import React from "react";

const useToggle = (initialisation) => {
    const [state, setState] = React.useState(initialisation)

    if (state) {
        setTimeout(() => {
            setState(false)
        }, 65)
    }

    const handleEffect = () => setState(!state)

    return [
        state, {
            setToggle: handleEffect
        }
    ]
}

export default useToggle;