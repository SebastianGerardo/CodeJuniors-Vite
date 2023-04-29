import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import './Login.css'

export default function Login() {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div onClick={handleOpenModal}>
                <h1 className="text-center font-poppins text-blue-600">
                    Registrarme
                </h1>
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <div>
                    <RegisterForm />
                </div>
            </Modal>
        </div>
    )
}
