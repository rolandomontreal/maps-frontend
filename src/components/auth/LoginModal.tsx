import { useState } from "react";
import BaseModal from "../BaseModal";

interface LoginModalProps {
  showModal: boolean;
  onClose: () => void;
}

const LoginModal = ({ showModal, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = () => {
    console.log('Sign in running');
  }

  return (
    <BaseModal showModal={showModal} onClose={onClose}>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '7rem',
        }}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
      </div>
    </BaseModal>
  );
}

export default LoginModal;