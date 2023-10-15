import TaskModal from 'components/TaskModal/TaskModal';

import { useState } from 'react';

// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleAddNewTask = task => {
    setShowModal(true);
    setModalContent(task);
  };

  const handleDeleteTask = task => {
    setShowModal(true);
    setModalContent({ ...task, action: 'delete' });
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div>
      <h1> MainLayout</h1>
      <>
        <button
          onClick={() =>
            handleDeleteTask({
              category: 'to-do',
              date: '2023-12-31',
              id: 'jjjkkkk',
              priority: 'medium',
            })
          }
        >
          Show modal
        </button>
      </>
      {showModal && <TaskModal task={modalContent} closeModal={closeModal} />}
    </div>
    // {isLoading && !error && (
    //     <Circles
    //       height="80"
    //       width="80"
    //       color="#4d78a9"
    //!       wrapperClass={css.loader}
    //     />
    //   )}
  );
};

export default MainLayout;

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
