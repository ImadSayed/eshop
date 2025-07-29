import ItemHomePage from '@/components/item-homepage';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Category, Product } from '@/types/global';
import { Head } from '@inertiajs/react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CategoriesContext, ProductsContext } from '../index';

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

function GetProductList(categoryId: number) {
    const products = useContext(ProductsContext);
    return products.filter(
        (product: Product) => {
            return product.category === categoryId;
        },
        [categoryId],
    );
}

function GetCategoryName(categoryId: number) {
    const categories = useContext(CategoriesContext);
    const category = categories.filter(
        (category: Category) => {
            return category.id === categoryId;
        },
        [categoryId],
    );
    return category[0]['name'];
}

export default function Products() {
    const params = useParams();
    const categoryId = parseInt(params.categoryId ?? '0');
    const productList = GetProductList(categoryId);
    const categoryName = GetCategoryName(categoryId);

    console.log('Products');
    console.log('Products');
    console.log('Products');

    console.log('Products');
    console.log('Products');
    console.log('Products');
    console.log(categoryName);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="products-wrapper">
                <div className="create">
                    <Link to="/product/create">Add Product</Link>
                    {/* <MyButton type="button" value="Add Product" route="category/create" classes="btn-primary"></MyButton> */}
                </div>
                <ItemHomePage title={categoryName} items={productList} route="product"></ItemHomePage>
            </div>
        </AppLayout>
    );
}
