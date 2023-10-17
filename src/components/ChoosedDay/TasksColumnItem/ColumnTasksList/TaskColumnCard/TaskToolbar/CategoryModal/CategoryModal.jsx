import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { StyledCategoryModal } from './CategoryModal.styled';

import { selectIsError } from 'redux/task/taskSelectors';
import sprite from 'components/Pictures/sprite.svg';

const CategoryModal = ({ task, coords, onClose }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectIsError);

  const titles = ['To do', 'In progress', 'Done'];
  const categoryList = ['to-do', 'in-progress', 'done'];

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const changeCategory = () => {
    // dispatch();
    console.log('dispatch');
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <StyledCategoryModal coords={coords} onClick={handleOverlayClick}>
      <div className="modal">
        <button
          onClick={changeCategory}
          aria-label="change task category"
          type="button"
        >
          {titles[1]}
          <span>
            <svg>
              <use href={sprite + '#arrow-circle-broken-right'}></use>
            </svg>
          </span>
        </button>
        <button
          onClick={changeCategory}
          aria-label="change task category"
          type="button"
        >
          {titles[2]}
          <span>
            <svg>
              <use href={sprite + '#arrow-circle-broken-right'}></use>
            </svg>
          </span>
        </button>
      </div>
    </StyledCategoryModal>,
    document.body
  );
};

export default CategoryModal;
