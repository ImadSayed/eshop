// interface Item {
//     id: number;
//     name: string;
// }

export default function ProductCard(props) {
    const item = props.item ?? {};
    const image_url = item.first_image ?? ''; //'default.jpg'; //item.image_path ?? 'default.jpg';
    const item_name = item.name ?? 'Unknown product name';

    return (
        <>
            <img src={image_url} alt={item_name} />
            <p>{item_name}</p>
        </>
    );
}
