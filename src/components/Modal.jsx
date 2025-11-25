import React from "react";
import "./Modal.css";
import tetherLogo from "../assets/tether.png";

const Modal = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-bg">
      <div className="modal-box" dir="rtl">

        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <img src={tetherLogo} className="modal-logo" alt="USDT" />
          <h3>Tether (USDT-TRC20)</h3>
        </div>

        <p className="modal-text">
          <span className="red">فقط أرسل Tether (USDT)</span>  
          عبر شبكة <span className="blue">TRC20</span>.
        </p>

        <p className="modal-warning">
          لا تستخدم ERC20, BEP20, BEP2 أو شبكات أخرى — قد تفقد أموالك.
        </p>

        <button className="modal-btn" onClick={onConfirm}>
          تأكيد
        </button>

      </div>
    </div>
  );
};

export default Modal;
