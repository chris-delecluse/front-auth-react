import background from "../../assets/images/login-bg.jpg";

const layoutCss = {
    container: {
        fontFamily: 'roboto',
        backgroundImage: `url(${background})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
    },
    header: {
        display: 'flex',
        justifyContent: 'center'
    },
    nav: {
        padding: '5px 0 8px 0',
        width: '300px',
        display: 'flex',
        justifyContent: 'space-around',
        backdropFilter: 'blur(500px)',
        borderBottomRightRadius: '7px',
        borderBottomLeftRadius: '7px'
    },
}

export default layoutCss