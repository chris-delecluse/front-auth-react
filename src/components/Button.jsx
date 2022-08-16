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
        fontFamily: props.customStyle.fontFamily,
        fontSize: props.customStyle.fontSize,
        textTransform: props.customStyle.textTransform,
        padding: props.customStyle.padding,
        margin: props.customStyle.margin,
        borderRadius: props.customStyle.borderRadius,
        border: isHovering ? props.customStyle.border.hovering : props.customStyle.border.primary,
        backgroundColor: isHovering ? props.customStyle.backgroundColor.hovering : props.customStyle.backgroundColor.primary,
        color: isHovering ? props.customStyle.color.hovering : props.customStyle.color.primary,
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