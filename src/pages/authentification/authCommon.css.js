const authCommonCss = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    form: {
        padding: '100px 70px 40px 70px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '1px 1px 3px #FFF',
        borderRadius: '7px',
        backdropFilter: 'blur(50px)'
    },
    title: {
        fontFamily: 'roboto',
        margin: '0 0 -25px 0',
        padding: '1px 30px',
        backgroundColor: 'inherit',
        fontSize: '35px',
        color: '#FFF',
        boxShadow: '1px 1px 3px #FFF',
        borderRadius: '8px',
        zIndex: 2,
        backdropFilter: 'blur(50px)'
    },
    p: {
        marginTop: '60px',
        color: 'lightgray',
        textAlign: 'center'
    },
    span: {
        color: '#487de8'
    },
    button: {
        fontSize: '20px',
        textTransform: 'uppercase',
        padding: '10px 30px',
        borderRadius: '10px',
        // &:hover
        backgroundColor: {
            primary: '#2f6ce5',
            hovering: '#074bc5'
        },
        color: {
            primary: '#FFF',
            hovering: '#FFF'
        },
        border: {
            primary: '1px solid #2f6ce5',
            hovering: '1px solid transparent'
        }
    }
}

export default authCommonCss;