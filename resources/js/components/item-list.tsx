interface item {
    id: BigInteger;
    name: string;
    image_path: string;
}

export default function ItemList(props) {
    const items = props.items;
    let classes = 'list-items ';
    classes += props.style == 'btns' ? 'list-btns' : '';

    if (items.length === 0) {
        return <p>No products found under this category</p>;
    }

    return (
        <ul className={classes}>
            {items.map((item) => (
                <li key={item.id}>
                    <a href={`/${props.route}/${item.id}`}>
                        <img src={item.image_path} alt={'product ' + item.name} />
                        <p>{item.name}</p>
                    </a>
                </li>
            ))}
        </ul>
    );
}
