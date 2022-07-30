import useHovering from "../hooks/useHovering";
import useToggle from "../hooks/useToggle";

const Button = (props) => {
    const [isHovering, {
        setTrue,
        setFalse,
    }] = useHovering(false);

    const [isClicked, {
        setToggle
    }] = useToggle(false)

    const buttonStyle: Object = {
        cursor: 'pointer',
        borderStyle: 'border-box',
        fontFamily: props.customeStyle.fontFamily,
        fontSize: props.customeStyle.fontSize,
        textTransform: props.customeStyle.textTransform,
        padding: props.customeStyle.padding,
        margin: props.customeStyle.margin,
        borderRadius: props.customeStyle.borderRadius,
        border: isHovering ? props.customeStyle.border.hovering : props.customeStyle.border.primary,
        backgroundColor: isHovering ? props.customeStyle.backgroundColor.hovering : props.customeStyle.backgroundColor.primary,
        color: isHovering ? props.customeStyle.color.hovering : props.customeStyle.color.primary,
        transition: isHovering ? '.7s' : '.7s',
        transform: isClicked ? 'scale(.75)' : '',
        gridColumnStart: props.gridColumnStart,
        gridColumnEnd: props.gridColumnEnd,
        gridRowStart: props.gridRowStart,
    }

    return (
        <button
            className={props.className}
            style={buttonStyle}
            type={props.type}
            onMouseEnter={setTrue}
            onMouseLeave={setFalse}
            onClick={setToggle}
        >
            {props.value}
        </button>
    )
};

export default Button;