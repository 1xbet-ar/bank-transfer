import React, { useState } from "react";
import "./App.css";

import TetherOnTronCard from "./components/TetherOnTronCard";
import Modal from "./components/Modal";
import QRModal from "./components/QRModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [qrOpen, setQROpen] = useState(false);

  return (
    <div className="page">

      {/* الهيدر */}
      <header className="page-header">
        التعبئة المطلوبة للحصول على وكالة بنكية
      </header>

      {/* البطاقة داخل المستطيل */}
      <div className="card-wrapper">
        <div className="card-background">
          <TetherOnTronCard onClick={() => setModalOpen(true)} />
        </div>
      </div>

      {/* نافذة التحذير */}
      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          onConfirm={() => {
            setModalOpen(false);
            setQROpen(true);
          }}
        />
      )}

      {/* نافذة QR */}
      {qrOpen && (
        <QRModal onClose={() => setQROpen(false)} />
      )}

    </div>
  );
}

export default App;
