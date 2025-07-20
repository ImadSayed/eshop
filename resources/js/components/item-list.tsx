export default function ItemList(props) {
    const items = props.items;
    let keys = 1;
    const classes = '';

    props.items.map((item, index) => {
        items['index'] = {
            id: item.id ?? keys,
            name: item.name ?? '',
        };
        keys++;
    });

    return (
        <ul className={classes}>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}
