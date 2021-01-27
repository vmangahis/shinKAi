const Button = ({label, clickfunction, id}) => {
    return (
        <>
            <button onClick = {() => clickfunction(id)}>{label}</button>
        </>
    )

}
export default Button;
