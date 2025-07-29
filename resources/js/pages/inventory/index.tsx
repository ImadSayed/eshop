// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from './inventory';
import CreateCategory from './products/create-category';
import CreateProduct from './products/create-product';
import Product from './products/product';
import Products from './products/products';

// const router = createBrowserRouter([
//     {
//         path: '/inventory',
//         element: <Inventory categories={categories} />,
//         errorElement: <div>404 Not Found: Inventory</div>,
//     },
//     {
//         path: '/products',
//         element: <Products />,
//         errorElement: <div>404 Not Found: Products</div>,
//     },
//     {
//         path: '/category/create',
//         element: <CreateCategory />,
//         errorElement: <div>404 Not Found: CreateCategory</div>,
//     },
//     {
//         path: '/product/:id',
//         element: <Product />,
//         errorElement: <div>404 Not Found: Product</div>,
//     },
// ]);

// const categories = (props) => {
//     return props.categories;
// };

export const CategoriesContext = createContext([]);
export const ProductsContext = createContext([]);

export default function InventoryIndex({ categories, products }) {
    // const categories = props.categories;
    // const rootElement = document.getElementById('root');
    // if (rootElement) {
    //     const root = createRoot(rootElement);
    //     root.render(
    //         <React.StrictMode>
    //             <RouterProvider router={router}>
    //                 {/* <CategoryContext.Provider value={categories}> */}
    //                 {/* <Inventory categories={categories}></Inventory> */}
    //                 {/* </CategoryContext.Provider> */}
    //             </RouterProvider>
    //         </React.StrictMode>,
    //     );
    // }
    return (
        <CategoriesContext.Provider value={categories}>
            <ProductsContext.Provider value={products}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/category/:categoryId" element={<Products />} />
                        <Route path="/category/create" element={<CreateCategory />} />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="/product/create" element={<CreateProduct />} />
                    </Routes>
                </BrowserRouter>
            </ProductsContext.Provider>
        </CategoriesContext.Provider>
    );
}

// export default function Index(props) {
//     const categories = props.categories;
//     const products = props.products;
//     // const images = props.images;

//     console.log(categories);
//     // console.log(images);
//     console.log(products);
//     return (
//         // <React.StrictMode>
//         //     <RouterProvider router={router}>
//         //         <CategoryContext.Provider value={categories}>
//         <Inventory categories={categories}></Inventory>
//         //         </CategoryContext.Provider>
//         //     </RouterProvider>
//         // </React.StrictMode>
//     );
// }
