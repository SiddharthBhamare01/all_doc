
//2=============================================================================
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUserData } from '../redux/slices/userSlice.js'; // Updated path
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import SideBar from '../components/SideBar';

Modal.setAppElement('#root'); // Add this line to avoid accessibility-related warnings

const LogOut = () => {
    const [hamActive, setHamActive] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Clear local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Clear Redux state
        dispatch(clearUserData());

        // Show a toast notification
        toast.success("Logout successful");

        // Redirect to login page
        navigate('/login');
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='w-full flex justify-between'>
            <div>
                <SideBar hamActive={hamActive} setHamActive={setHamActive} />
            </div>
            <div className={` ${hamActive ? 'w-[75%]' : 'w-full'} d-flex align-items-center justify-content-center vh-100`}>
                <button onClick={openModal} className="btn btn-danger">
                    Click here to Logout 
                </button>
            </div>

            {/* <div className={`absolute top-4 right-4 z-10`}>
                <button onClick={openModal} className="btn btn-lg btn-danger shadow-lg">
                    Click here to Logout 
                </button>
            </div> */}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Logout Confirmation"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    }
                }}
            >
                <h2>Do you want to logout?</h2>
                <div className="d-flex justify-content-end mt-4">
                    <button onClick={closeModal} className="btn btn-secondary mr-2">
                        Cancel
                    </button>
                    <button onClick={handleLogout} className="btn btn-danger">
                        Logout
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default LogOut;


//1 ================================================================

// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { clearUserData } from '../redux/slices/userSlice.js'; // Updated path
// import { toast } from 'react-toastify';
// import SideBar from '../components/SideBar';

// const LogOut = () => {
//     const [hamActive, setHamActive] = useState(true);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleLogout = () => {
//         // Clear local storage
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');

//         // Clear Redux state
//         dispatch(clearUserData());

//         // Show a toast notification
//         toast.success("Logout successful");

//         // Redirect to login page
//         navigate('/login');
//     };

//     return (

//         <div className='w-full flex justify-between'>
//             <div>
//                 <SideBar hamActive={hamActive} setHamActive={setHamActive} />
//             </div>
//             <div className={` ${hamActive ? 'w-[75%]' : 'w-full'} flex vh-100 align-items-center justify-content-center`}>
//                 <button onClick={handleLogout} className="btn btn-danger">
//                     Logout
//                 </button>
//             </div>
//         </div>

//     );
// }

// export default LogOut;