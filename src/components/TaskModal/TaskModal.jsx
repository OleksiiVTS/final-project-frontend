import DeleteForm from 'components/DeleteForm/DeleteForm';
import Modal from 'components/Modal/Modal';
import TaskForm from 'components/TaskForm/TaskForm';
import { createPortal } from 'react-dom';

const TaskModal = ({ task, closeModal }) => {
  return createPortal(
    <Modal closeModal={closeModal}>
      {task.action === 'delete' ? (
        <DeleteForm closeModal={closeModal} task={task}></DeleteForm>
      ) : (
        <TaskForm closeModal={closeModal} task={task}></TaskForm>
      )}
    </Modal>,
    document.body
  );
};

export default TaskModal;
