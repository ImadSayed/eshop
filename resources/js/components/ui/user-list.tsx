
import MyButton from '@/components/my-button';
export default function UserList(props) {
    const users = props.users;
    const classes = `tab-window ${props.classes}`;
    if (users.length === 0) {
        return (
            <div id="no-users" className={classes}>
                <p>No users found.</p>
            </div>
        );
    }
    return (
        <div id={props.id} className={classes}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email address</th>
                        <th>User Since</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.created_at}</td>
                            <td className="btn-cell"><MyButton value="Edit" route="users/edit" id={user.id}></MyButton></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
