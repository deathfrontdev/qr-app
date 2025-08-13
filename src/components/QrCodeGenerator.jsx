import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import '../index.css';
import { GENERATE_DATA } from '../constants';
export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onSubmitHandler = (event) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA,JSON.stringify([...prevData,value]));
        event.preventDefault();
        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    console.log("result: " + result)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    QR Code Generator
                </h1>

                <form 
                    onSubmit={onSubmitHandler} 
                    className="flex flex-col items-center gap-4"
                >
                    {result !== '' && (
                        <div className="p-4 bg-gray-100 rounded-xl shadow-inner">
                            <QRCodeSVG value={result} size={180} />
                        </div>
                    )}

                    <input 
                        type="text" 
                        value={value} 
                        onChange={onChangeHandler}
                        placeholder="Enter text for QR code..."
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    />

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
                    >
                        Generate
                    </button>
                </form>
            </div>
        </div>
    );
};
