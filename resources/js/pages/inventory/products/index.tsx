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
    {
        title: 'Products',
        href: '/products',
    },
];

export default function Products(props) {
    const category = props.category;
    const products = props.products;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="products-wrapper">
                <div className="create">
                    <MyButton type="button" value="Add Product" route="category/create" classes="btn-primary"></MyButton>
                </div>
                <h2>{category.name}</h2>
                <div className="products-list-wrapper">
                    <ItemList items={products} route="product" style="btns"></ItemList>
                </div>
            </div>
        </AppLayout>
    );
}
