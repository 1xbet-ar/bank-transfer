import React from "react";
import "./Modal.css";
import qrImage from "../assets/qr.png";

const QRModal = ({ onClose }) => {
  const address = "TKxx8Q2ND3wb2ivqpBRbo4Drj7Nre7KYHV";

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert("تم نسخ العنوان ✔");
  };

  return (
    <div className="modal-bg">
      <div className="modal-box" dir="rtl">

        <button className="modal-close" onClick={onClose}>×</button>

        <h3 className="modal-title">عنوان الإيداع المبلغ المطلوب 7000 USDT</h3>

        <img src={qrImage} className="qr-img" alt="QR Code" />

        <div className="copy-box">
          <input type="text" value={address} readOnly dir="ltr" />
          <button className="copy-btn" onClick={copyAddress}>
            نسخ
          </button>
        </div>

      </div>
    </div>
  );
};

export default QRModal;
