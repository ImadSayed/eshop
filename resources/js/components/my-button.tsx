export default function MyButton(props) {
    const type = props.type ?? 'submit';
    const value = props.value ?? '';
    const route = props.route ?? '';
    const id = props.id ?? 0;
    const classes = 'btn ' + props.class;

    function handleClick() {
        if (id > 0) {
            window.location.href = route + '/' + id;
        } else {
            window.location.href = route;
        }
    }

    return (
        <button className={classes} type={type} onClick={() => handleClick()}>
            {value}
        </button>
    );
}
