import ImageCarousel from '@/components/image-carousel';
import MyButton from '@/components/my-button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

export default function Product(props) {
    const categoryUrl = `/category/${props.category}`;
    const productUrl = `/product/${props.product.id}`;

    console.log('In show');
    console.dir(props.product.images);

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
            <Head title="Product" />
            <div className="product-wrapper">
                <div className="edit-details">
                    <MyButton type="button" value="Edit Product" route="product/edit" id={props.product.id} classes="btn-primary"></MyButton>
                    <MyButton type="button" value="Delete Product" route="product/destroy" id={props.product.id} classes="btn-danger"></MyButton>
                </div>
                <div className="product-details">
                    <ImageCarousel images={props.product.images}></ImageCarousel>
                </div>
            </div>
        </AppLayout>
    );
}
