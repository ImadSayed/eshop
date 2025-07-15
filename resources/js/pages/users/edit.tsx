import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
    {
        title: 'Edit',
        href: '/users/edit',
    },
];

export default function EditUsers(props) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="edit-user">
                <form action="/users/update" method="post">
                    <input type="hidden" name="_method" value="PUT" />
                    <input type="hidden" name="_token" value={csrfToken} />
                    <input type="hidden" name="id" value={props.id} />
                    <div className="edit-wrapper name">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={props.name} readOnly disabled />
                    </div>
                    <div className="edit-wrapper email">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" value={props.email} readOnly disabled />
                    </div>
                    <div className="edit-wrapper level">
                        <label htmlFor="level">Level:</label>
                        <select name="level" id="level">
                            <option value="1" selected={props.level === 1}>
                                Default
                            </option>
                            <option value="2" selected={props.level === 2}>
                                Admin
                            </option>
                        </select>
                    </div>
                    <button type="submit" className="btn" disabled={!props.isAdmin}>
                        Update
                    </button>
                    <a href="/users" className="btn btn-info">
                        Cancel
                    </a>
                </form>
            </div>
        </AppLayout>
    );
}
