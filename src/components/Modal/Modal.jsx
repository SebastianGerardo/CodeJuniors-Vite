import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 0.3 }}
          className="fixed z-50 flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-5 max-w-[90%] max-h-[90%] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// COMO USARLO

//FUNCIONES QUE MANEJAN EL ESTADO DEL MODAL

//const [isOpen, setIsOpen] = useState(false);

//const handleOpenModal = () => {
//    setIsOpen(true);
//  };
//
//  const handleCloseModal = () => {
//    setIsOpen(false);
//  };


//RETURN DE TU COMPONENTE

//<div
//  onClick={handleOpenModal}
//>
//  <h1 className="text-center font-poppins text-blue-600">
//    AQUI HACES CLICK PARA QUE SE ABRA EL MODAL
//  </h1>
//</div>

//Aqui llamas al componente Modal y le pasas las props

//<Modal isOpen={isOpen} onClose={handleCloseModal}>

    //<div>
        //ESTE ES EL CONTENIDO QUE VA DENTRO DEL MODAL
    //</div>

//</Modal>