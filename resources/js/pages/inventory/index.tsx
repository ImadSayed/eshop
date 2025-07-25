import ItemList from '@/components/item-list';
import MyButton from '@/components/my-button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Inventory',
        href: '/inventory',
    },
];

export default function Inventory(props) {
    const categories = props.categories;
    const products = props.products;
    const images = props.images;

    console.log(categories);
    console.log(images);
    console.log(products);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Inventory" />
            <div className="categories-wrapper">
                <div className="create">
                    <MyButton type="button" value="Add Category" route="category/create" classes="btn-primary"></MyButton>
                </div>
                <div className="categories">
                    <ItemList items={categories} route="category" style="btns"></ItemList>
                </div>
            </div>
        </AppLayout>
    );
}
