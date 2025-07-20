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
            <div>
                {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                <div className="create">
                    <MyButton type="button" value="Create Category" route="category/create" classes="btn-primary"></MyButton>
                </div>
                <div className="categories">
                    <ItemList items={categories}></ItemList>
                </div>
            </div>
        </AppLayout>
    );
}
