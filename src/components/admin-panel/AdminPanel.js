export default function AdminPanel() {
    const stats = [
        { title: 'Users', value: '1,240' },
        { title: 'Orders', value: '320' },
        { title: 'Revenue', value: '$12,400' },
        { title: 'Visits', value: '8,930' },
    ];

    const users = [
        { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Pending' },
        { name: 'Alex Brown', email: 'alex@example.com', role: 'Manager', status: 'Active' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="hidden md:flex w-64 bg-gray-900 text-white flex-col">
                <div className="p-6 text-2xl font-bold border-b border-gray-700">Admin</div>
                <nav className="flex-1 p-4 space-y-2">
                    {['Dashboard', 'Users', 'Orders', 'Settings'].map((item) => (
                        <button
                            key={item}
                            className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 transition"
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <button className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90">
                        Logout
                    </button>
                </header>

                {/* Stats */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((card) => (
                        <div key={card.title} className="bg-white rounded-2xl shadow p-6">
                            <p className="text-gray-500">{card.title}</p>
                            <h2 className="text-2xl font-bold mt-2">{card.value}</h2>
                        </div>
                    ))}
                </section>

                {/* Users table */}
                <section className="bg-white rounded-2xl shadow overflow-hidden">
                    <div className="p-4 border-b">
                        <h2 className="text-xl font-semibold">Recent Users</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Email</th>
                                    <th className="p-4">Role</th>
                                    <th className="p-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.email} className="border-t">
                                        <td className="p-4">{user.name}</td>
                                        <td className="p-4">{user.email}</td>
                                        <td className="p-4">{user.role}</td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 rounded-full text-sm bg-gray-100">
                                                {user.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
