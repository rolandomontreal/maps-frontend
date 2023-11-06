import { useEffect } from "react";
import { createPortal } from "react-dom";

interface BaseModalProps {
  showModal: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const BaseModal = ({ showModal, onClose, children }: BaseModalProps) => {
  // Not working atm, maybe look at again
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  const closeModal = () => {
    onClose();
  }

  return createPortal(
    <div>
      <div 
        className="fixed inset-0 bg-gray-300 opacity-20"
        onClick={closeModal}
      >
      </div>
      <div className="fixed inset-40 p-10 bg-slate-700">
        <p>Base modal</p>
        {children}
      </div>
    </div>,
    document.getElementById('modal-container')!,
  );
}

export default BaseModal;