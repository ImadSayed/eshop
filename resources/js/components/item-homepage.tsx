import ItemList from '@/components/item-list';

export default function ItemHomePage(props) {
    const title = props.title;
    const listItems = props.items ?? [];
    const route = props.route;

    console.log(typeof listItems);
    console.log(listItems);

    return (
        <>
            <h2>{title}</h2>
            <div className="list-wrapper">
                <ItemList items={listItems} route={route} style="btns"></ItemList>
            </div>
        </>
    );
}
