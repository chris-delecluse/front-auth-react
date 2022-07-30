const registerStyle = {
    formChildrenDiv: {
        color: '#FFF',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gap: '40px'
    },
    registerFormApiMainError : {
        position: 'absolute',
        top: '40px',
        left: '165px',
        fontSize: '24px',
        color: 'red',
    },
    grid: {
        firstname: {
            gridColumn: '1',
        },
        lastname: {
            gridColumn: '2',
        },
        email: {
            display: 'flex',
            justifyContent: 'center',
            alignItems : 'center',
            gridColumn: '1 / span 2',
            gridRow : '2 / span 2',
        },
        password: {
            gridColumn: '1',
            gridRowStart: '4',
        },
        confirmPassword: {
            gridColumn: '2',
            gridRowStart: '4',
        }
    }
}

export default registerStyle;