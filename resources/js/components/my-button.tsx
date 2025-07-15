export default function MyButton(props) {
    const type = props.type ?? 'submit';
    const value = props.value ?? '';
    const route = props.route ?? '';
    const id = props.id ?? 0;
    const classes = 'btn ' + props.class;

    function handleClick() {
        window.location.href = route + '/' + id;
    }

    return (
        <button className={classes} type={type} onClick={() => handleClick()}>
            {value}
        </button>
    );
}
