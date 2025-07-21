import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

export default function Product(props) {
    const categoryUrl = `/category/${props.category}`;
    const productUrl = `/product/${props.product.id}`;

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Inventory',
            href: '/inventory',
        },
        {
            title: 'Products',
            href: categoryUrl,
        },
        {
            title: 'Product',
            href: productUrl,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
        </AppLayout>
    );
}
