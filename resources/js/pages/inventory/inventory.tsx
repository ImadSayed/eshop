import ItemHomePage from '@/components/item-homepage';
// import ItemList from '@/components/item-list';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesContext } from './index';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Inventory',
        href: '/inventory',
    },
];

export default function Inventory() {
    const categories = useContext(CategoriesContext);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Inventory" />
            <div className="categories-wrapper">
                <div className="create">
                    {/* <MyButton type="button" value="Add Category" route="category/create" classes="btn-primary"></MyButton> */}
                    <Link to="/category/create">Add Category</Link>
                </div>
                <div className="categories">
                    <ItemHomePage title="Categories" items={categories} route="category"></ItemHomePage>
                    {/* <ItemList items={categories} route="category" style="btns"></ItemList> */}
                </div>
            </div>
        </AppLayout>
    );
}
