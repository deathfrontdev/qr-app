import { QrCodeGenerator } from "./components/QrCodeGenerator";
import { QrCodeScanner } from "./components/QrCodeScanner";
import { Navigation } from "./components/Navigation";
import { Routes, Route} from "react-router-dom";
import { GenerateHistory } from "./components/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory";
const Layout = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/" element={<QrCodeGenerator/>} />
                <Route path="/scan" element={<QrCodeScanner/>} />
                <Route path="/generateHistory" element={<GenerateHistory/>} />
                <Route path="/scanHistory" element={<ScanHistory/>} />
            </Routes>
        </div>
    );
};

export {Layout};