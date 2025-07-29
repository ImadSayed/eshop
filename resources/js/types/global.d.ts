import type { route as routeFn } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    created_at: Date;
    level: string;
}

declare global {
    const route: typeof routeFn;
}

declare module '@inertiajs/core' {
    interface PageProps {
        isAdmin?: boolean;
        adminUsers?: User[];
        defaultUsers?: User[];
    }
}

export interface Category {
    id: number;
    name: string;
    image_ids: [];
    description: Text;
    active: boolean;
}

export interface Product {
    id: number;
    category: number;
    name: string;
    image_ids: [];
    description: Text;
    price: Float16Array;
    stock: BigInteger;
    sku: string;
    active: boolean;
}
