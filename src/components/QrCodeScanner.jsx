 import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import {SCAN_DATA} from '../constants';
export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const ScanHandler = (result) => {
        if (result && result.length > 0) {
            setScanned(result[0].rawValue);
        }
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(SCAN_DATA,JSON.stringify([...prevData,result[0].rawValue]));
    };
    console.log(SCAN_DATA);
    const handleOpenLink = () => {
        if (scanned) {
            window.open(scanned, "_blank");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    QR Code Scanner
                </h1>

                <div className="flex justify-center mb-6">
                    <Scanner
                        onScan={ScanHandler}
                        components={{
                            audio: false,
                            finder: false
                        }}
                        styles={{
                            container: {
                                width: 250,
                                height: 250
                            }
                        }}
                    />
                </div>

                {scanned ? (
                    <div className="flex flex-col gap-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-inner text-gray-700 break-words">
                            Считанный QR: <span className="font-semibold">{scanned}</span>
                        </div>
                        <button
                            onClick={handleOpenLink}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
                        >
                            Перейти
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-500 italic">Наведите камеру на QR-код...</p>
                )}
            </div>
        </div>
    );
};
