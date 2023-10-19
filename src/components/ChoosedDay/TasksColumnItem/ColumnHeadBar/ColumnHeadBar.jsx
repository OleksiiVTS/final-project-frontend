import { useState } from 'react';
import { useParams } from 'react-router';

import { StyledColumnHeadBar } from './ColumnHeadBar.styled';
import TaskModal from 'components/TaskModal/TaskModal';
// import { ReactComponent as PlusCircleLogo } from '../../../Pictures/plus-circle.svg';
import sprite from 'components/Pictures/sprite.svg';

const ColumnHeadBar = ({ title, category }) => {
  const [showModal, setShowModal] = useState(false);
  const { currentDate } = useParams();

  const handleClick = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <StyledColumnHeadBar className="columnHeadBar">
        <h3>{title}</h3>
        <button onClick={handleClick} aria-label="add task" type="button">
          <svg>
            <use href={sprite + '#icon-plus-circle'}></use>
          </svg>
          {/* <PlusCircleLogo /> */}
        </button>
      </StyledColumnHeadBar>

      {showModal && (
        <TaskModal
          task={{ category, date: currentDate }}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ColumnHeadBar;
