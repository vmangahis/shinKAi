const Button = ({label, clickfunction}) => {
    return (
        <>
            <button onClick = {() => clickfunction()}>{label}</button>
        </>
    )

}
export default Button;
