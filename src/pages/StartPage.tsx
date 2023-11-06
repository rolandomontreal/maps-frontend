import { useState } from "react";
import BaseModal from "../components/BaseModal";
import LoginModal from "../components/auth/LoginModal";

interface StartPageProps {
  signin: () => void,
}

const StartPage = ({ signin }: StartPageProps) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div style={{
        background: 'linear-gradient(119deg, #001B50 26.27%, rgba(10, 57, 148, 0.77) 89.04%)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{
          padding: '3rem 4rem',
        }}
      >
        <button onClick={() => setShowLoginModal(true)} style={{ color: 'white' }}>
          Login
        </button>
      </div>
      <LoginModal
        showModal={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}

export default StartPage;