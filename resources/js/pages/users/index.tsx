import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import UserList from '@/components/ui/user-list';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

import '../../../css/usersIndex.css';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

// interface Users {
//     type: 'default' | 'admin';
//     count: number;
// }

// function users(userType: Users) {
//     const { type, count } = userType;
//     const display = type + (count === 1 ? ' User' : ' Users');
// }

// function han

export default function Users(props) {
    const defaultUsers = props.defaultUsers ?? [];
    const adminUsers = props.adminUsers ?? [];
    const [activeUsers, setActiveUsers] = useState('default');
    const numberOfActiveUsers = activeUsers == 'default' ? defaultUsers.length : adminUsers.length;
    const userString = numberOfActiveUsers == 1 ? 'user' : 'users';
    const typeOfUsers = activeUsers == 'default' ? 'Default Users' : 'Admin Users';
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="users-data grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="num-users relative rounded-xl border border-sidebar-border/70">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <p>
                            {numberOfActiveUsers} {userString} found
                        </p>
                    </div>
                    <div className="type-users relative rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <p>{typeOfUsers}</p>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="users relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="tabs">
                        <button id="defaultUsersTab" className="tab" onClick={() => setActiveUsers('default')}>
                            Default Users
                        </button>
                        <button id="adminUsersTab" className="tab" onClick={() => setActiveUsers('admin')}>
                            Admin Users
                        </button>
                    </div>
                    <UserList id="defaultUser" users={defaultUsers} classes={activeUsers == 'default' ? 'active' : ''}></UserList>
                    <UserList id="adminUser" users={adminUsers} classes={activeUsers == 'admin' ? 'active' : ''}></UserList>
                </div>
            </div>
        </AppLayout>
    );
}
