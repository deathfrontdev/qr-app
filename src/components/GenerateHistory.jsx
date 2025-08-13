import { GENERATE_DATA } from '../constants';
import { QRCodeSVG } from 'qrcode.react';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    const handleNavigate = (text) => {
        if (text.startsWith('http://') || text.startsWith('https://')) {
            window.open(text, '_blank');
        } else {
            alert(`Содержимое QR: ${text}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pt-28 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-white text-3xl font-bold text-center mb-8">
                    Generate History
                </h1>

                {data.length === 0 ? (
                    <p className="text-center text-white text-lg">
                        No generated QR codes yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {data.map((text, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <QRCodeSVG value={text} size={150} />
                                <p className="mt-4 text-gray-700 break-all text-center">
                                    {text}
                                </p>
                                <button
                                    onClick={() => handleNavigate(text)}
                                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                                >
                                    Перейти
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
