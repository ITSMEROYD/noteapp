import { createContext, useContext, useState } from 'react';  
import { MdAdd } from "react-icons/md";
import Toast from "../../components/ToastMessage/Toast";

const GlobalContext = createContext();                              /* 1 */

export const useGlobalContext = () => useContext(GlobalContext);    /* 2 */


const AddButtonToast = ({ children }) => {                              /* 3 */
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  

  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add",
  });
  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message: message,
      type,
    });
  };

  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: "",
    });
  };
  
  return (
    <GlobalContext.Provider value={{ openAddEditModal, setOpenAddEditModal, setShowToastMsg, setShowToastMsg, showToastMessage,handleCloseToast }}>              {/* 5 */}
{children}   
<button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />
    </GlobalContext.Provider>
  );
};

export default AddButtonToast;


