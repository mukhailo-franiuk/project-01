export default function ShoppingCart() {
    const items = [
        { id: 1, name: 'Футболка', price: 799, qty: 1, image: 'https://via.placeholder.com/80' },
        { id: 2, name: 'Кросівки', price: 2499, qty: 2, image: 'https://via.placeholder.com/80' },
    ];

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="min-h-screen bg-gray-500 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-green-500 rounded-2xl shadow-xl p-6">
                <h1 className="text-2xl font-bold mb-6">🛒 Кошик</h1>

                <div className="space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border rounded-2xl p-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-xl object-cover"
                                />
                                <div>
                                    <h2 className="font-semibold text-lg">{item.name}</h2>
                                    <p className="text-gray-500">{item.price} грн</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 bg-gray-100 rounded-lg">
                                    {item.qty} шт.
                                </span>
                                <span className="font-bold">
                                    {item.price * item.qty} грн
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 border-t pt-4 flex items-center justify-between">
                    <span className="text-xl font-semibold">Разом:</span>
                    <span className="text-2xl font-bold">{total} грн</span>
                </div>

                <button className="w-full mt-6 bg-black text-white py-3 rounded-2xl hover:opacity-90 transition">
                    Оформити замовлення
                </button>
            </div>
        </div>
    );
}
