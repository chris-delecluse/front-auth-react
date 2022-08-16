const notFoundCss = {
    article: {
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        color: "white",
        fontSize: '40px',
    },
    container: {
        padding: '45px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(50px)',
        borderRadius: '10px'

    },
    title: {
        fontSize: '200px'
    },
    text: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '20px'
    },
    button: {
        fontSize: '20px',
        textTransform: 'uppercase',
        margin: '25px 0 0 0',
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

export default notFoundCss;