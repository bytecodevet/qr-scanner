import { useCallback, useEffect } from "react";
import "./App.css";

export default function App() {
  const webApp = window.Telegram.WebApp;

  const showQrScanPopup = useCallback(() => {
    webApp.showScanQrPopup({ text: "Scan qr code" }, (data) => {
      webApp.sendData(data);
      webApp.closeScanQrPopup();
      webApp.close();
    });
  }, [webApp]);

  useEffect(() => {
    showQrScanPopup();
  }, [showQrScanPopup]);

  return (
    <div className="container">
      <button className="button" onClick={showQrScanPopup}>
        QR Scanner
      </button>
    </div>
  );
}
