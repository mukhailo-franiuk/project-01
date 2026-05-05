import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "../../../../store/usersSlice/usersSlice";
const Dashboard = () => {
    const { data = [] } = useGetUsersQuery();
    const stats = [
        { title: 'Користувачі', value: data.length - 1 },
        { title: 'Замовлення', value: '0' },
        { title: 'Каса', value: '$ 0' },
        { title: 'Відвідуваність', value: '0' },
    ];
    return (
        <>
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Основна інформація</h1>
                <button
                    className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90"
                    onClick={() => window.location.href = `/`}
                >
                    Вийти
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
                            {data?.map((user) => (
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
        </>
    )
}
export default Dashboard;